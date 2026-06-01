import { ChevronLeft } from "lucide-react"
import type { ReactNode } from "react"
import type { ExamStep } from "~/lib/createExam"

export function ExamCreateLayout({
  step,
  subtitle,
  children,
  actions,
  onBack,
}: {
  step: ExamStep
  subtitle: string
  children: ReactNode
  actions?: ReactNode
  onBack?: () => void
}) {
  return (
    <section className="space-y-5 text-brand-dark">
      <div className="flex items-center justify-between gap-5 py-2">
        <div className="flex items-center gap-4">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="flex size-10 items-center justify-center rounded-xl border border-brand-primary text-brand-primary"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <div>
            <h1 className="text-2xl font-bold">İmtahan Yarat</h1>
            <p className="text-base font-medium text-brand-secondary">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <ExamStepper step={step} />
          {actions}
        </div>
      </div>

      {children}
    </section>
  )
}

function ExamStepper({ step }: { step: ExamStep }) {
  const secondActive = step === "questions"

  return (
    <div className="flex items-center gap-3 text-sm font-medium">
      <span className="flex size-7 items-center justify-center rounded-full bg-brand-primary text-white">
        1
      </span>
      <span className="font-semibold text-brand-dark">Parametrlər</span>
      <span className="h-0.5 w-10 rounded-full bg-neutral-stroke" />
      <span
        className={`flex size-7 items-center justify-center rounded-full ${
          secondActive
            ? "bg-brand-primary text-white"
            : "bg-dark-blue-50 text-brand-secondary"
        }`}
      >
        2
      </span>
      <span className={secondActive ? "font-semibold text-brand-dark" : "text-brand-secondary"}>
        Suallar
      </span>
    </div>
  )
}
