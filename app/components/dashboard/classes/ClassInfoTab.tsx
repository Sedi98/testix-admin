import type { ClassItem } from "~/lib/classes"
import { ReadonlyField } from "~/components/dashboard/students/StudentFields"

export function ClassInfoTab({ classItem }: { classItem: ClassItem }) {
  return (
    <section className="rounded-xl border border-neutral-stroke bg-white p-5">
      <div className="flex items-center gap-4">
        <span className="block size-14 rounded-full border-2 border-brand-primary bg-gradient-to-br from-green-300 via-yellow-200 to-pink-300" />
        <h2 className="text-xl font-semibold">{classItem.name}</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-24 md:grid-cols-3">
        <InfoStat value="28" label="Şagird" />
        <InfoStat value="12" label="İmtahan" purple />
        <InfoStat value="74%" label="Ortalama nəticə" green />
      </div>

      <h3 className="mt-8 text-xl font-semibold">Ümumi məlumatlar</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ReadonlyField label="Sinif adı" value={classItem.name} />
        <ReadonlyField label="Daxilolma kodu" value="RTA-2024" />
        <ReadonlyField label="Yaradılma tarixi" value="12/01/2026" />
        <ReadonlyField label="Status" value="Aktiv" valueClassName="text-green-700" />
      </div>

      <h3 className="mt-8 text-xl font-semibold">Müəllim məlumatları</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ReadonlyField label="Ad Soyad" value={classItem.teacher} />
        <ReadonlyField label="Telefon nömrəsi" value="050-000-00-00" />
      </div>
    </section>
  )
}

function InfoStat({
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
    <div className="rounded-lg border border-neutral-stroke bg-neutral-50 p-8 text-center">
      <p className={`text-xl font-semibold ${purple ? "text-brand-primary" : green ? "text-green-700" : ""}`}>
        {value}
      </p>
      <p className="mt-3 text-base">{label}</p>
    </div>
  )
}
