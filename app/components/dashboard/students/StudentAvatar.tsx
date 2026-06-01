import type { Student } from "~/lib/students"

export function StudentAvatar({ student }: { student: Student }) {
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br ${student.avatarClass} text-xs font-bold text-brand-dark ring-1 ring-neutral-stroke`}
    >
      {student.initials}
    </div>
  )
}
