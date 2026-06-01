import { TrendingUp, ChevronDown } from "lucide-react"

interface StatCardProps {
    icon: React.ReactNode
    label: string
    value: string
    delta: string
}

export function StatCard({ icon, label, value, delta }: StatCardProps) {
    return (
        <div className="bg-white rounded-xl p-3 flex flex-col items-start gap-3 border border-neutral-stroke">
            <div className="flex items-center gap-5">
            <div className="w-11 h-11 rounded-xl bg-dark-blue-50 flex items-center justify-center text-brand-dark shrink-0">
                {icon}
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-base text-neutral-500 font-medium">{label}</p>
                <p className="text-[25px] font-semibold text-brand-dark">{value}</p>
            </div>
            </div>
            <div className="flex w-full justify-end gap-2 items-center">
                    <TrendingUp size={16} className="text-green-600" />
                    <div className="flex items-center">
                    <span className="text-brand-dark text-base text-normal">{delta}</span>
                    <span className="text-brand-primary font-normal">/ son 1 ay</span>
                    <ChevronDown size={16} className="text-brand-primary" />
                    </div>
            </div>
        </div>
    )
}