import {
} from "recharts"
import {
    Users, GraduationCap, UserCheck,
    ClipboardCheck,
} from "lucide-react"
import { StatCard } from "~/components/dashboard/overview/StatCard"
import { TopExamsCard } from "~/components/dashboard/overview/TopExamsCard"
import { CoinSalesCard } from "~/components/dashboard/overview/CoinSalesCard"
import { IncomeChart } from "~/components/dashboard/overview/IncomeChart"

export default function DashboardIndex() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-4 gap-4">
                <StatCard icon={<Users size={24} />} label="Müəllim" value="1,200" delta="+20" />
                <StatCard icon={<GraduationCap size={24} />} label="Tələbə" value="5,700" delta="+100" />
                <StatCard icon={<UserCheck size={24} />} label="Valideyn" value="2,300" delta="+19" />
                <StatCard icon={<ClipboardCheck size={24} />} label="Keçirilən imtahanlar" value="30,000" delta="+2000" />
            </div>

                <IncomeChart />

            <div className="grid grid-cols-2 gap-4">
                <TopExamsCard />
                <CoinSalesCard />
            </div>
        </div>
    )
}
