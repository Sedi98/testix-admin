import {
  Home,
  GraduationCap,
  Users,
  UserCheck,
  BarChart2,
  BookOpen,
  Coins,
  Package,
  Bell,
  MessageSquare,
  Settings,
  FileText,
  HelpCircle,
  Plus,
  Folder,
  BookOpenText,
  Building,
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
      { label: "İmtahan yarat", href: "/create-exam", icon: Plus },
      { label: "Qaralamalar", href: "/drafts", icon: BookOpenText },
      {
        label: "Kateqoriyalar",
        href: "/categories",
        icon: Folder,
      },
      { label: "Nəticələr", href: "/dashboard/results", icon: BarChart2 },
      { label: "Siniflər", href: "/dashboard/classes", icon: Building },
    ],
  },
  {
    section: "Maliyyə",
    links: [
      { label: "Koinlər", href: "/dashboard/coins", icon: Coins },
      { label: "Planlar", href: "/dashboard/plans", icon: Package },
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
