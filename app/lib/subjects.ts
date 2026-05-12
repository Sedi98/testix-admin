export type SubjectCardProps = {
  id: string;
  status: string;
  title: string;
  description: string;
  topics: number;
  questions: number;
  exams: number;
  active: boolean;
  categoryId: string;
};

export const subjectsData: SubjectCardProps[] = [
  {
    id: "1",
    status: "Aktiv",
    title: "Riyaziyyat",
    description: "Riyaziyyat fənni üzrə bütün mövzular və suallar",
    topics: 45,
    questions: 320,
    exams: 1200,
    active: true,
    categoryId: "1",
  },
  {
    id: "2",
    status: "Aktiv",
    title: "Azərbaycan dili",
    description: "Azərbaycan dili fənni üzrə bütün mövzular və suallar",
    topics: 38,
    questions: 285,
    exams: 980,
    active: true,
    categoryId: "1",
  },
  {
    id: "3",
    status: "Aktiv",
    title: "Tarix",
    description: "Tarix fənni üzrə bütün mövzular və suallar",
    topics: 41,
    questions: 320,
    exams: 890,
    active: true,
    categoryId: "1",
  },
  {
    id: "4",
    status: "Aktiv",
    title: "Coğrafiya",
    description: "Coğrafiya fənni üzrə bütün mövzular və suallar",
    topics: 25,
    questions: 180,
    exams: 540,
    active: true,
    categoryId: "1",
  },
  {
    id: "5",
    status: "Aktiv",
    title: "Riyaziyyat",
    description: "Məktəb riyaziyyat fənni üzrə bütün mövzular və suallar",
    topics: 30,
    questions: 200,
    exams: 600,
    active: true,
    categoryId: "2",
  },
  {
    id: "6",
    status: "Aktiv",
    title: "Azərbaycan dili",
    description: "Məktəb azərbaycan dili fənni üzrə bütün mövzular və suallar",
    topics: 25,
    questions: 150,
    exams: 450,
    active: true,
    categoryId: "2",
  },
  {
    id: "7",
    status: "Aktiv",
    title: "Fizika",
    description: "Məktəb fizika fənni üzrə bütün mövzular və suallar",
    topics: 28,
    questions: 180,
    exams: 520,
    active: true,
    categoryId: "2",
  },
  {
    id: "8",
    status: "Aktiv",
    title: "Sürücülük",
    description: "Sürücülük imtahanları üçün fənnlər",
    topics: 35,
    questions: 250,
    exams: 800,
    active: true,
    categoryId: "3",
  },
  {
    id: "9",
    status: "Deaktiv",
    title: "Peşəkarlıq",
    description: "Peşəkarlıq fənləri üzrə mövzular və suallar",
    topics: 20,
    questions: 120,
    exams: 300,
    active: false,
    categoryId: "3",
  },
];
