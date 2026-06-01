import {
  Package,
  SearchSlash,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Student = {
  id: number;
  registeredAt: string;
  name: string;
  phone: string;
  initials: string;
  package: "Pro" | "Premium" | "Pulsuz";
  coins: number;
  links: string[];
  status: "Aktiv" | "Deaktiv";
};

export type StudentTab = "info" | "package" | "coins" | "links" | "results";

export type StudentStatCard = {
  title: string;
  value: string;
  meta: string;
  icon: LucideIcon;
  positive: boolean;
};

export const students: Student[] = [
  {
    id: 1,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pro",
    coins: 5300,
    links: [],
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
    links: ["Müəllim", "Valideyn"],
    status: "Deaktiv",
  },
  {
    id: 3,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pulsuz",
    coins: 0,
    links: ["Müəllim", "Valideyn"],
    status: "Deaktiv",
  },
  {
    id: 4,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pulsuz",
    coins: 0,
    links: ["Müəllim"],
    status: "Aktiv",
  },
  {
    id: 5,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pulsuz",
    coins: 0,
    links: ["Valideyn"],
    status: "Aktiv",
  },
  {
    id: 6,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pro",
    coins: 500,
    links: [],
    status: "Aktiv",
  },
  {
    id: 7,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Premium",
    coins: 2500,
    links: [],
    status: "Aktiv",
  },
  {
    id: 8,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pro",
    coins: 6500,
    links: [],
    status: "Aktiv",
  },
  {
    id: 9,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pulsuz",
    coins: 0,
    links: ["Valideyn"],
    status: "Aktiv",
  },
  {
    id: 10,
    registeredAt: "24/07/2026",
    name: "Sevinc Aliyeva Arif",
    phone: "050-000-00-00",
    initials: "S.A",
    package: "Pulsuz",
    coins: 0,
    links: ["Müəllim"],
    status: "Aktiv",
  },
];

export const statCards: StudentStatCard[] = [
  {
    title: "Ümumi istifadəçi",
    value: "5,700",
    meta: "+ 20 / son 1 ay",
    icon: Users,
    positive: true,
  },
  {
    title: "Aktiv istifadəçi",
    value: "5,450",
    meta: "+ 100 / son 1 ay",
    icon: UserRoundCheck,
    positive: true,
  },
  {
    title: "Premium/pro istifadəçi",
    value: "500",
    meta: "- 2 / son 1 ay",
    icon: Package,
    positive: false,
  },
  {
    title: "Bağlantısız istifadəçi",
    value: "3,000",
    meta: "+ 130 / son 1 ay",
    icon: SearchSlash,
    positive: true,
  },
];

export const studentTabs: { key: StudentTab; label: string }[] = [
  { key: "info", label: "Məlumat" },
  { key: "package", label: "Paket" },
  { key: "coins", label: "Koin" },
  { key: "links", label: "Bağlantılar" },
  { key: "results", label: "Nəticə" },
];
