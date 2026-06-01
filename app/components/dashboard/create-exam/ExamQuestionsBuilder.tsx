import {
  Bold,
  Copy,
  GripVertical,
  Image,
  Info,
  Italic,
  Plus,
  Save,
  Smile,
  Trash,
  Underline,
  X,
} from "lucide-react"
import { useState, type DragEvent, type ReactNode } from "react"
import { Button } from "~/components/ui/button"
import { questionTypes, type QuestionType } from "~/lib/createExam"

const questions: { id: number; type: QuestionType; withImage?: boolean; openAnswer?: boolean }[] = [
  { id: 1, type: "Çoxdan seçməli" },
  { id: 2, type: "Bir neçə cavablı" },
  { id: 3, type: "Çoxdan seçməli", withImage: true },
  { id: 4, type: "Açıq sual", openAnswer: true },
]

export function ExamQuestionsActions() {
  return (
    <div className="flex gap-4">
      <Button
        type="button"
        className="h-12 gap-2 rounded-xl border border-neutral-stroke bg-white px-8 text-brand-primary"
      >
        <Save size={20} />
        Yadda saxla
      </Button>
      <Button
        type="button"
        className="h-12 gap-2 rounded-xl bg-brand-primary px-10 text-white opacity-60"
      >
        <Plus size={20} />
        Təsdiqlə
      </Button>
    </div>
  )
}

export function ExamQuestionsBuilder() {
  return (
    <div className="rounded-[20px] bg-white p-8">
      <div className="space-y-6">
        <div className="flex items-center gap-3 rounded-2xl bg-orange-50 p-4">
          <Info size={22} className="text-orange-800" />
          <p className="text-sm font-medium text-orange-800">
            29 sual daha əlavə etməlisiniz. Cəmi 30 sual lazımdır.
          </p>
        </div>

        {questions.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}

        <button
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-brand-primary text-base font-semibold text-brand-primary"
        >
          <Plus size={20} />
          Sual əlavə et (1/30)
        </button>
      </div>
    </div>
  )
}

