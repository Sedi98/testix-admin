import { useMemo, useState } from "react"
import { TeacherCoinsTab } from "~/components/dashboard/teachers/TeacherCoinsTab"
import { TeacherDetailHeader } from "~/components/dashboard/teachers/TeacherDetailHeader"
import { TeacherEditModal } from "~/components/dashboard/teachers/TeacherEditModal"
import { TeacherExamsTab } from "~/components/dashboard/teachers/TeacherExamsTab"
import { TeacherInfoTab } from "~/components/dashboard/teachers/TeacherInfoTab"
import { TeacherListView } from "~/components/dashboard/teachers/TeacherListView"
import { TeacherPackageTab } from "~/components/dashboard/teachers/TeacherPackageTab"
import { TeacherClassesTab } from "~/components/dashboard/teachers/TeacherClassesTab"
import { teachers, type Teacher, type TeacherTab } from "~/lib/teachers"

export default function TeachersPage() {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)
  const [activeTab, setActiveTab] = useState<TeacherTab>("info")
  const [packageFilter, setPackageFilter] = useState("Hamısı")
  const [statusFilter, setStatusFilter] = useState("Hamısı")
  const [editOpen, setEditOpen] = useState(false)

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const packageMatches =
        packageFilter === "Hamısı" || teacher.package === packageFilter
      const statusMatches =
        statusFilter === "Hamısı" || teacher.status === statusFilter

      return packageMatches && statusMatches
    })
  }, [packageFilter, statusFilter])

  if (!selectedTeacher) {
    return (
      <TeacherListView
        teachers={filteredTeachers}
        packageFilter={packageFilter}
        statusFilter={statusFilter}
        onPackageFilterChange={setPackageFilter}
        onStatusFilterChange={setStatusFilter}
        onSelectTeacher={setSelectedTeacher}
      />
    )
  }

  return (
    <>
      <section className="space-y-8 text-brand-dark">
        <TeacherDetailHeader
          activeTab={activeTab}
          onBack={() => {
            setSelectedTeacher(null)
            setActiveTab("info")
          }}
          onTabChange={setActiveTab}
        />

        {activeTab === "info" && (
          <TeacherInfoTab
            teacher={selectedTeacher}
            onEdit={() => setEditOpen(true)}
          />
        )}
        {activeTab === "package" && <TeacherPackageTab />}
        {activeTab === "coins" && <TeacherCoinsTab />}
        {activeTab === "classes" && <TeacherClassesTab />}
        {activeTab === "exams" && <TeacherExamsTab />}
      </section>

      {editOpen && (
        <TeacherEditModal
          teacher={selectedTeacher}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  )
}
