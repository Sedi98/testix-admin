import type { Student } from "~/lib/students"

export function PackageBadge({ value }: { value: Student["package"] }) {
  const className =
    value === "Pro"
      ? "bg-primary-0 text-brand-primary"
      : value === "Premium"
        ? "bg-green-50 text-green-700"
        : "bg-neutral-200 text-neutral-500"

  return (
    <span
      className={`inline-flex min-w-[82px] justify-center rounded-full px-4 py-1 text-base font-semibold ${className}`}
    >
      {value}
    </span>
  )
}

export function StatusBadge({ value }: { value: Student["status"] }) {
  return (
    <span
      className={`inline-flex min-w-[84px] justify-center rounded-full px-4 py-1 text-base font-semibold ${
        value === "Aktiv"
          ? "bg-green-50 text-green-700"
          : "bg-neutral-200 text-neutral-500"
      }`}
    >
      • {value}
    </span>
  )
}
