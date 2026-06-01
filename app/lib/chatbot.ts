export type ChatStatus = "Aktiv" | "Davam edir" | "Bitdi"

export type ChatConversation = {
  id: number
  name: string
  preview: string
  time: string
  status: ChatStatus
  unread?: number
}

export type ChatMessage = {
  id: number
  author: "customer" | "admin"
  text: string
  time: string
  date?: string
  compact?: boolean
}

export const chatConversations: ChatConversation[] = [
  { id: 1, name: "Arzu Salmanzada", preview: "Lorem ipsum dolor sit amet consectetur. C...", time: "indi", status: "Bitdi" },
  { id: 2, name: "Arzu Salmanzada", preview: "Lorem ipsum dolor sit amet consectetur. C...", time: "indi", status: "Aktiv", unread: 2 },
  { id: 3, name: "Arzu Salmanzada", preview: "Lorem ipsum dolor sit amet consectetur. C...", time: "indi", status: "Davam edir" },
  { id: 4, name: "Arzu Salmanzada", preview: "Lorem ipsum dolor sit amet consectetur. C...", time: "indi", status: "Davam edir" },
  { id: 5, name: "Arzu Salmanzada", preview: "Lorem ipsum dolor sit amet consectetur. C...", time: "indi", status: "Aktiv" },
  { id: 6, name: "Arzu Salmanzada", preview: "Lorem ipsum dolor sit amet consectetur. C...", time: "indi", status: "Bitdi" },
]

export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    author: "customer",
    date: "1 Fevral, 2026",
    text: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    time: "11:55 PM",
  },
  {
    id: 2,
    author: "admin",
    date: "2 Fevral, 2026",
    text: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    time: "11:55 PM",
  },
  {
    id: 3,
    author: "customer",
    text: "Lorem ipsum dolor sit.",
    time: "11:55 PM",
    compact: true,
  },
  {
    id: 4,
    author: "customer",
    text: "Lorem ipsum dolor sit amet consectetur. Cras diam sit pulvinar euismod ut ac eu netus.",
    time: "11:55 PM",
  },
  {
    id: 5,
    author: "admin",
    text: "Lorem ipsum Cras diam sit pulvinar netus.",
    time: "11:55 PM",
    compact: true,
  },
]

export const quickReplies = [
  {
    title: "Salamlama",
    text: "Salam! Bizimlə əlaqə saxladığınız üçün təşəkkür edirik. Sizə necə kömək edə bilərik?",
  },
  {
    title: "Sifarişin statusu",
    text: "Sifarişinizin statusunu dərhal yoxlayacağam.",
  },
  {
    title: "Geri ödəniş prosesi",
    text: "Anlayıram ki, geri ödəniş etmək istəyirsiniz. Geri ödəniş prosesini izah edim.",
  },
  {
    title: "Təşəkkür",
    text: "Bizimlə əlaqə saxladığınız üçün təşəkkür edirik! Başqa necə kömək edə bilərik?",
  },
  {
    title: "Zəhmət olmasa gözləyin",
    text: "Bunu yoxlayarkən zəhmət olmasa bir az gözləyin.",
  },
]
