import { Plus } from "lucide-react"
import { Button } from "~/components/ui/button"
import { ExamSummaryStrip } from "./ExamSummaryStrip"

export function ExamSummaryStep({ onAddQuestion }: { onAddQuestion: () => void }) {
  return (
    <div className="rounded-[20px] bg-white p-8">
      <div className="space-y-5">
        <h2 className="text-xl font-semibold">İmtahan xülasəsi</h2>
        <ExamSummaryStrip />
      </div>

      <div className="mt-8 flex min-h-[250px] flex-col items-center justify-center gap-5 rounded-2xl border border-dashed border-neutral-stroke p-8 text-center">
        <div className="rounded-[20px] bg-neutral-50 p-5">
          <Plus size={32} />
        </div>
        <div>
          <p className="text-xl font-bold">Sual əlavə edin</p>
          <p className="mt-2 text-sm font-medium text-brand-secondary">
            Hələ heç bir sual əlavə edilməyib. Aşağıdakı düymə ilə başlayın.
          </p>
        </div>
        <Button
          type="button"
          onClick={onAddQuestion}
          className="h-12 rounded-xl bg-brand-primary px-8 text-base font-semibold text-white"
        >
          <Plus size={24} />
          İlk sualı əlavə et
        </Button>
      </div>
    </div>
  )
}
