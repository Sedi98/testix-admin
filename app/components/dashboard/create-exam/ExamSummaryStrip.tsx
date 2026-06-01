import { examSummaryItems } from "~/lib/createExam"

export function ExamSummaryStrip() {
  return (
    <div className="flex gap-3 rounded-xl border border-neutral-stroke p-5">
      {examSummaryItems.map((item) => (
        <div key={item.label} className="flex flex-1 flex-col gap-2">
          <p className="text-sm font-medium text-brand-secondary">{item.label}</p>
          <p className="text-sm font-semibold text-brand-dark">{item.value}</p>
        </div>
      ))}
    </div>
  )
}
