import { coinSales } from '~/lib/dashboard'
import { ChevronRight, Coins } from 'lucide-react'

export const CoinSalesCard = () => {
  return (
      <div className="bg-white rounded-xl p-5 border border-neutral-stroke">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between mb-5 border-b border-neutral-stroke pb-2">
            <h2 className="text-lg font-medium text-brand-dark">Koin satışları</h2>
            <button className="flex items-center gap-2 text-brand-primary text-lg font-medium">
              Hamısına bax <ChevronRight size={16} />
            </button>
          </div>
          <div className="space-y-4">
            {coinSales.map((coin) => (
              <div key={coin.label} className="grid grid-cols-[1fr_2fr_auto] items-center gap-4">
                <div className="flex items-center gap-2">
                  <Coins size={15} className="text-violet-400" />
                  <div>
                    <p className="text-sm text-brand-dark font-medium leading-none">{coin.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{coin.price}</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full" style={{ width: `${coin.pct}%` }} />
                </div>
                <span className="text-sm font-bold text-brand-dark text-right min-w-[3rem]">
                  {coin.sold.toLocaleString()} <span className="text-gray-400 font-normal text-xs">ədəd</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}