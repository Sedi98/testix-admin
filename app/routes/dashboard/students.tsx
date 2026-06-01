import { useMemo, useState } from "react"
import { EditStudentModal } from "~/components/dashboard/students/EditStudentModal"
import { StudentDetailHeader } from "~/components/dashboard/students/StudentDetailHeader"
import { StudentInfoTab } from "~/components/dashboard/students/StudentInfoTab"
import { StudentListView } from "~/components/dashboard/students/StudentListView"
import { StudentPackageTab } from "~/components/dashboard/students/StudentPackageTab"
import { StudentCoinsTab } from "~/components/dashboard/students/StudentCoinsTab"
import { StudentLinksTab } from "~/components/dashboard/students/StudentLinksTab"
import { StudentResultsTab } from "~/components/dashboard/students/StudentResultsTab"
import { students, type Student, type StudentTab } from "~/lib/students"

export default function StudentsPage() {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [activeTab, setActiveTab] = useState<StudentTab>("info")
  const [packageFilter, setPackageFilter] = useState("Hamısı")
  const [linkFilter, setLinkFilter] = useState("Hamısı")
  const [statusFilter, setStatusFilter] = useState("Hamısı")
  const [editOpen, setEditOpen] = useState(false)

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const packageMatches =
        packageFilter === "Hamısı" || student.package === packageFilter
      const statusMatches =
        statusFilter === "Hamısı" || student.status === statusFilter
      const linkMatches =
        linkFilter === "Hamısı" ||
        (linkFilter === "Bağlantısız"
          ? student.links.length === 0
          : student.links.includes(linkFilter))

      return packageMatches && statusMatches && linkMatches
    })
  }, [linkFilter, packageFilter, statusFilter])

  if (!selectedStudent) {
    return (
      <StudentListView
        students={filteredStudents}
        packageFilter={packageFilter}
        linkFilter={linkFilter}
        statusFilter={statusFilter}
        onPackageFilterChange={setPackageFilter}
        onLinkFilterChange={setLinkFilter}
        onStatusFilterChange={setStatusFilter}
        onSelectStudent={setSelectedStudent}
      />
    )
  }

  return (
    <>
      <section className="space-y-8 text-brand-dark">
        <StudentDetailHeader
          activeTab={activeTab}
          onBack={() => {
            setSelectedStudent(null)
            setActiveTab("info")
          }}
          onTabChange={setActiveTab}
        />

        {activeTab === "info" && (
          <StudentInfoTab
            student={selectedStudent}
            onEdit={() => setEditOpen(true)}
          />
        )}
        {activeTab === "package" && <StudentPackageTab />}
        {activeTab === "coins" && <StudentCoinsTab />}
        {activeTab === "links" && (
          <StudentLinksTab onEdit={() => setEditOpen(true)} />
        )}
        {activeTab === "results" && <StudentResultsTab />}
      </section>

      {editOpen && (
        <EditStudentModal
          student={selectedStudent}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  )
}
