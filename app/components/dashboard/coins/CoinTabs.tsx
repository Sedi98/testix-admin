import { coinTabs, type CoinTab } from "~/lib/coins"

export function CoinTabs({
  activeTab,
  onTabChange,
}: {
  activeTab: CoinTab
  onTabChange: (tab: CoinTab) => void
}) {
  return (
    <div className="grid grid-cols-3 border-b border-dark-blue-300">
      {coinTabs.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onTabChange(tab.key)}
          className={`border-b px-4 py-3 text-xl font-semibold transition-colors ${
            activeTab === tab.key
              ? "border-brand-dark text-brand-dark"
              : "border-transparent text-dark-blue-300 hover:text-brand-dark"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
