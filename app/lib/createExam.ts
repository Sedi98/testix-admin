export type ExamStep = "parameters" | "questions"

export type ExamSummaryItem = {
  label: string
  value: string
}

export type QuestionType = "Çoxdan seçməli" | "Bir neçə cavablı" | "Açıq sual"

export const examSummaryItems: ExamSummaryItem[] = [
  { label: "Kateqoriya", value: "Buraxılış imtahanı" },
  { label: "Sual sayı / müddət", value: "30 sual / 60 dəq" },
  { label: "Çətinlik", value: "Çətin" },
  { label: "Bölmə", value: "9-cu sinif" },
  { label: "Fənn", value: "Riyaziyyat" },
  { label: "Mövzu", value: "Natural ədədlər" },
  { label: "Qiymət", value: "50 koin" },
]

export const questionTypes: QuestionType[] = [
  "Çoxdan seçməli",
  "Bir neçə cavablı",
  "Açıq sual",
]
