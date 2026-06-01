import { ChevronDown, X } from "lucide-react"
import type { Student } from "~/lib/students"

export function EditStudentModal({
  student,
  onClose,
}: {
  student: Student
  onClose: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-[540px] overflow-hidden rounded-xl bg-white">
        <div className="flex items-center justify-between bg-brand-primary px-6 py-5">
          <h2 className="text-xl font-semibold text-white">Redaktə et</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white transition hover:opacity-80"
            aria-label="Bağla"
          >
            <X size={26} />
          </button>
        </div>
        <div className="space-y-5 px-6 py-7">
          <EditField label="Ad Soyad" defaultValue="Aynur Salmanzadə" />
          <EditField label="Telefon nömrəsi" defaultValue={student.phone} />
          <EditSelect label="Paket" options={["Pro", "Premium", "Pulsuz"]} />
          <EditSelect label="Status" options={["Aktiv", "Deaktiv"]} green />
          <div className="grid grid-cols-2 gap-10 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="h-12 rounded-xl border border-neutral-stroke bg-white text-base font-semibold text-brand-primary"
            >
              Ləğv et
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-12 rounded-xl bg-brand-primary text-base font-semibold text-white"
            >
              Yadda saxla
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function EditField({
  label,
  defaultValue,
}: {
  label: string
  defaultValue: string
}) {
  return (
    <label className="block text-sm font-semibold text-brand-dark">
      {label}
      <input
        defaultValue={defaultValue}
        className="mt-2 h-14 w-full rounded-xl border-0 bg-neutral-50 px-4 text-base font-normal text-brand-secondary outline-none focus:ring-2 focus:ring-brand-primary/30"
      />
    </label>
  )
}

function EditSelect({
  label,
  options,
  green = false,
}: {
  label: string
  options: string[]
  green?: boolean
}) {
  return (
    <label className="relative block text-sm font-semibold text-brand-dark">
      {label}
      <select
        className={`mt-2 h-14 w-full appearance-none rounded-xl border-0 bg-neutral-50 px-4 text-base font-normal outline-none focus:ring-2 focus:ring-brand-primary/30 ${
          green ? "text-green-700" : "text-brand-secondary"
        }`}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown
        size={22}
        className="pointer-events-none absolute bottom-4 right-4 text-brand-dark"
      />
    </label>
  )
}
