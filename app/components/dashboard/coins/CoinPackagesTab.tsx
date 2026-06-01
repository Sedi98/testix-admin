import { Edit3, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { coinPackages, type CoinPackage } from "~/lib/coins"
import { CoinPackageModal } from "./CoinPackageModal"
import CoinIcon from "~/assets/images/coin.png"

type ModalState =
  | { mode: "add"; coinPackage?: undefined }
  | { mode: "edit" | "delete"; coinPackage: CoinPackage }
  | null

export function CoinPackagesTab() {
  const [modal, setModal] = useState<ModalState>(null)

  return (
    <>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setModal({ mode: "add" })}
          className="inline-flex h-12 items-center gap-3 rounded-xl bg-brand-primary px-5 text-base font-semibold text-white"
        >
          Koin paketi əlavə et
          <Plus size={22} />
        </button>
      </div>

      <section className="rounded-xl border border-neutral-stroke bg-white p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {coinPackages.map((item) => (
            <CoinPackageCard key={item.id} item={item} onOpenModal={setModal} />
          ))}
        </div>
      </section>

      {modal && (
        <CoinPackageModal
          mode={modal.mode}
          coinPackage={modal.coinPackage}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

function CoinPackageCard({
  item,
  onOpenModal,
}: {
  item: CoinPackage
  onOpenModal: (modal: ModalState) => void
}) {
  return (
    <article className="rounded-xl border border-neutral-stroke bg-white p-5">
      <div className="flex items-center gap-5">
        {/* <span className="text-3xl">🪙</span> */}
        <img src={CoinIcon} alt="" className="h-10 w-10" />
        <h3 className="text-xl font-semibold">
          {item.amount} <span className="font-normal">Koin</span>
        </h3>
      </div>

      <p className="mt-7 text-lg font-semibold text-brand-secondary">{item.price}</p>
      <p className="mt-4 text-sm text-brand-secondary">{item.rate}</p>
      <div className="mt-6 h-1.5 rounded-full bg-dark-blue-50">
        <div
          className="h-full rounded-full bg-orange-600"
          style={{ width: `${item.progress}%` }}
        />
      </div>
      <p className="mt-3 text-sm font-semibold">Satış : {item.sold} ədəd</p>

      <div className="mt-7 grid grid-cols-2 gap-8">
        <button
          type="button"
          onClick={() => onOpenModal({ mode: "edit", coinPackage: item })}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-neutral-stroke text-sm font-semibold text-brand-primary"
        >
          <Edit3 size={18} />
          Redaktə et
        </button>
        <button
          type="button"
          onClick={() => onOpenModal({ mode: "delete", coinPackage: item })}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-neutral-stroke text-sm font-semibold text-brand-primary"
        >
          <Trash2 size={18} />
          Sil
        </button>
      </div>
    </article>
  )
}
