import type { Teacher } from "~/lib/teachers"

export function TeacherAvatar({ teacher }: { teacher: Teacher }) {
  return (
    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-bold text-brand-dark ring-1 ring-neutral-stroke">
      {teacher.initials}
    </div>
  )
}
