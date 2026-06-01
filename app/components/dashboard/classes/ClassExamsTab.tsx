import { GraduationCap } from "lucide-react"
import { classSharedExams, type ClassItem } from "~/lib/classes"

export function ClassExamsTab({ classItem }: { classItem: ClassItem }) {
  return (
    <section className="rounded-xl border border-neutral-stroke bg-white p-5">
      <div className="overflow-hidden rounded-xl border border-neutral-stroke bg-[#f7f7fb]">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <span className="block size-14 rounded-full border-2 border-brand-primary bg-gradient-to-br from-green-300 via-yellow-200 to-pink-300" />
            <h2 className="text-xl font-semibold">{classItem.name}</h2>
          </div>
          <div className="text-center text-xl font-semibold text-brand-primary">
            12
            <p className="text-sm font-medium text-dark-blue-300">İmtahan</p>
          </div>
        </div>

        <table className="w-full min-w-[780px] text-left text-base font-semibold">
          <thead className="border-t border-neutral-stroke">
            <tr>
              <th className="px-4 py-4">İmtahan adı</th>
              <th className="px-4 py-4">Kateqoriya</th>
              <th className="px-4 py-4">Paylaşılma tarixi</th>
              <th className="px-4 py-4 text-right">İştirakçı</th>
            </tr>
          </thead>
          <tbody>
            {classSharedExams.map((exam, index) => (
              <tr
                key={exam.id}
                className={`border-t border-neutral-stroke ${
                  index % 2 === 1 ? "bg-neutral-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-4">{exam.name}</td>
                <td className="px-4 py-4">{exam.category}</td>
                <td className="px-4 py-4">{exam.sharedAt}</td>
                <td className="px-4 py-4 text-right">
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap size={18} />
                    {exam.participants}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
