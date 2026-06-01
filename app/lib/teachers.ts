import {
  Building2,
  Package,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react"

export type Teacher = {
  id: number
  registeredAt: string
  name: string
  phone: string
  initials: string
  package: "Pro" | "Premium" | "Pulsuz"
  coins: number
  studentCount: number
  classCount: number
  examCount: number
  status: "Aktiv" | "Deaktiv"
}

export type TeacherTab = "info" | "package" | "coins" | "classes" | "exams"

export type TeacherStatCard = {
  title: string
  value: string
  meta: string
  icon: LucideIcon
  positive: boolean
}

export const teachers: Teacher[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  registeredAt: "24/07/2026",
  name: "Sevinc Aliyeva Arif",
  phone: "050-000-00-00",
  initials: "S.A",
  package: "Pro",
  coins: 5300,
  studentCount: 12,
  classCount: 3,
  examCount: 3,
  status: "Aktiv",
}))

export const teacherStats: TeacherStatCard[] = [
  {
    title: "Ümumi müəllimlər",
    value: "1,000",
    meta: "+ 20 / son 1 ay",
    icon: Users,
    positive: true,
  },
  {
    title: "Aktiv müəllimlər",
    value: "600",
    meta: "+ 100 / son 1 ay",
    icon: UserRoundCheck,
    positive: true,
  },
  {
    title: "Premium/pro istifadəçi",
    value: "300",
    meta: "- 2 / son 1 ay",
    icon: Package,
    positive: false,
  },
  {
    title: "Ümumi sinif sayı",
    value: "200",
    meta: "+ 130 / son 1 ay",
    icon: Building2,
    positive: true,
  },
]

export const teacherTabs: { key: TeacherTab; label: string }[] = [
  { key: "info", label: "Məlumat" },
  { key: "package", label: "Paket" },
  { key: "coins", label: "Koin" },
  { key: "classes", label: "Siniflər" },
  { key: "exams", label: "Paylaşılan imtahanlar" },
]
