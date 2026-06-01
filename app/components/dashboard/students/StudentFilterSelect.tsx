import { ChevronDown } from "lucide-react"

export function StudentFilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <label className="relative inline-flex min-w-[132px] items-center">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full appearance-none rounded-xl border border-neutral-stroke bg-white px-5 pr-11 text-base font-semibold text-brand-secondary outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown
        size={22}
        className="pointer-events-none absolute right-4 text-brand-secondary"
      />
    </label>
  )
}
