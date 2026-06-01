export type BlogAudience = "teacher" | "parent"

export type BlogPost = {
  id: number
  title: string
  date: string
  description: string
  audience: BlogAudience
}

export const blogTabs: { key: BlogAudience; label: string }[] = [
  { key: "teacher", label: "Müəllim profili üçün" },
  { key: "parent", label: "Valideyn profili üçün" },
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sağlam yuxunun Faydaları",
    date: "1 Mart 2026",
    description: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    audience: "teacher",
  },
  {
    id: 2,
    title: "Sağlam yuxunun Faydaları",
    date: "1 Mart 2026",
    description: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    audience: "teacher",
  },
  {
    id: 3,
    title: "Sağlam yuxunun Faydaları",
    date: "1 Mart 2026",
    description: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    audience: "teacher",
  },
  {
    id: 4,
    title: "Sağlam yuxunun Faydaları",
    date: "1 Mart 2026",
    description: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    audience: "teacher",
  },
  {
    id: 5,
    title: "Sağlam yuxunun Faydaları",
    date: "1 Mart 2026",
    description: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    audience: "parent",
  },
]
