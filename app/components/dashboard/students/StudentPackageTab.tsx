import { Coins, Package } from "lucide-react"
import { StatusBadge } from "./StudentBadges"
import { DetailRow } from "./StudentFields"

export function StudentPackageTab() {
  return (
    <div className="space-y-9">
      <section className="rounded-xl bg-white p-5">
        <h2 className="text-xl font-semibold">Cari paket</h2>
        <div className="mt-7 flex items-center justify-between rounded-xl border-2 border-brand-primary bg-primary-0 p-5">
          <div className="flex items-center gap-5">
            <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary text-white">
              <Package size={24} />
            </span>
            <div>
              <p className="text-xl font-semibold">Pro Paket</p>
              <p className="text-sm font-medium">
                Başlama: 01 Mart 2026 · Bitmə: 01 May 2026
              </p>
            </div>
          </div>
          <StatusBadge value="Aktiv" />
        </div>

        <div className="mt-8 divide-y divide-neutral-stroke text-xl">
          <DetailRow label="Paket növü" value="Pro" />
          <DetailRow label="Başlama tarixi" value="01 Mart 2026" />
          <DetailRow label="Bitmə tarixi" value="01 Aprel 2026" accent="orange" />
          <DetailRow label="Ödəniş üsulu" value="Koin" icon={<Coins size={18} />} />
          <DetailRow label="Növbəti ödəniş" value="Avtomatik yenilənmir" />
        </div>
      </section>

      <section className="rounded-xl bg-white p-5">
        <h2 className="text-xl font-semibold">Paket tarixçəsi</h2>
        <div className="mt-7 divide-y divide-neutral-stroke">
          <HistoryPackage title="Pro Paket" status="• Aktiv" />
          <HistoryPackage title="Pulsuz Paket" status="-------" muted />
        </div>
      </section>
    </div>
  )
}

function HistoryPackage({
  title,
  status,
  muted = false,
}: {
  title: string
  status: string
  muted?: boolean
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm font-medium">Başlama: 01 Mart 2026 · Bitmə: 01 May 2026</p>
      </div>
      <span
        className={
          muted
            ? "text-neutral-500"
            : "rounded-full bg-green-50 px-5 py-1 text-green-700"
        }
      >
        {status}
      </span>
    </div>
  )
}
