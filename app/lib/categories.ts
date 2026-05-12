export type CategoryCardProps = {
  id: string;
  status: string;
  title: string;
  description: string;
  subjects: number;
  topics: number;
  exams: number;
  active: boolean;
};

export const categoriesData: CategoryCardProps[] = [
  {
    id: "1",
    status: "Aktiv",
    title: "Abituriyent",
    description: "Ali məktəb qəbul imtahanlarına hazırlıq",
    subjects: 9,
    topics: 48,
    exams: 100,
    active: true,
  },
  {
    id: "2",
    status: "Aktiv",
    title: "Buraxılış imtahanı",
    description: "Orta məktəb buraxılış imtahanı",
    subjects: 7,
    topics: 30,
    exams: 65,
    active: true,
  },
  {
    id: "3",
    status: "Aktiv",
    title: "Magistratura",
    description: "Magistratura imtahanlarına hazırlıq",
    subjects: 7,
    topics: 30,
    exams: 65,
    active: true,
  },
  {
    id: "4",
    status: "Deaktiv",
    title: "Sürücülük",
    description: "Sürücülük imtahanlarına hazırlıq",
    subjects: 12,
    topics: 60,
    exams: 120,
    active: false,
  },
  {
    id: "5",
    status: "Aktiv",
    title: "MİQ",
    description: "İngilis dili hazırlığı",
    subjects: 4,
    topics: 18,
    exams: 35,
    active: true,
  },
  {
    id: "6",
    status: "Deaktiv",
    title: "YÖS",
    description: "Proqramlaşdırma və texnologiya",
    subjects: 6,
    topics: 27,
    exams: 50,
    active: false,
  },
  {
    id: "7",
    status: "Aktiv",
    title: "Məntiq",
    description: "Ali məktəb qəbul imtahanlarına hazırlıq",
    subjects: 7,
    topics: 30,
    exams: 65,
    active: true,
  },
  {
    id: "8",
    status: "Aktiv",
    title: "Xarici dillər",
    description: "Ali məktəb qəbul imtahanlarına hazırlıq",
    subjects: 7,
    topics: 30,
    exams: 65,
    active: true,
  },
  {
    id: "9",
    status: "Aktiv",
    title: "Abituriyent",
    description: "Ali məktəb qəbul imtahanlarına hazırlıq",
    subjects: 7,
    topics: 30,
    exams: 65,
    active: true,
  },
];
