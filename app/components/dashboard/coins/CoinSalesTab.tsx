import { ChevronDown, Coins } from "lucide-react"
import { IncomeChart } from "~/components/dashboard/overview/IncomeChart"
import { coinSales } from "~/lib/dashboard"

export function CoinSalesTab() {
  return (
    <div className="space-y-8">
      <IncomeChart />

      <section className="rounded-xl border border-neutral-stroke bg-white p-5">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Koin satışları</h2>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-stroke px-4 py-2 text-base font-semibold"
          >
            Son 1 ay
            <ChevronDown size={18} />
          </button>
        </div>

        <div className="space-y-6">
          {coinSales.map((coin) => (
            <div key={coin.label} className="grid grid-cols-[120px_1fr_90px] items-center gap-7">
              <div>
                <p className="inline-flex items-center gap-2 text-base">
                  <Coins size={18} />
                  {coin.label}
                </p>
                <p className="mt-2 text-base font-semibold">{coin.price}</p>
              </div>
              <div className="h-1.5 rounded-full bg-dark-blue-50">
                <div
                  className="h-full rounded-full bg-brand-primary-light"
                  style={{ width: `${coin.pct}%` }}
                />
              </div>
              <p className="text-right text-xl font-semibold">
                {coin.sold.toLocaleString()}{" "}
                <span className="text-xs font-normal">ədəd</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
