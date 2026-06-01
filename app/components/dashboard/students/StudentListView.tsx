import { ArrowRight, ChevronLeft, Coins, Eye } from "lucide-react"
import { statCards, type Student } from "~/lib/students"
import { PackageBadge, StatusBadge } from "./StudentBadges"
import { StudentAvatar } from "./StudentAvatar"
import { StudentFilterSelect } from "./StudentFilterSelect"
import { StatSummaryCard } from "./StatSummaryCard"

type StudentListViewProps = {
  students: Student[]
  packageFilter: string
  linkFilter: string
  statusFilter: string
  onPackageFilterChange: (value: string) => void
  onLinkFilterChange: (value: string) => void
  onStatusFilterChange: (value: string) => void
  onSelectStudent: (student: Student) => void
}

export function StudentListView({
  students,
  packageFilter,
  linkFilter,
  statusFilter,
  onPackageFilterChange,
  onLinkFilterChange,
  onStatusFilterChange,
  onSelectStudent,
}: StudentListViewProps) {
  return (
    <section className="space-y-8 text-brand-dark">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 md:grid-cols-2">
        {statCards.map((card) => (
          <StatSummaryCard key={card.title} {...card} />
        ))}
      </div>

      <div className="flex flex-wrap justify-end gap-6">
        <StudentFilterSelect
          label="Paket"
          value={packageFilter}
          options={["Hamısı", "Pro", "Premium", "Pulsuz"]}
          onChange={onPackageFilterChange}
        />
        <StudentFilterSelect
          label="Bağlantı"
          value={linkFilter}
          options={["Hamısı", "Müəllim", "Valideyn", "Bağlantısız"]}
          onChange={onLinkFilterChange}
        />
        <StudentFilterSelect
          label="Status"
          value={statusFilter}
          options={["Hamısı", "Aktiv", "Deaktiv"]}
          onChange={onStatusFilterChange}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-stroke bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1040px] border-collapse text-left">
            <thead>
              <tr className="bg-dark-blue-50 text-xl font-semibold text-brand-dark">
                <th className="w-[54px] px-3 py-5">
                  <input
                    type="checkbox"
                    aria-label="Bütün şagirdləri seç"
                    className="size-5 rounded border-brand-dark accent-brand-primary"
                  />
                </th>
                <th className="px-2 py-5">Qeydiyyat</th>
                <th className="px-2 py-5">Ad-Soyad/Telefon</th>
                <th className="px-2 py-5">Paket</th>
                <th className="px-2 py-5">Koin</th>
                <th className="px-2 py-5">Bağlantılar</th>
                <th className="px-2 py-5">Status</th>
                <th className="px-2 py-5">Ətraflı</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr
                  key={student.id}
                  className={`border-t border-neutral-stroke text-base font-semibold ${
                    index % 2 === 1 ? "bg-neutral-50" : "bg-white"
                  }`}
                >
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      aria-label={`${student.name} seç`}
                      className="size-5 rounded border-brand-dark accent-brand-primary"
                    />
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">
                    {student.registeredAt}
                  </td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-3">
                      <StudentAvatar student={student} />
                      <div className="leading-tight">
                        <p>{student.name}</p>
                        <p className="text-sm font-normal text-brand-dark">
                          {student.phone}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <PackageBadge value={student.package} />
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">
                    <span className="inline-flex items-center gap-2">
                      <Coins size={18} />
                      {student.coins}
                    </span>
                  </td>
                  <td className="px-2 py-3">
                    {student.links.length ? (
                      <div className="flex flex-col gap-1">
                        {student.links.map((link) => (
                          <span key={link}>{link}</span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-dark-blue-300">-</span>
                    )}
                  </td>
                  <td className="px-2 py-3">
                    <StatusBadge value={student.status} />
                  </td>
                  <td className="px-2 py-3">
                    <button
                      type="button"
                      onClick={() => onSelectStudent(student)}
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
          <span>1-10 / 5,700</span>
          <div className="flex items-center gap-2">
            <PaginationButton>
              <ChevronLeft size={18} />
            </PaginationButton>
            {["1", "2", "3", "4", "...", "570"].map((page) => (
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
      className={`flex size-8 items-center justify-center rounded border text-base font-semibold transition-colors ${
        active
          ? "border-dark-blue-50 bg-dark-blue-50 text-brand-dark"
          : "border-neutral-stroke bg-white text-neutral-800 hover:bg-neutral-50"
      }`}
    >
      {children}
    </button>
  )
}
