import { Edit3, Plus, Search, Trash2 } from "lucide-react"
import { useMemo, useState } from "react"
import SleepingImage from "~/assets/images/sleeping.jpg"
import { blogPosts, blogTabs, type BlogAudience, type BlogPost } from "~/lib/blog"
import { BlogModal } from "./BlogModal"
import { StudentFilterSelect } from "~/components/dashboard/students/StudentFilterSelect"

export function BlogView() {
  const [activeTab, setActiveTab] = useState<BlogAudience>("teacher")
  const [modal, setModal] = useState<{ mode: "add" | "edit"; post?: BlogPost } | null>(null)

  const posts = useMemo(
    () => blogPosts.filter((post) => post.audience === activeTab),
    [activeTab],
  )

  return (
    <>
      <section className="space-y-8 text-brand-dark">
        <h1 className="text-2xl font-bold">Blog / Xəbərlər</h1>

        <div className="flex flex-wrap items-center gap-7">
          <div className="relative min-w-[420px] flex-1">
            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
            />
            <input
              placeholder="Başlıq üzrə axtarış..."
              className="h-12 w-full rounded-xl border border-neutral-stroke bg-white px-14 text-base outline-none"
            />
          </div>
          <StudentFilterSelect
            label="Tarix"
            value="Tarix"
            options={["Tarix", "Bu gün", "Bu həftə", "Bu ay"]}
            onChange={() => undefined}
          />
        </div>

        <div>
          <div className="flex items-end gap-7">
            <div className="grid flex-1 grid-cols-2 border-b border-dark-blue-300">
              {blogTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`border-b px-4 py-3 text-xl font-semibold transition-colors ${
                    activeTab === tab.key
                      ? "border-brand-dark text-brand-dark"
                      : "border-transparent text-dark-blue-300 hover:text-brand-dark"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setModal({ mode: "add" })}
              className="inline-flex h-12 w-[180px] items-center justify-center gap-3 rounded-xl bg-brand-primary text-base font-semibold text-white"
            >
              Xəbər əlavə et
              <Plus size={20} />
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} onEdit={() => setModal({ mode: "edit", post })} />
            ))}
          </div>
        </div>
      </section>

      {modal && (
        <BlogModal
          mode={modal.mode}
          post={modal.post}
          onClose={() => setModal(null)}
        />
      )}
    </>
  )
}

function BlogCard({ post, onEdit }: { post: BlogPost; onEdit: () => void }) {
  return (
    <article className="rounded-xl border border-neutral-stroke bg-white p-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-bold">{post.title}</h2>
          <p className="mt-2 text-xs text-neutral-500">{post.date}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onEdit}
            className="flex size-7 items-center justify-center rounded-full bg-primary-0 text-brand-primary"
          >
            <Edit3 size={16} />
          </button>
          <button
            type="button"
            className="flex size-7 items-center justify-center rounded-full bg-primary-0 text-brand-primary"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[180px_1fr] gap-3">
        <SleepImage />
        <div className="rounded-xl bg-neutral-blue p-4 text-sm leading-5">
          {post.description}
        </div>
      </div>
    </article>
  )
}

function SleepImage() {
  return (
    <img
      src={SleepingImage}
      alt=""
      className="h-[150px] w-full rounded-xl object-cover"
    />
  )
}
