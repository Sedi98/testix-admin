import type { ReactNode } from "react"

export function ReadonlyField({
  label,
  value,
  icon,
  valueClassName = "",
}: {
  label: string
  value: string
  icon?: ReactNode
  valueClassName?: string
}) {
  return (
    <label className="space-y-2 text-sm font-semibold">
      <span>{label}</span>
      <span
        className={`flex h-14 items-center gap-3 rounded-xl bg-neutral-50 px-4 text-base font-normal text-brand-secondary ${valueClassName}`}
      >
        {icon}
        {value}
      </span>
    </label>
  )
}

export function DetailRow({
  label,
  value,
  icon,
  accent,
}: {
  label: string
  value: string
  icon?: ReactNode
  accent?: "orange"
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <span>{label}</span>
      <span
        className={`inline-flex items-center gap-2 font-semibold ${
          accent === "orange" ? "text-orange-600" : ""
        }`}
      >
        {icon}
        {value}
      </span>
    </div>
  )
}
