import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavGroup = {
  section: string;
  links: NavLink[];
};
