import { ClipboardList, GraduationCap, School, UserCheck, type LucideIcon } from "lucide-react"

export type ClassItem = {
  id: number
  createdAt: string
  teacher: string
  name: string
  exams: number
  students: number
  status: "Aktiv" | "Deaktiv"
}

export type ClassTab = "info" | "students" | "exams"

export type ClassStatCard = {
  title: string
  value: string
  meta: string
  icon: LucideIcon
  positive: boolean
}

export const classStats: ClassStatCard[] = [
  {
    title: "Ümumi sinif",
    value: "2,100",
    meta: "+ 20 / son 1 ay",
    icon: School,
    positive: true,
  },
  {
    title: "Aktiv sinif",
    value: "1,450",
    meta: "+ 100 / son 1 ay",
    icon: UserCheck,
    positive: true,
  },
  {
    title: "Ümumi şagird",
    value: "100",
    meta: "- 2 / son 1 ay",
    icon: GraduationCap,
    positive: false,
  },
  {
    title: "Paylaşılan imtahan",
    value: "340",
    meta: "+ 130 / son 1 ay",
    icon: ClipboardList,
    positive: true,
  },
]

export const classes: ClassItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  createdAt: "24/07/2026",
  teacher: "Sevinc Əliyeva Arif",
  name: "9A - Sınaq 1",
  exams: 12,
  students: 120,
  status: "Aktiv",
}))

export const classTabs: { key: ClassTab; label: string }[] = [
  { key: "info", label: "Məlumat" },
  { key: "students", label: "Şagirdlər" },
  { key: "exams", label: "Paylaşılan imtahanlar" },
]

export const classStudents = [
  ["Sevinc Əliyeva Arif", "050-000-00-00", "24/07/2026", "98%"],
  ["Tural Məmmədov", "051-123-45-67", "12/11/2025", "87%"],
  ["Aysel Hüseynova", "055-987-65-43", "30/03/2027", "92%"],
  ["Kamran İsmayılov", "070-456-78-90", "15/09/2024", "75%"],
  ["Leyla Quliyeva", "077-234-56-78", "21/01/2026", "88%"],
  ["Elvin Rzayev", "099-321-45-67", "08/06/2025", "80%"],
  ["Nigar Abbasova", "051-654-32-10", "03/12/2027", "95%"],
  ["Rəşad Məmmədli", "055-789-01-23", "19/04/2026", "90%"],
  ["Fidan Əliyeva", "070-123-45-67", "27/08/2025", "85%"],
  ["Elçin Həsənov", "077-456-78-90", "05/02/2024", "78%"],
  ["Aytan Məmmədova", "099-876-54-32", "14/07/2026", "93%"],
  ["Aytan Məmmədova", "099-876-54-32", "14/07/2026", "93%"],
].map(([name, phone, joinedAt, result], index) => ({
  id: index + 1,
  name,
  phone,
  joinedAt,
  result,
}))

export const classSharedExams = [
  ["Diferensial hesab", "Riyaziyyat", "24/07/2026", 120],
  ["İnteqral hesab", "Riyaziyyat", "15/09/2026", 90],
  ["Müxtəlifliklər nəzəriyyəsi", "Riyaziyyat", "03/11/2026", 100],
  ["Həndəsə və topologiya", "Riyaziyyat", "18/01/2027", 110],
  ["Statistika və ehtimal", "Riyaziyyat", "09/03/2027", 95],
  ["Kombinatorika", "Riyaziyyat", "26/05/2027", 85],
].map(([name, category, sharedAt, participants], index) => ({
  id: index + 1,
  name,
  category,
  sharedAt,
  participants,
}))
