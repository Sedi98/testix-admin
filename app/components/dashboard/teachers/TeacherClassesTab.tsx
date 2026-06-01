import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const classRows = [
  ["1", "Sevinc Aliyeva Arif", "40", "26", "6", "8", "98%"],
  ["2", "Sevinc Aliyeva Arif", "40", "26", "6", "8", "98%"],
  ["3", "Lale Məmmədova Tural", "38", "28", "7", "5", "95%"],
  ["4", "Rəşad Quliyev Elvin", "42", "25", "8", "9", "97%"],
  ["5", "Nigar Hüseynova Kamran", "35", "30", "5", "10", "92%"],
  ["6", "Tunar Abbasov Vüsal", "37", "29", "6", "7", "94%"],
  ["7", "Aysel Rzayeva Rauf", "39", "27", "7", "8", "96%"],
  ["8", "Elvin Məmmədov Orxan", "36", "31", "4", "6", "93%"],
  ["9", "Kamran İsmayılov Farid", "41", "26", "9", "7", "97%"],
  ["10", "Leyla Məmmədova Nigar", "38", "24", "8", "6", "92%"],
  ["11", "Eldar Hüseynov Emil", "45", "30", "10", "5", "88%"],
  ["12", "Aysel Quliyeva Ravan", "50", "35", "9", "6", "95%"],
  ["13", "Murad Əliyev Orxan", "42", "28", "12", "8", "90%"],
  ["14", "Nigar Rzayeva Tunar", "37", "22", "7", "5", "85%"],
  ["15", "Rəşad Məmmədov Nihad", "44", "29", "11", "4", "89%"],
]

export function TeacherClassesTab() {
  return (
    <div className="space-y-6">
      <ClassResultCard open title="9A - Sınaq 1" />
      <ClassResultCard title="10B - Sınaq 2" />
      <ClassResultCard title="9A - Sınaq 1" />
    </div>
  )
}

function ClassResultCard({ title, open = false }: { title: string; open?: boolean }) {
  const [isOpen, setIsOpen] = useState(open)

  return (
    <section className="overflow-hidden rounded-xl border border-neutral-stroke bg-[#f7f7fb]">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-center gap-4">
          <ClassImage />
          <div>
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-xs font-medium text-dark-blue-300">
              İmtahan tarixi : 01 Mart 2026
            </p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-center font-semibold">
          <div>
            <p className="text-brand-primary">15/15</p>
            <p className="text-xs text-dark-blue-300">Şagird</p>
          </div>
          <div>
            <p>78%</p>
            <p className="text-xs text-dark-blue-300">Ortalama bal</p>
          </div>
          {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>
      </button>

      {isOpen && (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[840px] text-center text-base font-semibold">
            <thead className="border-t border-neutral-stroke">
              <tr>
                {["Yer", "Şagird", "Sual", "Doğru", "Yanlış", "Cavabsız", "Bal%"].map((head) => (
                  <th key={head} className="px-4 py-4 text-left first:text-center">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {classRows.map(([place, name, question, correct, wrong, empty, score], index) => (
                <tr
                  key={`${place}-${name}`}
                  className={`border-t border-neutral-stroke ${
                    index % 2 === 1 ? "bg-neutral-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex size-7 items-center justify-center rounded-full ${
                        place === "1"
                          ? "bg-yellow-300"
                          : place === "2"
                            ? "bg-neutral-300"
                            : place === "3"
                              ? "bg-orange-600 text-white"
                              : "bg-primary-0"
                      }`}
                    >
                      {place}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-left">
                    <span className="inline-flex items-center gap-3">
                      <span className="size-8 rounded-full bg-gradient-to-br from-[#f7c5dc] via-[#f7d365] to-[#8dd8ff]" />
                      {name}
                    </span>
                  </td>
                  <td>{question}</td>
                  <td className="text-green-700">
                    {correct}
                    <Progress color="green" />
                  </td>
                  <td className="text-red-500">
                    {wrong}
                    <Progress color="red" />
                  </td>
                  <td>{empty}</td>
                  <td>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

function ClassImage() {
  return (
    <span className="block size-12 rounded-full border-2 border-brand-primary bg-gradient-to-br from-green-300 via-yellow-200 to-pink-300" />
  )
}

function Progress({ color }: { color: "green" | "red" }) {
  return (
    <span className="mx-auto mt-1 block h-1.5 w-20 rounded-full bg-dark-blue-50">
      <span
        className={`block h-full w-1/2 rounded-full ${
          color === "green" ? "bg-green-700" : "bg-red-500"
        }`}
      />
    </span>
  )
}
