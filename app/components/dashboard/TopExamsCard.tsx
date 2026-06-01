import { topExams } from "~/lib/dashboard"
import { ChevronRight } from "lucide-react"

export const TopExamsCard = () => {
  return (
   <div className="bg-white rounded-xl p-5 border border-neutral-stroke">
    <div className="flex  flex-col gap-6">
                    <div className="flex items-center justify-between mb-5 border-b border-neutral-stroke pb-2">
                        <h2 className="text-lg font-medium text-brand-dark">Ən çox keçirilən imtahanlar</h2>
                        <button className="flex items-center gap-2 text-brand-primary text-lg font-medium">
                            Hamısına bax <ChevronRight size={16} />
                        </button>
                    </div>
                    <div className="space-y-3">
                        {topExams.map((exam) => (
                            <div key={exam.name} className="grid grid-cols-[1.6fr_2fr_1fr] items-center gap-2">
                                <span className="text-xl text-brand-dark font-medium">{exam.name}</span>
                                <div className="h-[6px] bg-dark-blue-50 rounded-full overflow-hidden">
                                    <div className="h-full bg-brand-primary-light rounded-full" style={{ width: `${exam.pct}%` }} />
                                </div>
                                <span className="text-xl font-bold text-brand-dark text-right min-w-[3rem]">{exam.count.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
  )
}