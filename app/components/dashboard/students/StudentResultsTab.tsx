import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { StudentFilterSelect } from "./StudentFilterSelect"

export function StudentResultsTab() {
  const [openPhysics, setOpenPhysics] = useState(false)

  return (
    <div className="space-y-7">
      <StudentFilterSelect
        label="Fənlər"
        value="Bütün Fənlər"
        options={["Bütün Fənlər", "Riyaziyyat", "Kimya", "Fizika"]}
        onChange={() => undefined}
      />
      <ResultCard title="Riyaziyyat" attempts="3 cəhd" rows={2} />
      <ResultCard title="Kimya" attempts="3 cəhd" rows={3} />
      <section className="rounded-xl border border-neutral-stroke bg-[#f7f7fb] p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-2 text-base">
            <p>
              <span className="font-semibold">Kateqoriya :</span> Buraxılış
            </p>
            <p>
              <span className="font-semibold">İmtahan :</span> Fizika{" "}
              <span className="ml-3 text-red-500">↘ + 4.2 % inkişaf</span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpenPhysics((value) => !value)}
            className="inline-flex items-center gap-8 text-brand-primary"
          >
            6 cəhd {openPhysics ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
          </button>
        </div>
      </section>
    </div>
  )
}

function ResultCard({
  title,
  attempts,
  rows,
}: {
  title: string
  attempts: string
  rows: number
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-neutral-stroke bg-[#f7f7fb]">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="space-y-2 text-base">
            <p>
              <span className="font-semibold">Kateqoriya :</span> Buraxılış
            </p>
            <p>
              <span className="font-semibold">İmtahan :</span> {title}{" "}
              <span className="ml-3 text-green-700">↗ + 4.2 % inkişaf</span>
            </p>
          </div>
          <div className="flex items-center gap-8">
            <span className="text-brand-primary">{attempts}</span>
            <ChevronUp size={22} className="text-brand-secondary" />
          </div>
        </div>
      </div>
      <table className="w-full min-w-[780px] text-center text-base font-semibold">
        <thead className="border-t border-neutral-stroke bg-[#f7f7fb]">
          <tr>
            {["Cəhd", "Sual", "Doğru", "Yanlış", "Cavabsız", "Bal%"].map((head) => (
              <th key={head} className="px-4 py-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index} className="border-t border-neutral-stroke bg-white">
              <td className="px-4 py-3 text-left">
                <span className="mr-3 inline-flex size-7 items-center justify-center rounded-full bg-primary-0">
                  {rows - index}
                </span>
                20 Fevral 2026
              </td>
              <td>40</td>
              <td className="text-green-700">
                26
                <span className="mx-auto mt-1 block h-1.5 w-20 rounded-full bg-dark-blue-50">
                  <span className="block h-full w-1/2 rounded-full bg-green-700" />
                </span>
              </td>
              <td className="text-red-500">
                6
                <span className="mx-auto mt-1 block h-1.5 w-20 rounded-full bg-dark-blue-50">
                  <span className="block h-full w-1/2 rounded-full bg-red-500" />
                </span>
              </td>
              <td>8</td>
              <td>98%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
