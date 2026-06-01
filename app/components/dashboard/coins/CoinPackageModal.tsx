import { X } from "lucide-react"
import type { CoinPackage } from "~/lib/coins"

type CoinPackageModalProps = {
  mode: "add" | "edit" | "delete"
  coinPackage?: CoinPackage
  onClose: () => void
}

export function CoinPackageModal({ mode, coinPackage, onClose }: CoinPackageModalProps) {
  const isDelete = mode === "delete"
  const title =
    mode === "add"
      ? "Koin paketi əlavə et"
      : mode === "edit"
        ? "Koin paketi redaktə et"
        : "Koin paketi sil"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-[540px] overflow-hidden rounded-xl bg-white">
        <div className="flex items-center justify-between bg-brand-primary px-6 py-5">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white transition hover:opacity-80"
            aria-label="Bağla"
          >
            <X size={26} />
          </button>
        </div>

        {isDelete ? (
          <div className="px-7 py-10 text-center">
            <p className="text-xl font-semibold">
              {coinPackage?.amount ?? "500"} Koin paketi silmək istədiyinizə əminsiniz?
            </p>
            <p className="mt-8 text-sm">Bu əməliyyat geri qaytarıla bilməz.</p>
            <ModalActions onClose={onClose} confirmLabel="Sil" />
          </div>
        ) : (
          <div className="space-y-5 px-6 py-7">
            <EditField
              label="Koin miqdarı"
              placeholder="Məs : 1000"
              defaultValue={mode === "edit" ? coinPackage?.amount : undefined}
            />
            <EditField
              label="Qiymət ( AZN )"
              placeholder="Məs : 9.99"
              defaultValue={mode === "edit" ? coinPackage?.price.replace(" Azn", "") : undefined}
            />
            <ModalActions onClose={onClose} confirmLabel="Yadda saxla" />
          </div>
        )}
      </div>
    </div>
  )
}

function EditField({
  label,
  placeholder,
  defaultValue,
}: {
  label: string
  placeholder: string
  defaultValue?: string
}) {
  return (
    <label className="block text-sm font-semibold text-brand-dark">
      {label}
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="mt-2 h-14 w-full rounded-xl border-0 bg-neutral-50 px-4 text-base font-normal text-brand-secondary outline-none focus:ring-2 focus:ring-brand-primary/30"
      />
    </label>
  )
}

function ModalActions({
  onClose,
  confirmLabel,
}: {
  onClose: () => void
  confirmLabel: string
}) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-10">
      <button
        type="button"
        onClick={onClose}
        className="h-12 rounded-xl border border-neutral-stroke bg-white text-base font-semibold text-brand-primary"
      >
        Ləğv et
      </button>
      <button
        type="button"
        onClick={onClose}
        className="h-12 rounded-xl bg-brand-primary text-base font-semibold text-white"
      >
        {confirmLabel}
      </button>
    </div>
  )
}
