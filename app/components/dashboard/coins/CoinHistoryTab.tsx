import { ArrowRight, ChevronLeft } from "lucide-react"
import { coinHistoryRows, type CoinHistoryRow } from "~/lib/coins"
import { StudentFilterSelect } from "~/components/dashboard/students/StudentFilterSelect"

export function CoinHistoryTab() {
  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <StudentFilterSelect
          label="Status"
          value="Hamısı"
          options={["Hamısı", "Alış", "Xərcləmə", "Admin"]}
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
                    aria-label="Bütün tarixçəni seç"
                    className="size-5 rounded border-brand-dark accent-brand-primary"
                  />
                </th>
                <th className="px-2 py-5">Tarix</th>
                <th className="px-2 py-5">İstifadəçi adı</th>
                <th className="px-2 py-5">Rol</th>
                <th className="px-2 py-5">Əməliyyatlar</th>
                <th className="px-2 py-5">Növ</th>
                <th className="px-2 py-5">Məbləğ</th>
                <th className="px-2 py-5">Koin</th>
              </tr>
            </thead>
            <tbody>
              {coinHistoryRows.map((row, index) => (
                <CoinHistoryRowView key={row.id} row={row} shaded={index % 2 === 1} />
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
    </div>
  )
}

function CoinHistoryRowView({
  row,
  shaded,
}: {
  row: CoinHistoryRow
  shaded: boolean
}) {
  return (
    <tr
      className={`border-t border-neutral-stroke text-base font-semibold ${shaded ? "bg-neutral-50" : "bg-white"
        }`}
    >
      <td className="px-3 py-3">
        <input
          type="checkbox"
          aria-label={`${row.user} əməliyyatını seç`}
          className="size-5 rounded border-brand-dark accent-brand-primary"
        />
      </td>
      <td className="whitespace-nowrap px-2 py-3">{row.date}</td>
      <td className="px-2 py-3">
        <span className="inline-flex items-center gap-3">
          <span className="size-10 rounded-full ring-1 ring-neutral-stroke" />
          {row.user}
        </span>
      </td>
      <td className="px-2 py-3">{row.role}</td>
      <td className="px-2 py-3">{row.operation}</td>
      <td className="px-2 py-3">
        <HistoryTypeBadge type={row.type} />
      </td>
      <td className="px-2 py-3">{row.amount}</td>
      <td
        className={`px-2 py-3 ${row.coins.startsWith("-") ? "text-red-500" : "text-green-700"
          }`}
      >
        {row.coins}
      </td>
    </tr>
  )
}

function HistoryTypeBadge({ type }: { type: CoinHistoryRow["type"] }) {
  const className =
    type === "Alış"
      ? "bg-green-50 text-green-700"
      : type === "Xərcləmə"
        ? "bg-red-0 text-red-500"
        : "bg-primary-0 text-brand-primary"

  return (
    <span className={`inline-flex min-w-[84px] justify-center rounded-full px-4 py-1 ${className}`}>
      {type}
    </span>
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
