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
                    <div className="space-y-4">
                        {topExams.map((exam) => (
                            <div key={exam.name} className="grid grid-cols-[1fr_2fr_auto] items-center gap-4">
                                <span className="text-sm text-brand-dark font-medium">{exam.name}</span>
                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full" style={{ width: `${exam.pct}%` }} />
                                </div>
                                <span className="text-sm font-bold text-brand-dark text-right min-w-[3rem]">{exam.count.toLocaleString()}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
  )
}