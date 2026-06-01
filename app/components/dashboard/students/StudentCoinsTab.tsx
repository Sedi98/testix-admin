import { Coins, Plus } from "lucide-react"
import { StudentFilterSelect } from "./StudentFilterSelect"

export function StudentCoinsTab() {
  return (
    <div className="rounded-xl bg-white p-5">
      <h2 className="text-xl font-semibold">Koin balansı</h2>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-6 rounded-xl border-2 border-brand-primary bg-primary-0 p-5">
        <div className="flex items-center gap-5">
          <span className="flex size-12 items-center justify-center rounded-xl bg-brand-primary text-white">
            <Coins size={24} />
          </span>
          <div>
            <p className="text-xl font-semibold">1,350 Koin</p>
            <p className="text-sm font-medium">Cari balans</p>
          </div>
        </div>
        <div className="flex gap-14 text-right text-xl font-semibold">
          <div>
            <p className="text-green-700">+10,000</p>
            <p className="text-sm font-medium text-brand-dark">Ümumi alınan</p>
          </div>
          <div>
            <p className="text-red-500">- 8,300</p>
            <p className="text-sm font-medium text-brand-dark">Ümumi xərclənən</p>
          </div>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-semibold">Koin əlavə et</h2>
      <div className="mt-5 rounded-xl border border-neutral-stroke bg-neutral-50 p-5">
        <p className="text-base font-semibold">Miqdar seç və ya koin daxil et</p>
        <div className="mt-8 flex flex-wrap items-center gap-12">
          {[500, 1000, 2000, 5000].map((amount) => (
            <button
              key={amount}
              type="button"
              className={`inline-flex h-8 items-center gap-2 rounded border px-4 text-base font-semibold ${
                amount === 1000
                  ? "border-brand-primary bg-primary-0 text-brand-dark"
                  : "border-neutral-stroke bg-white"
              }`}
            >
              <Coins size={16} />
              {amount.toLocaleString()}
            </button>
          ))}
          <input
            defaultValue="0"
            aria-label="Koin miqdarı"
            className="h-8 min-w-[260px] flex-1 rounded border border-neutral-stroke bg-dark-blue-50 px-4 text-center text-base font-semibold text-brand-primary outline-none"
          />
          <button
            type="button"
            className="inline-flex h-10 items-center gap-3 rounded-xl bg-brand-primary px-5 text-base font-semibold text-white"
          >
            <Plus size={20} />
            Koin əlavə et
          </button>
        </div>
        <p className="mt-8 text-xs font-medium">
          Əlavə edilən koin dərhal şagirdin balansına keçir. Bu əməliyyat
          tarixçədə qeyd olunur.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Koin tarixçəsi</h2>
        <StudentFilterSelect
          label="Koin"
          value="Hamısı"
          options={["Hamısı", "Alış", "Xərclənən", "Admin"]}
          onChange={() => undefined}
        />
      </div>
      <div className="mt-6 divide-y divide-neutral-stroke">
        <CoinHistory title="1,000 Koin alındı" tag="alış" amount="+ 1,000" />
        <CoinHistory
          title="Riyaziyyat imtahanı alındı"
          subtitle="I qrup- Buraxılış"
          tag="Xərcləmə"
          amount="- 8,300"
          negative
        />
        <CoinHistory
          title="Admin tərəfindən əlavə edildi"
          subtitle="Aynur Salmanzadə"
          tag="Admin"
          amount="+ 1,000"
          admin
        />
      </div>
    </div>
  )
}

function CoinHistory({
  title,
  subtitle = "9.99 azn ödənildi.",
  tag,
  amount,
  negative = false,
  admin = false,
}: {
  title: string
  subtitle?: string
  tag: string
  amount: string
  negative?: boolean
  admin?: boolean
}) {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <p className="text-xl font-semibold">
          {title}{" "}
          <span
            className={`ml-4 rounded-full px-4 py-1 text-sm ${
              admin
                ? "bg-primary-0 text-brand-primary"
                : negative
                  ? "bg-red-0 text-red-500"
                  : "bg-green-50 text-green-700"
            }`}
          >
            {tag}
          </span>
        </p>
        <p className="mt-2 text-base font-normal text-brand-secondary">{subtitle}</p>
        <p className="mt-2 text-sm font-medium text-brand-secondary">14 may 2026, 23:59</p>
      </div>
      <p
        className={`text-xl font-semibold ${
          negative ? "text-red-500" : admin ? "text-brand-primary" : "text-green-700"
        }`}
      >
        {amount}
      </p>
    </div>
  )
}
