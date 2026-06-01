import { ArrowRight, ChevronLeft, Coins, Eye } from "lucide-react"
import { teacherStats, type Teacher } from "~/lib/teachers"
import { PackageBadge, StatusBadge } from "~/components/dashboard/students/StudentBadges"
import { StudentFilterSelect } from "~/components/dashboard/students/StudentFilterSelect"
import { StatSummaryCard } from "~/components/dashboard/students/StatSummaryCard"
import { TeacherAvatar } from "./TeacherAvatar"

type TeacherListViewProps = {
  teachers: Teacher[]
  packageFilter: string
  statusFilter: string
  onPackageFilterChange: (value: string) => void
  onStatusFilterChange: (value: string) => void
  onSelectTeacher: (teacher: Teacher) => void
}

export function TeacherListView({
  teachers,
  packageFilter,
  statusFilter,
  onPackageFilterChange,
  onStatusFilterChange,
  onSelectTeacher,
}: TeacherListViewProps) {
  return (
    <section className="space-y-8 text-brand-dark">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 md:grid-cols-2">
        {teacherStats.map((card) => (
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
          label="Status"
          value={statusFilter}
          options={["Hamısı", "Aktiv", "Deaktiv"]}
          onChange={onStatusFilterChange}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-stroke bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1120px] border-collapse text-left">
            <thead>
              <tr className="bg-dark-blue-50 text-xl font-semibold text-brand-dark">
                <th className="w-[54px] px-3 py-5">
                  <input
                    type="checkbox"
                    aria-label="Bütün müəllimləri seç"
                    className="size-5 rounded border-brand-dark accent-brand-primary"
                  />
                </th>
                <th className="px-2 py-5">Qeydiyyat</th>
                <th className="px-2 py-5">Ad-Soyad/Telefon</th>
                <th className="px-2 py-5">Paket</th>
                <th className="px-2 py-5">Koin</th>
                <th className="px-2 py-5">Şagird sayı</th>
                <th className="px-2 py-5">Sinif sayı</th>
                <th className="px-2 py-5">İmtahanlar</th>
                <th className="px-2 py-5">Status</th>
                <th className="px-2 py-5">Ətraflı</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr
                  key={teacher.id}
                  className={`border-t border-neutral-stroke text-base font-semibold ${
                    index % 2 === 1 ? "bg-neutral-50" : "bg-white"
                  }`}
                >
                  <td className="px-3 py-3">
                    <input
                      type="checkbox"
                      aria-label={`${teacher.name} seç`}
                      className="size-5 rounded border-brand-dark accent-brand-primary"
                    />
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">{teacher.registeredAt}</td>
                  <td className="px-2 py-3">
                    <div className="flex items-center gap-3">
                      <TeacherAvatar teacher={teacher} />
                      <div className="leading-tight">
                        <p>{teacher.name}</p>
                        <p className="text-sm font-normal text-brand-dark">
                          {teacher.phone}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-3">
                    <PackageBadge value={teacher.package} />
                  </td>
                  <td className="whitespace-nowrap px-2 py-3">
                    <span className="inline-flex items-center gap-2">
                      <Coins size={18} />
                      {teacher.coins}
                    </span>
                  </td>
                  <td className="px-2 py-3">{teacher.studentCount}</td>
                  <td className="px-2 py-3">{teacher.classCount}</td>
                  <td className="px-2 py-3">{teacher.examCount}</td>
                  <td className="px-2 py-3">
                    <StatusBadge value={teacher.status} />
                  </td>
                  <td className="px-2 py-3">
                    <button
                      type="button"
                      onClick={() => onSelectTeacher(teacher)}
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
