import {
  Package,
  SearchSlash,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

export type Parent = {
  id: number
  registeredAt: string
  name: string
  phone: string
  initials: string
  package: "Pro" | "Premium" | "Pulsuz"
  coins: number
  children: string[]
  links: string[]
  status: "Aktiv" | "Deaktiv"
}

export type ParentTab = "info" | "package" | "coins" | "connections" | "results"

export type ParentStatCard = {
  title: string
  value: string
  meta: string
  icon: LucideIcon
  positive: boolean
}

export const parents: Parent[] = [
  {
    id: 1,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pro",
    coins: 5300,
    children: ["Leyla", "Arzu"],
    links: ["Müəllim", "Valideyn"],
    status: "Aktiv",
  },
  {
    id: 2,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Premium",
    coins: 6000,
    children: ["Leyla"],
    links: ["Valideyn"],
    status: "Deaktiv",
  },
  ...Array.from({ length: 8 }, (_, index) => ({
    id: index + 3,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: (index === 3 ? "Pro" : index === 4 ? "Premium" : "Pulsuz") as Parent["package"],
    coins: index === 3 ? 500 : index === 4 ? 2500 : index === 5 ? 6500 : 0,
    children: index % 3 === 0 ? ["Leyla", "Arzu"] : index % 3 === 1 ? [] : ["Leyla"],
    links: index % 3 === 1 ? [] : ["Valideyn"],
    status: (index < 2 ? "Deaktiv" : "Aktiv") as Parent["status"],
  })),
]

export const parentStats: ParentStatCard[] = [
  {
    title: "Ümumi istifadəçi",
    value: "2,100",
    meta: "+ 20 / son 1 ay",
    icon: Users,
    positive: true,
  },
  {
    title: "Aktiv istifadəçi",
    value: "1,450",
    meta: "+ 100 / son 1 ay",
    icon: UserRoundCheck,
    positive: true,
  },
  {
    title: "Premium/pro istifadəçi",
    value: "100",
    meta: "- 2 / son 1 ay",
    icon: Package,
    positive: false,
  },
  {
    title: "Bağlantısız istifadəçi",
    value: "340",
    meta: "+ 130 / son 1 ay",
    icon: SearchSlash,
    positive: true,
  },
]

export const parentTabs: { key: ParentTab; label: string }[] = [
  { key: "info", label: "Məlumat" },
  { key: "package", label: "Paket" },
  { key: "coins", label: "Koin" },
  { key: "connections", label: "Bağlantılar" },
  { key: "results", label: "Nəticə" },
]
