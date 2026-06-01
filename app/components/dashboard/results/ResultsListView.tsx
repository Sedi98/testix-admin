import { ArrowRight, ChevronLeft } from "lucide-react"
import { resultRows, resultStats, type ResultRow } from "~/lib/results"
import { StatSummaryCard } from "~/components/dashboard/students/StatSummaryCard"
import { StudentFilterSelect } from "~/components/dashboard/students/StudentFilterSelect"

export function ResultsListView() {
  return (
    <section className="space-y-8 text-brand-dark">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4 md:grid-cols-2">
        {resultStats.map((card) => (
          <StatSummaryCard key={card.title} {...card} />
        ))}
      </div>

      <div className="flex flex-wrap justify-end gap-6">
        <StudentFilterSelect
          label="Kateqoriya"
          value="Kateqoriya"
          options={["Hamısı", "Abituriyent", "MİQ", "Sürücülük", "YÖS", "Buraxılış"]}
          onChange={() => undefined}
        />
        <StudentFilterSelect
          label="Ballar"
          value="Ballar"
          options={["Hamısı", "Yüksək ( 80% + )", "Orta ( 60 -80% )", "Aşağı ( 60% - dən az )"]}
          onChange={() => undefined}
        />
        <StudentFilterSelect
          label="Tarixlər"
          value="Tarixlər"
          options={["Hamısı", "Bu gün", "Bu həftə", "Bu ay"]}
          onChange={() => undefined}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-neutral-stroke bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px] border-collapse text-left">
            <thead>
              <tr className="bg-dark-blue-50 text-base font-semibold text-brand-dark">
                <th className="w-[54px] px-3 py-5">
                  <input
                    type="checkbox"
                    aria-label="Bütün nəticələri seç"
                    className="size-5 rounded border-brand-dark accent-brand-primary"
                  />
                </th>
                <th className="px-2 py-5">Tarix</th>
                <th className="px-2 py-5">Şagird adı</th>
                <th className="px-2 py-5">Kateqoriya</th>
                <th className="px-2 py-5">İmtahan</th>
                <th className="px-2 py-5">Sual</th>
                <th className="px-2 py-5">Doğru</th>
                <th className="px-2 py-5">Yanlış</th>
                <th className="px-2 py-5">Bal</th>
                <th className="px-2 py-5">İnkişaf</th>
              </tr>
            </thead>
            <tbody>
              {resultRows.map((row, index) => (
                <ResultTableRow key={row.id} row={row} shaded={index % 2 === 1} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-stroke px-4 py-3 text-sm text-neutral-800">
          <span>1-10 / 18,000</span>
          <div className="flex items-center gap-2">
            <PaginationButton>
              <ChevronLeft size={18} />
            </PaginationButton>
            {["1", "2", "3", "4", "...", "18000"].map((page) => (
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

function ResultTableRow({ row, shaded }: { row: ResultRow; shaded: boolean }) {
  return (
    <tr
      className={`border-t border-neutral-stroke text-base font-semibold ${shaded ? "bg-neutral-50" : "bg-white"
        }`}
    >
      <td className="px-3 py-3">
        <input
          type="checkbox"
          aria-label={`${row.studentName} nəticəsini seç`}
          className="size-5 rounded border-brand-dark accent-brand-primary"
        />
      </td>
      <td className="whitespace-nowrap px-2 py-3">{row.date}</td>
      <td className="px-2 py-3">
        <span className="inline-flex items-center gap-3">
          <span className="size-9 rounded-full ring-1 ring-neutral-stroke" />
          {row.studentName}
        </span>
      </td>
      <td className="px-2 py-3">{row.category}</td>
      <td className="px-2 py-3">{row.exam}</td>
      <td className="px-2 py-3 text-xl">{row.questions}</td>
      <td className="px-2 py-3 text-xl text-green-700">{row.correct}</td>
      <td className="px-2 py-3 text-xl text-red-500">{row.wrong}</td>
      <td className="px-2 py-3 text-xl">{row.score}</td>
      <td className="px-2 py-3 text-xl text-green-700">↗ {row.growth}</td>
    </tr>
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
