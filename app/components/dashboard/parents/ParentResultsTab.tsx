import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function ParentResultsTab() {
  const [selectedChild, setSelectedChild] = useState<"leyla" | "arzu">("leyla")

  return (
    <div className="rounded-xl border border-neutral-stroke bg-white p-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ChildSelector
          active={selectedChild === "leyla"}
          initials="L.S"
          name="Leyla Salmanzade"
          onClick={() => setSelectedChild("leyla")}
        />
        <ChildSelector
          active={selectedChild === "arzu"}
          initials="A.S"
          name="Arzu Salmanzade"
          onClick={() => setSelectedChild("arzu")}
        />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-4">
        <ResultStat value="12" label="İmtahan" purple />
        <ResultStat value="74%" label="Ortalama bal" green />
        <ResultStat value="93%" label="Ən yüksək" />
        <ResultStat value="↗ + 1%" label="Son dəyişən" green />
      </div>

      <h2 className="mt-8 text-xl font-semibold">İmtahan Nəticələri - Müqayisəli</h2>
      <div className="mt-5 space-y-6">
        <SubjectResult title="Riyaziyyat Fənni üzrə" open />
        <SubjectResult title="Azərbaycan dili Fənni üzrə" attempts="2" growth="+ 12 %" />
      </div>
    </div>
  )
}

function ChildSelector({
  active,
  initials,
  name,
  onClick,
}: {
  active: boolean
  initials: string
  name: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-4 rounded-xl border bg-white p-5 text-left ${
        active ? "border-brand-primary" : "border-neutral-stroke"
      }`}
    >
      <span className="flex size-12 items-center justify-center rounded-full border border-neutral-stroke bg-primary-0 text-xl">
        {initials}
      </span>
      <span>
        <span className="block text-xl font-semibold">{name}</span>
        <span className="text-sm font-medium text-dark-blue-300">
          Qeydiyyat : 01 Mart 2026 / Bağlandı : 20 Mart 2026
        </span>
      </span>
    </button>
  )
}

function ResultStat({
  value,
  label,
  purple = false,
  green = false,
}: {
  value: string
  label: string
  purple?: boolean
  green?: boolean
}) {
  return (
    <div className="rounded-lg border border-neutral-stroke bg-neutral-50 p-7 text-center">
      <p
        className={`text-lg font-semibold ${
          purple ? "text-brand-primary" : green ? "text-green-700" : ""
        }`}
      >
        {value}
      </p>
      <p className="mt-3 text-base text-neutral-500">{label}</p>
    </div>
  )
}

function SubjectResult({
  title,
  attempts = "3",
  growth = "+ 1 %",
  open = false,
}: {
  title: string
  attempts?: string
  growth?: string
  open?: boolean
}) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <section className="overflow-hidden rounded-xl border border-neutral-stroke bg-[#f7f7fb]">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between p-4 text-left"
      >
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-dark-blue-300">I qrup Buraxılış</p>
        </div>
        <div className="flex items-center gap-8 text-center font-semibold">
          <div>
            <p className="text-brand-primary">{attempts}</p>
            <p className="text-xs text-dark-blue-300">Cəhd</p>
          </div>
          <div>
            <p className="text-green-700">↗ {growth}</p>
            <p className="text-xs text-dark-blue-300">İnkişaf</p>
          </div>
          {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>
      </button>

      {isOpen && (
        <table className="w-full min-w-[780px] bg-white text-center text-base font-semibold">
          <tbody>
            {["25 May 2026", "25 Aprel 2026", "25 Mart 2026"].map((date, index) => (
              <tr key={date} className="border-t border-neutral-stroke">
                <td className="px-4 py-3 text-left">
                  <span className="mr-4 inline-flex size-7 items-center justify-center rounded-full bg-primary-0">
                    {3 - index}
                  </span>
                  {date}
                </td>
                <Metric value="40" label="Sual" />
                <Metric value="37" label="Doğru" green />
                <Metric value="3" label="Yanlış" red />
                <Metric value="93%" label="Nəticə" />
                <Metric value={index === 2 ? "----" : "↗ + 1 %"} label="İnkişaf" green={index !== 2} />
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  )
}

function Metric({
  value,
  label,
  green = false,
  red = false,
}: {
  value: string
  label: string
  green?: boolean
  red?: boolean
}) {
  return (
    <td className={`px-4 py-3 ${green ? "text-green-700" : red ? "text-red-500" : ""}`}>
      {value}
      <p className="text-xs font-medium text-dark-blue-300">{label}</p>
    </td>
  )
}
