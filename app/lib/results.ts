import { ClipboardList, GraduationCap, ScrollText, Target, type LucideIcon } from "lucide-react"

export type ResultRow = {
  id: number
  date: string
  studentName: string
  category: string
  exam: string
  questions: number
  correct: number
  wrong: number
  score: string
  growth: string
}

export type ResultStatCard = {
  title: string
  value: string
  meta: string
  icon: LucideIcon
  positive: boolean
}

export const resultStats: ResultStatCard[] = [
  {
    title: "Ümumi imtahan",
    value: "38,800",
    meta: "+ 2,120 / son 1 ay",
    icon: ClipboardList,
    positive: true,
  },
  {
    title: "Ümumi ortalama bal",
    value: "74%",
    meta: "+ 2 / son 1 ay",
    icon: Target,
    positive: true,
  },
  {
    title: "Aktiv şagird",
    value: "3,140",
    meta: "- 23 / son 1 ay",
    icon: GraduationCap,
    positive: false,
  },
  {
    title: "Paylaşılan imtahan",
    value: "340",
    meta: "+ 130 / son 1 ay",
    icon: ScrollText,
    positive: true,
  },
]

export const resultRows: ResultRow[] = [
  ["24/07/2026", "Sevinc Aliyeva Arif", "Buraxılış", "Riyaziyyat", 40, 37, 3, "93%", "+ 1%"],
  ["26/07/2026", "Nigar Hüseynova Leyla", "Abituriyent", "Kimya", 39, 35, 4, "88%", "+ 3%"],
  ["28/07/2026", "Aysel Quliyeva Sevda", "MİQ", "Tarix", 38, 36, 2, "95%", "+ 2%"],
  ["27/07/2026", "Kamran Əliyev Orxan", "YÖS", "Biologiya", 41, 40, 1, "98%", "+ 1%"],
  ["30/07/2026", "Leyla Məmmədova Aytac", "Sürücülük", "B kateqoriyası", 43, 41, 2, "95%", "+ 1%"],
  ["29/07/2026", "Rəşad Cəfərov Farid", "Abituriyent", "Coğrafiya", 40, 39, 1, "97%", "+ 1%"],
  ["31/07/2026", "Ramin Hasanov İlkin", "Abituriyent", "Fizika", 44, 42, 2, "96%", "+ 2%"],
  ["25/07/2026", "Tural Məmmədov Elvin", "Abituriyent", "Fizika", 42, 38, 4, "90%", "+ 2%"],
  ["01/08/2026", "Sabina Rzayeva Nigar", "Abituriyent", "Riyaziyyat", 45, 43, 2, "96%", "+ 1%"],
  ["25/07/2026", "Tural Məmmədov Elvin", "Abituriyent", "Fizika", 42, 38, 4, "90%", "+ 2%"],
].map(([date, studentName, category, exam, questions, correct, wrong, score, growth], index) => ({
  id: index + 1,
  date: String(date),
  studentName: String(studentName),
  category: String(category),
  exam: String(exam),
  questions: Number(questions),
  correct: Number(correct),
  wrong: Number(wrong),
  score: String(score),
  growth: String(growth),
}))
