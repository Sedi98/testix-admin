import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function TeacherExamsTab() {
  return (
    <div className="space-y-7">
      <div className="grid grid-cols-1 gap-24 md:grid-cols-3">
        <ExamStat value="8" label="Paylaşılan imtahanlar" />
        <ExamStat value="312" label="Ümumi iştirak" purple />
        <ExamStat value="74%" label="Ortalama bal" green />
      </div>

      <div className="rounded-xl border border-neutral-stroke bg-white p-4">
        <SharedExamCard open />
        {Array.from({ length: 4 }).map((_, index) => (
          <SharedExamCard key={index} />
        ))}
      </div>
    </div>
  )
}

function ExamStat({
  value,
  label,
  purple = false,
  green = false,
}: {
  value: string
  label: string
  purple?: boolean
  green?: boolean
}) {
  return (
    <div className="rounded-lg border border-neutral-stroke bg-white p-7 text-center">
      <p
        className={`text-lg font-semibold ${
          purple ? "text-brand-primary" : green ? "text-green-700" : ""
        }`}
      >
        {value}
      </p>
      <p className="mt-3 text-base text-neutral-500">{label}</p>
    </div>
  )
}

function SharedExamCard({ open = false }: { open?: boolean }) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <section className="mb-4 rounded-xl border border-neutral-stroke bg-[#f7f7fb] last:mb-0">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="block size-12 rounded-full border-2 border-brand-primary bg-gradient-to-br from-green-300 via-yellow-200 to-pink-300" />
          <div>
            <p className="text-lg font-semibold">10B - Sınaq 2</p>
            <p className="text-xs font-medium text-dark-blue-300">
              İmtahan tarixi : 01 Mart 2026
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-center font-semibold">
          <Metric value="5/15" label="Şagird" purple />
          <Metric value="78%" label="Ortalama bal" />
          <Metric value="40" label="Sual" />
          {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>
      </button>

      {isOpen && (
        <div className="grid grid-cols-[1fr_140px] gap-4 px-4 pb-4">
          <div className="rounded-lg border border-neutral-stroke bg-white p-4">
            <span className="font-semibold">Link : </span>
            <span className="text-brand-primary">https://testix.az/exam/abc123xyz</span>
            <button
              type="button"
              className="float-right h-10 rounded-lg bg-brand-primary px-14 text-base font-semibold text-white"
            >
              Kopyala
            </button>
          </div>
          <div className="rounded-lg border border-neutral-stroke bg-white p-4 font-semibold">
            Giriş kodu : <span className="text-brand-primary">567</span>
          </div>
        </div>
      )}
    </section>
  )
}

function Metric({
  value,
  label,
  purple = false,
}: {
  value: string
  label: string
  purple?: boolean
}) {
  return (
    <div>
      <p className={purple ? "text-brand-primary" : ""}>{value}</p>
      <p className="text-xs text-dark-blue-300">{label}</p>
    </div>
  )
}
