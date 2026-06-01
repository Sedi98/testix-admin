import { Edit3 } from "lucide-react"
import { ReadonlyField } from "./StudentFields"

export function StudentLinksTab({ onEdit }: { onEdit: () => void }) {
  return (
    <div className="space-y-6">
      <ConnectionCard role="Müəllim" name="Leyla Salmanzade" initials="L.S" onEdit={onEdit} />
      <ConnectionCard role="Valideyn" name="Arzu Salmanzade" initials="A.S" onEdit={onEdit} />
    </div>
  )
}

function ConnectionCard({
  role,
  name,
  initials,
  onEdit,
}: {
  role: string
  name: string
  initials: string
  onEdit: () => void
}) {
  return (
    <section className="rounded-xl border border-neutral-stroke bg-white p-5">
      <h2 className="text-xl font-semibold">
        {role} :{" "}
        <span className="ml-4 rounded-full bg-orange-50 px-4 py-1 text-sm text-orange-600">
          Bağlantıda
        </span>
      </h2>
      <div className="mt-4 border-t border-neutral-stroke pt-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-full border border-neutral-stroke bg-primary-0 text-2xl font-normal">
              {initials}
            </span>
            <div>
              <p className="text-xl font-semibold">{name}</p>
              <p className="text-sm font-medium text-dark-blue-300">
                Qeydiyyat : 01 Mart 2026 / Bağlandı : 20 Mart 2026
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="h-12 rounded-xl bg-brand-primary px-6 text-base font-semibold text-white"
            >
              Bağlantını kəs
            </button>
            <button
              type="button"
              onClick={onEdit}
              className="inline-flex h-12 items-center gap-3 rounded-xl border border-neutral-stroke bg-white px-5 text-base font-semibold text-brand-primary"
            >
              <Edit3 size={20} />
              Redaktə et
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <ReadonlyField label={`${role} Paketi`} value={role === "Müəllim" ? "Pro" : "Pulsuz"} />
          <ReadonlyField label="Status" value="Aktiv" valueClassName="text-green-700" />
          <ReadonlyField label="Paylaşılan imtahan" value="3 imtahan" />
          <ReadonlyField label="Telefon nömrəsi" value="050-000-00-00" />
        </div>
      </div>
    </section>
  )
}