function QuestionCard({
  id,
  type,
  withImage = false,
  openAnswer = false,
}: {
  id: number
  type: QuestionType
  withImage?: boolean
  openAnswer?: boolean
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-blue">
      <div className="flex items-center justify-between bg-neutral-50 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-brand-primary text-sm font-bold text-white">
            {id}
          </span>
          <p className="font-bold">Sual</p>
        </div>
        <div className="flex gap-3">
          <SmallAction icon={<Copy size={20} />} label="Kopyala" />
          <SmallAction icon={<Trash size={20} />} label="Sil" />
        </div>
      </div>

      <div className="space-y-5 p-5">
        <label className="flex items-center gap-3 text-sm font-semibold text-brand-secondary">
          Sual tipi:
          <select
            defaultValue={type}
            className="h-10 rounded-xl border border-neutral-stroke bg-white px-4 text-brand-dark outline-none"
          >
            {questionTypes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>

        <Toolbar />

        <div className="flex gap-4">
          <textarea
            className="min-h-[76px] flex-1 resize-none rounded-xl border border-neutral-stroke bg-neutral-50 p-4 text-base outline-none"
            placeholder="Sual mətni yazın..."
          />
          {withImage && <ImagePreview />}
        </div>

        {openAnswer ? <OpenAnswerBlock /> : <Variants withImage={withImage} />}
      </div>
    </article>
  )
}

function SmallAction({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="inline-flex h-9 items-center gap-2 rounded-lg border border-neutral-stroke bg-white px-4 text-base font-semibold text-brand-primary"
    >
      {icon}
      {label}
    </button>
  )
}

function Toolbar() {
  return (
    <div className="flex h-10 items-center gap-5 rounded-xl border border-neutral-stroke px-4">
      <Bold size={18} className="text-brand-secondary" />
      <Italic size={18} className="text-brand-secondary" />
      <Underline size={18} className="text-brand-secondary" />
      <span className="h-5 w-px bg-neutral-stroke" />
      <Image size={18} className="text-brand-secondary" />
    </div>
  )
}

type VariantOption = {
  id: string
  letter: string
  active?: boolean
  withImage?: boolean
}

function Variants({ withImage = false }: { withImage?: boolean }) {
  const [draggedId, setDraggedId] = useState<string | null>(null)
  const [variants, setVariants] = useState<VariantOption[]>([
    { id: "a", letter: "A", active: true, withImage },
    { id: "b", letter: "B" },
    { id: "c", letter: "C" },
    { id: "d", letter: "D" },
  ])

  const reorderVariants = (targetId: string) => {
    if (!draggedId || draggedId === targetId) return

    setVariants((current) => {
      const fromIndex = current.findIndex((variant) => variant.id === draggedId)
      const toIndex = current.findIndex((variant) => variant.id === targetId)

      if (fromIndex === -1 || toIndex === -1) return current

      const next = [...current]
      const [moved] = next.splice(fromIndex, 1)
      next.splice(toIndex, 0, moved)
      return next
    })
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>, targetId: string) => {
    event.preventDefault()
    reorderVariants(targetId)
    setDraggedId(null)
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm font-semibold">
        Variantlar
        <span className="rounded-full bg-primary-0 px-3 py-1 text-brand-primary">
          1 doğru seçilib
        </span>
        <span className="text-brand-secondary">+ bal seçimi</span>
      </div>
      {variants.map((variant) => (
        <VariantRow
          key={variant.id}
          variant={variant}
          dragging={draggedId === variant.id}
          onDragStart={() => setDraggedId(variant.id)}
          onDragOver={(event) => event.preventDefault()}
          onDrop={(event) => handleDrop(event, variant.id)}
          onDragEnd={() => setDraggedId(null)}
        />
      ))}
      <button
        type="button"
        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-neutral-stroke text-sm font-semibold text-brand-secondary"
      >
        <Plus size={16} />
        Variant əlavə et
      </button>
    </div>
  )
}

function VariantRow({
  variant,
  dragging,
  onDragStart,
  onDragOver,
  onDrop,
  onDragEnd,
}: {
  variant: VariantOption
  dragging: boolean
  onDragStart: () => void
  onDragOver: (event: DragEvent<HTMLDivElement>) => void
  onDrop: (event: DragEvent<HTMLDivElement>) => void
  onDragEnd: () => void
}) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
      className={`grid grid-cols-[24px_28px_1fr_auto_auto] items-center gap-2 rounded-lg border px-3 py-2 ${
        variant.active ? "border-brand-primary bg-primary-0" : "border-neutral-stroke bg-neutral-50"
      } ${dragging ? "opacity-50 ring-2 ring-brand-primary/30" : ""}`}
    >
      <GripVertical size={18} className="cursor-grab text-neutral-500 active:cursor-grabbing" />
      <span className="flex size-6 items-center justify-center rounded-full bg-white text-xs font-semibold">
        {variant.letter}
      </span>
      <input
        className="bg-transparent text-sm outline-none"
        placeholder={`${variant.letter} variantı...`}
      />
      {variant.withImage && <ImagePreview small />}
      <Smile size={18} className="text-brand-secondary" />
      <X size={18} className="text-brand-secondary" />
    </div>
  )
}

function OpenAnswerBlock() {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold">Gözlənilən cavab (açıq)</p>
      <textarea
        className="min-h-[76px] w-full resize-none rounded-xl border border-neutral-stroke bg-neutral-50 p-4 text-base outline-none"
        placeholder="Gözlənilən cavabı yazın (açıq sual)..."
      />
      <button
        type="button"
        className="flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-neutral-stroke text-sm font-semibold text-brand-secondary"
      >
        <Plus size={16} />
        Variant əlavə et
      </button>
    </div>
  )
}

function ImagePreview({ small = false }: { small?: boolean }) {
  return (
    <div
      className={`shrink-0 rounded-lg bg-gradient-to-br from-[#0c2340] via-[#f59e0b] to-[#0f172a] ${
        small ? "h-10 w-20" : "h-20 w-28"
      }`}
    />
  )
}
