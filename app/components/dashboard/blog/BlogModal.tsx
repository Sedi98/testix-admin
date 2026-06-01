import { Upload, X } from "lucide-react"
import type { BlogPost } from "~/lib/blog"

export function BlogModal({
  mode,
  post,
  onClose,
}: {
  mode: "add" | "edit"
  post?: BlogPost
  onClose: () => void
}) {
  const isEdit = mode === "edit"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-[940px] overflow-hidden rounded-xl bg-white">
        <div className="flex items-center justify-between bg-brand-primary px-5 py-5">
          <h2 className="text-xl font-semibold text-white">
            {isEdit ? "Xəbər redaktə et" : "Xəbər əlavə et"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white transition hover:opacity-80"
            aria-label="Bağla"
          >
            <X size={26} />
          </button>
        </div>

        <div className="grid grid-cols-[390px_1fr] gap-8 p-6">
          <div>
            <p className="text-sm font-semibold">Xəbərin şəkli</p>
            <div
              className={`mt-4 flex h-[220px] flex-col items-center justify-center rounded-xl ${
                isEdit
                  ? "bg-gradient-to-br from-neutral-500 via-neutral-300 to-neutral-700 text-white"
                  : "border border-dashed border-brand-primary bg-white text-neutral-500"
              }`}
            >
              <Upload size={38} />
              <p className="mt-6 text-base">{isEdit ? "Şəkil dəyiş" : "Şəkil seç"}</p>
            </div>
            <p className="mt-2 text-sm text-brand-secondary">JPG or PNG · Max size 2MB</p>
          </div>

          <div className="space-y-5">
            <EditField
              label="Başlıq"
              defaultValue={post?.title}
              placeholder="Sağlam yuxunun Faydaları"
            />
            <label className="block text-sm font-semibold">
              Açıqlama
              <textarea
                defaultValue={isEdit ? post?.description : undefined}
                placeholder="Xəbər haqqında qısa məlumat........"
                className="mt-3 min-h-[112px] w-full resize-none rounded-xl border-0 bg-neutral-50 px-4 py-4 text-base text-brand-secondary outline-none focus:ring-2 focus:ring-brand-primary/30"
              />
            </label>
          </div>
        </div>

        <div className="flex justify-between px-6 pb-6">
          <button
            type="button"
            onClick={onClose}
            className="h-12 w-48 rounded-xl border border-neutral-stroke bg-white text-base font-semibold text-brand-primary"
          >
            Ləğv et
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-12 w-48 rounded-xl bg-brand-primary text-base font-semibold text-white"
          >
            Yadda saxla
          </button>
        </div>
      </div>
    </div>
  )
}

function EditField({
  label,
  defaultValue,
  placeholder,
}: {
  label: string
  defaultValue?: string
  placeholder: string
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="mt-3 h-14 w-full rounded-xl border-0 bg-neutral-50 px-4 text-base text-brand-secondary outline-none focus:ring-2 focus:ring-brand-primary/30"
      />
    </label>
  )
}
