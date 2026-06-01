export type TopicCardProps = {
  id: string;
  status: string;
  title: string;
  description: string;
  questions: number;
  active: boolean;
  subjectId: string;
};

export const topicsData: TopicCardProps[] = [
  {
    id: "1",
    status: "Aktiv",
    title: "Algebra",
    description: "Algebra mövzuları",
    questions: 120,
    active: true,
    subjectId: "1",
  },
  {
    id: "2",
    status: "Aktiv",
    title: "Həndəsə",
    description: "Həndəsə mövzuları",
    questions: 85,
    active: true,
    subjectId: "1",
  },
  {
    id: "3",
    status: "Deaktiv",
    title: "Triqonometriya",
    description: "Trigonometriya mövzuları",
    questions: 65,
    active: false,
    subjectId: "1",
  },
  {
    id: "4",
    status: "Aktiv",
    title: "Qrammatika",
    description: "Azərbaycan dili qrammatika mövzuları",
    questions: 95,
    active: true,
    subjectId: "2",
  },
  {
    id: "5",
    status: "Aktiv",
    title: "Ədəbiyyatşünaslıq",
    description: "Ədəbiyyatşünaslıq mövzuları",
    questions: 72,
    active: true,
    subjectId: "2",
  },
  {
    id: "6",
    status: "Aktiv",
    title: "Yazı qaydaları",
    description: "Yazı qaydaları mövzuları",
    questions: 58,
    active: true,
    subjectId: "2",
  },
  {
    id: "7",
    status: "Aktiv",
    title: "Qədim tarix",
    description: "Qədim dövr tarixi mövzuları",
    questions: 88,
    active: true,
    subjectId: "3",
  },
  {
    id: "8",
    status: "Aktiv",
    title: "Orta əsrlər",
    description: "Orta əsrlər tarixi mövzuları",
    questions: 76,
    active: true,
    subjectId: "3",
  },
  {
    id: "9",
    status: "Aktiv",
    title: "Müasir tarix",
    description: "Müasir dövr tarixi mövzuları",
    questions: 92,
    active: true,
    subjectId: "3",
  },
];
