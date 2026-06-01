import { ArrowLeft } from "lucide-react"
import { classTabs, type ClassTab } from "~/lib/classes"

export function ClassDetailHeader({
  activeTab,
  onBack,
  onTabChange,
}: {
  activeTab: ClassTab
  onBack: () => void
  onTabChange: (tab: ClassTab) => void
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
        <span className="rounded-full bg-green-50 px-8 py-1 text-base font-semibold text-green-700">
          • Aktiv
        </span>
      </div>

      <div className="grid grid-cols-3 border-b border-dark-blue-300">
        {classTabs.map((tab) => (
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
