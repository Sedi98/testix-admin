import { ArrowDownRight, ArrowUpRight, ChevronDown } from "lucide-react"
import type { StudentStatCard } from "~/lib/students"

export function StatSummaryCard({
  title,
  value,
  meta,
  icon: Icon,
  positive,
}: StudentStatCard) {
  const TrendIcon = positive ? ArrowUpRight : ArrowDownRight

  return (
    <article className="rounded-lg border border-neutral-stroke bg-white p-4">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-dark-blue-50">
          <Icon size={24} />
        </div>
        <div className="min-w-0">
          <p className="text-base font-semibold text-neutral-500">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-base font-semibold">
            <TrendIcon
              size={16}
              className={positive ? "text-green-700" : "text-red-500"}
            />
            <span>{meta.split("/")[0]}</span>
            <span className="text-brand-primary">/ son 1 ay</span>
            <ChevronDown size={16} className="text-brand-primary" />
          </p>
        </div>
      </div>
    </article>
  )
}
