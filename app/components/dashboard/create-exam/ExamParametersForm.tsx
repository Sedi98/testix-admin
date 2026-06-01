import { useState } from "react"
import { ChevronRight, Coins, PencilLine } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Switch } from "~/components/ui/switch"
import CoinIcon from "~/assets/images/coin.png"

const selectFields = [
  { label: "Kateqoriya", placeholder: "Kateqoriya seçin...", options: ["Buraxılış imtahanı", "Blok imtahanı"] },
  { label: "Bölmələr", placeholder: "Bölmə seçin...", options: ["9-cu sinif", "10-cu sinif", "11-ci sinif"] },
  { label: "Fənn", placeholder: "Fənn seçin...", options: ["Riyaziyyat", "Azərbaycan dili", "İngilis dili"] },
  { label: "Mövzu", placeholder: "Mövzu seçin...", options: ["Natural ədədlər", "Kəsrlər", "Tənliklər"] },
]

const coinAmounts = [50, 100, 150, 200]

export function ExamParametersForm({ onContinue }: { onContinue: () => void }) {
  const [difficulty, setDifficulty] = useState("asan")
  const [priceEnabled, setPriceEnabled] = useState(true)
  const [selectedCoin, setSelectedCoin] = useState(150)
  const [customCoin, setCustomCoin] = useState(false)

  return (
    <div className="rounded-[20px] bg-white p-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">İmtahan Parametrləri</h2>
          <p className="text-base font-medium text-brand-secondary">Bütün sahələri doldurun</p>
        </div>
        <div className="flex gap-8 text-xl font-medium">
          {["Az", "Ru", "En"].map((lang) => (
            <button
              key={lang}
              type="button"
              className={lang === "Az" ? "border-b border-brand-primary" : ""}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {selectFields.map((field) => (
          <ExamSelect key={field.label} {...field} />
        ))}

        <div className="grid grid-cols-2 gap-5">
          <ExamSelect label="Sual sayı" placeholder="30 sual" options={["20 sual", "30 sual", "40 sual"]} />
          <ExamSelect label="İmtahan müddəti" placeholder="60 dəqiqə" options={["45 dəqiqə", "60 dəqiqə", "90 dəqiqə"]} />
        </div>

        <div className="space-y-4">
          {["asan", "orta", "cetin"].map((level) => (
            <DifficultyRow
              key={level}
              active={difficulty}
              level={level}
              onSelect={setDifficulty}
            />
          ))}
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Çətinlik səviyyəsi</p>
          <div className="rounded-xl border border-neutral-stroke bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-medium">
                <Coins size={16} />
                Pulsuz
              </span>
              <Switch checked={priceEnabled} onCheckedChange={setPriceEnabled} />
            </div>

            {priceEnabled && (
              <div className="mt-5 space-y-4">
                <p className="text-sm font-medium text-brand-secondary">Coin miqdarı seçin</p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-4">
                    {coinAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setSelectedCoin(amount)}
                        className={`inline-flex h-10 items-center gap-2 rounded-lg border px-4 text-base font-bold ${selectedCoin === amount
                          ? "border-brand-primary bg-brand-primary text-white"
                          : "border-neutral-stroke bg-white"
                          }`}
                      >
                        <img src={CoinIcon} alt="" className="h-6 w-6" />
                        {amount}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setCustomCoin((value) => !value)}
                    className="inline-flex h-11 items-center gap-2 rounded-lg border border-neutral-stroke px-5 font-semibold text-brand-primary"
                  >
                    <PencilLine size={20} />
                    Redaktə et
                  </button>
                </div>
                {customCoin && (
                  <input
                    className="h-14 w-full rounded-xl border-0 bg-neutral-50 px-4 text-base text-brand-secondary outline-none"
                    placeholder="Coin miqdarını daxil edin"
                  />
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between pt-2">
          <Button
            type="button"
            onClick={() => {
              setDifficulty("asan")
              setSelectedCoin(50)
              setCustomCoin(false)
            }}
            className="h-12 w-40 gap-2 rounded-xl border border-neutral-stroke bg-white text-brand-primary"
          >
            <PencilLine size={20} />
            Sıfırla
          </Button>
          <Button
            type="button"
            onClick={onContinue}
            className="h-12 w-40 gap-2 rounded-xl bg-brand-primary text-white"
          >
            Davam et
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

function ExamSelect({
  label,
  placeholder,
  options,
}: {
  label: string
  placeholder: string
  options: string[]
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      <select
        defaultValue=""
        className="h-14 w-full appearance-none rounded-xl border-0 bg-neutral-50 px-4 text-base text-brand-secondary outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}

function DifficultyRow({
  active,
  level,
  onSelect,
}: {
  active: string
  level: string
  onSelect: (level: string) => void
}) {
  const labels = [
    { key: "asan", label: "Asan", activeClass: "border-green-600 bg-green-50 text-green-700" },
    { key: "orta", label: "Orta", activeClass: "border-orange-600 bg-orange-50 text-orange-600" },
    { key: "cetin", label: "Çətin", activeClass: "border-red-500 bg-red-0 text-red-500" },
  ]

  return (
    <div className="space-y-2">
      <p className="text-sm font-medium">Çətinlik səviyyəsi</p>
      <div className="grid grid-cols-3 gap-3">
        {labels.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(level)}
            className={`h-12 rounded-lg border text-sm font-medium ${active === level && item.key === level
              ? item.activeClass
              : "border-neutral-stroke bg-white text-brand-secondary"
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
