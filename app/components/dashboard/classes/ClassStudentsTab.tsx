import { classStudents, type ClassItem } from "~/lib/classes"

export function ClassStudentsTab({ classItem }: { classItem: ClassItem }) {
  return (
    <section className="rounded-xl border border-neutral-stroke bg-white p-5">
      <div className="overflow-hidden rounded-xl border border-neutral-stroke bg-[#f7f7fb]">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <span className="block size-14 rounded-full border-2 border-brand-primary " />
            <h2 className="text-xl font-semibold">{classItem.name}</h2>
          </div>
          <div className="text-center text-xl font-semibold text-brand-primary">
            15/15
            <p className="text-sm font-medium text-dark-blue-300">Şagird</p>
          </div>
        </div>

        <table className="w-full min-w-[780px] text-left text-base font-semibold">
          <thead className="border-t border-neutral-stroke">
            <tr>
              <th className="px-4 py-4">Şagird</th>
              <th className="px-4 py-4">Telefon</th>
              <th className="px-4 py-4">Qoşulma tarixi</th>
              <th className="px-4 py-4 text-right">Nəticə</th>
            </tr>
          </thead>
          <tbody>
            {classStudents.map((student, index) => (
              <tr
                key={student.id}
                className={`border-t border-neutral-stroke ${index % 2 === 1 ? "bg-neutral-50" : "bg-white"
                  }`}
              >
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-3">
                    <span className="size-9 rounded-full " />
                    {student.name}
                  </span>
                </td>
                <td className="px-4 py-3">{student.phone}</td>
                <td className="px-4 py-3">{student.joinedAt}</td>
                <td className="px-4 py-3 text-right">{student.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
