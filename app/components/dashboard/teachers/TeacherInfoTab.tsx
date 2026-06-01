import { Coins, Edit3 } from "lucide-react"
import { ReadonlyField } from "~/components/dashboard/students/StudentFields"
import type { Teacher } from "~/lib/teachers"

export function TeacherInfoTab({
  teacher,
  onEdit,
}: {
  teacher: Teacher
  onEdit: () => void
}) {
  return (
    <div className="rounded-xl border border-neutral-stroke bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-full border border-green-100 bg-green-50 text-2xl font-normal">
            A.S
          </div>
          <div>
            <h2 className="text-xl font-semibold">{teacher.name}</h2>
            <p className="text-sm font-medium text-dark-blue-300">
              Qeydiyyat : 01 Mart 2026 / Son giriş : Bu gün 14:30
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onEdit}
          className="inline-flex h-12 items-center gap-3 rounded-xl border border-neutral-stroke bg-white px-5 text-base font-semibold text-brand-primary transition hover:bg-primary-0"
        >
          <Edit3 size={20} />
          Redaktə et
        </button>
      </div>

      <h3 className="mt-8 text-xl font-semibold">Şəxsi məlumatlar</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ReadonlyField label="Ad Soyad" value={teacher.name} />
        <ReadonlyField label="Telefon nömrəsi" value={teacher.phone} />
        <ReadonlyField label="Paket" value="Pro" />
        <ReadonlyField label="Status" value="Aktiv" valueClassName="text-green-700" />
      </div>

      <h3 className="mt-9 text-xl font-semibold">Ümumi statistika</h3>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <ReadonlyField label="Yaradılmış sinif" value="3 sinif" />
        <ReadonlyField label="Şagird sayı" value="32" />
        <ReadonlyField
          label="Paylaşılan imtahanlar"
          value="12 imtahan"
          valueClassName="text-green-700"
        />
        <ReadonlyField
          label="Koin balansı"
          value="1,230 koin"
          icon={<Coins size={18} />}
          valueClassName="text-brand-primary"
        />
      </div>
    </div>
  )
}
