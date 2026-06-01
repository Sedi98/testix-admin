import { useState } from "react"
import { CoinHistoryTab } from "~/components/dashboard/coins/CoinHistoryTab"
import { CoinPackagesTab } from "~/components/dashboard/coins/CoinPackagesTab"
import { CoinSalesTab } from "~/components/dashboard/coins/CoinSalesTab"
import { CoinTabs } from "~/components/dashboard/coins/CoinTabs"
import { StatSummaryCard } from "~/components/dashboard/students/StatSummaryCard"
import { coinStats, type CoinTab } from "~/lib/coins"

export default function CoinsPage() {
  const [activeTab, setActiveTab] = useState<CoinTab>("packages")

  return (
    <section className="space-y-8 text-brand-dark">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 md:grid-cols-2">
        {coinStats.map((card) => (
          <StatSummaryCard key={card.title} {...card} />
        ))}
      </div>

      <CoinTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "packages" && <CoinPackagesTab />}
      {activeTab === "sales" && <CoinSalesTab />}
      {activeTab === "history" && <CoinHistoryTab />}
    </section>
  )
}
