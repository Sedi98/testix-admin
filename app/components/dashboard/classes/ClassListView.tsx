import { ArrowRight, ChevronLeft, ClipboardList, Eye, GraduationCap } from "lucide-react"
import { classStats, type ClassItem } from "~/lib/classes"
import { StatusBadge } from "~/components/dashboard/students/StudentBadges"
import { StatSummaryCard } from "~/components/dashboard/students/StatSummaryCard"
import { StudentFilterSelect } from "~/components/dashboard/students/StudentFilterSelect"

export function ClassListView({
  statusFilter,
  classes,
  onStatusFilterChange,
  onSelectClass,
}: {
  statusFilter: string
  classes: ClassItem[]
  onStatusFilterChange: (value: string) => void
  onSelectClass: (item: ClassItem) => void
}) {
  return (
    <section className="space-y-8 text-brand-dark">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 md:grid-cols-2">
        {classStats.map((card) => (
          <StatSummaryCard key={card.title} {...card} />
        ))}
      </div>

      <div className="flex flex-wrap justify-end gap-6">
        <StudentFilterSelect
          label="Status"
          value={statusFilter}
          options={["Hamısı", "Aktiv", "Deaktiv"]}
          onChange={onStatusFilterChange}
        />
        <button className="h-12 rounded-xl border border-neutral-stroke bg-white px-5 text-base font-semibold text-brand-secondary">
          142 Sinif
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-stroke bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr className="bg-dark-blue-50 text-base font-semibold text-brand-dark">
                <th className="w-[54px] px-3 py-5">
                  <input
                    type="checkbox"
                    aria-label="Bütün sinifləri seç"
                    className="size-5 rounded border-brand-dark accent-brand-primary"
                  />
                </th>
                <th className="px-2 py-5">Yaradılma tarixi</th>
                <th className="px-2 py-5">Müəllim</th>
                <th className="px-2 py-5">Sinif adı</th>
                <th className="px-2 py-5">İmtahanlar</th>
                <th className="px-2 py-5">Şagirdlər</th>
                <th className="px-2 py-5">Status</th>
                <th className="px-2 py-5">Ətraflı</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-t border-neutral-stroke text-base font-semibold ${index % 2 === 1 ? "bg-neutral-50" : "bg-white"
                    }`}
                >
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      aria-label={`${item.name} seç`}
                      className="size-5 rounded border-brand-dark accent-brand-primary"
                    />
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">{item.createdAt}</td>
                  <td className="px-2 py-3">
                    <span className="inline-flex items-center gap-3">
                      <span className="size-10 rounded-full ring-1 ring-neutral-stroke" />
                      {item.teacher}
                    </span>
                  </td>
                  <td className="px-2 py-3">{item.name}</td>
                  <td className="px-2 py-3">
                    <span className="inline-flex items-center gap-2">
                      <ClipboardList size={18} />
                      {item.exams}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <span className="inline-flex items-center gap-2">
                      <GraduationCap size={18} />
                      {item.students}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    <StatusBadge value={item.status} />
                  </td>
                  <td className="px-2 py-3">
                    <button
                      type="button"
                      onClick={() => onSelectClass(item)}
                      className="inline-flex items-center gap-2 rounded-md px-2 py-1 font-semibold transition-colors hover:bg-primary-0"
                    >
                      <Eye size={18} />
                      Bax
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-stroke px-4 py-3 text-sm text-neutral-800">
          <span>1-10 / 142</span>
          <div className="flex items-center gap-2">
            <PaginationButton>
              <ChevronLeft size={18} />
            </PaginationButton>
            {["1", "2", "3", "4", "...", "142"].map((page) => (
              <PaginationButton key={page} active={page === "2"}>
                {page}
              </PaginationButton>
            ))}
            <PaginationButton>
              <ArrowRight size={18} />
            </PaginationButton>
          </div>
        </div>
      </div>
    </section>
  )
}

function PaginationButton({
  children,
  active = false,
}: {
  children: React.ReactNode
  active?: boolean
}) {
  return (
    <button
      type="button"
      className={`flex size-8 items-center justify-center rounded border text-base font-semibold transition-colors ${active
          ? "border-dark-blue-50 bg-dark-blue-50 text-brand-dark"
          : "border-neutral-stroke bg-white text-neutral-800 hover:bg-neutral-50"
        }`}
    >
      {children}
    </button>
  )
}
