import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ChevronDown } from 'lucide-react'
import { revenueData } from '~/lib/dashboard'
import { CustomTooltip } from './CustomTooltip'

export const IncomeChart = () => {
  return (
         <div className="bg-white rounded-2xl p-6 border border-neutral-stroke">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-base font-bold text-gray-800">Gəlir Dinamikası</h2>
                    <button className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 transition-all">
                        Aylıq <ChevronDown size={14} />
                    </button>
                </div>
                <ResponsiveContainer width="100%" height={280}>
                    <LineChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#7c3aed" />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} domain={[100, 700]} />
                        <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#e5e7eb", strokeDasharray: "4 4" }} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="url(#lineGradient)"
                            strokeWidth={2.5}
                            dot={false}
                            activeDot={{ r: 5, fill: "#7c3aed", stroke: "#fff", strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
   
  )
}