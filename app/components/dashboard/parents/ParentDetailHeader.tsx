import { ArrowLeft } from "lucide-react"
import { parentTabs, type ParentTab } from "~/lib/parents"

export function ParentDetailHeader({
  activeTab,
  onBack,
  onTabChange,
}: {
  activeTab: ParentTab
  onBack: () => void
  onTabChange: (tab: ParentTab) => void
}) {
  return (
    <div className="space-y-9">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-4 text-xl font-semibold"
        >
          <span className="flex size-10 items-center justify-center rounded-xl border-2 border-brand-primary text-brand-primary">
            <ArrowLeft size={24} />
          </span>
          Geri
        </button>

        <div className="flex items-center gap-8 text-base font-semibold">
          <span className="rounded-full bg-primary-0 px-8 py-1 text-brand-primary">
            Pro
          </span>
          <span className="text-green-700">• Aktiv</span>
        </div>
      </div>

      <div className="grid grid-cols-5 border-b border-dark-blue-300">
        {parentTabs.map((tab) => (
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
    </div>
  )
}
