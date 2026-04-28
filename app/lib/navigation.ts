import {
  Home,
  GraduationCap,
  Users,
  UserCheck,
  ClipboardList,
  BarChart2,
  BookOpen,
  Coins,
  Package,
  Bell,
  MessageSquare,
  Settings,
  FileText,
  HelpCircle,
} from "lucide-react";
import type { NavGroup } from "~/types/navigation";

export const navItems: NavGroup[] = [
  {
    section: "",
    links: [{ label: "Dashboard", href: "/dashboard", icon: Home }],
  },
  {
    section: "İstifadəçilər",
    links: [
      { label: "Şagirdlər", href: "/dashboard/students", icon: GraduationCap },
      { label: "Müəllimlər", href: "/dashboard/teachers", icon: Users },
      { label: "Valideynlər", href: "/dashboard/parents", icon: UserCheck },
    ],
  },
  {
    section: "İmtahanlar",
    links: [
      { label: "İmtahanlar", href: "/dashboard/exams", icon: ClipboardList },
      { label: "Nəticələr", href: "/dashboard/results", icon: BarChart2 },
      { label: "Siniflər", href: "/dashboard/classes", icon: BookOpen },
    ],
  },
  {
    section: "Maliyyə",
    links: [
      { label: "Koinlər", href: "/dashboard/coins", icon: Coins },
      { label: "Paketlər", href: "/dashboard/packages", icon: Package },
    ],
  },
  {
    section: "Sistem",
    links: [
      { label: "Bildiriş", href: "/dashboard/notifications", icon: Bell },
      {
        label: "Chatbot loqları",
        href: "/dashboard/chatbot",
        icon: MessageSquare,
      },
      { label: "Tənzimləmələr", href: "/dashboard/settings", icon: Settings },
    ],
  },
  {
    section: "Məzmun",
    links: [
      { label: "Blog / Xəbərlər", href: "/dashboard/blog", icon: FileText },
      { label: "FAQ", href: "/dashboard/faq", icon: HelpCircle },
    ],
  },
];
