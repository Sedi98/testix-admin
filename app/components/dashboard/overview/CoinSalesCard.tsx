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
          <div className="space-y-3">
            {coinSales.map((coin) => (
              <div key={coin.label} className="grid grid-cols-[1.6fr_2fr_1fr] items-center gap-2">
                <div className="flex gap-2 flex-col justify-center">
                  <div className='flex gap-2'>
                  <Coins size={18} className="text-brand-dark" />
                  <p className="text-base text-brand-dark font-medium">{coin.label}</p>
                  </div>
                  <p className="text-base font-semibold text-brand-dark">{coin.price}</p>
                </div>
                <div className="h-[6px] bg-dark-blue-50 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary-light rounded-full" style={{ width: `${coin.pct}%` }} />
                </div>
                <span className="text-xl font-medium text-brand-dark text-right">
                  {coin.sold.toLocaleString()} <span className="text-brand-dark font-normal text-xs">ədəd</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}