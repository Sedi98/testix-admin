import { Plus, Search } from "lucide-react"
import { faqStats } from "~/lib/faq"
import { StudentFilterSelect } from "~/components/dashboard/students/StudentFilterSelect"

export function FAQView() {
  return (
    <section className="space-y-7 text-brand-dark">
      <div className="flex items-center justify-between gap-6">
        <h1 className="text-2xl font-bold">FAQ</h1>
        <button
          type="button"
          className="inline-flex h-12 items-center gap-3 rounded-xl bg-brand-primary px-8 text-base font-semibold text-white"
        >
          Sual əlavə et
          <Plus size={20} />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <div className="relative min-w-[420px] flex-1">
          <Search
            size={22}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
          />
          <input
            placeholder="Sual üzrə axtarış..."
            className="h-12 w-full rounded-xl border border-neutral-stroke bg-white px-14 text-base outline-none"
          />
        </div>
        <StudentFilterSelect
          label="Status"
          value="Bütün statuslar"
          options={["Bütün statuslar", "Aktiv", "Deaktiv"]}
          onChange={() => undefined}
        />
        <StudentFilterSelect
          label="Kateqoriya"
          value="Bütün kateqoriyalar"
          options={["Bütün kateqoriyalar", "Müəllim", "Şagird", "Valideyn"]}
          onChange={() => undefined}
        />
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {faqStats.map((stat) => (
          <article
            key={stat.label}
            className="flex h-20 flex-col items-center justify-center rounded-lg border border-neutral-stroke bg-white"
          >
            <p className={`text-base font-bold ${stat.className}`}>{stat.value}</p>
            <p className="mt-2 text-base text-neutral-500">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
