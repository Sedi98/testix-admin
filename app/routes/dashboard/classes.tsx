import { useMemo, useState } from "react"
import { ClassDetailHeader } from "~/components/dashboard/classes/ClassDetailHeader"
import { ClassExamsTab } from "~/components/dashboard/classes/ClassExamsTab"
import { ClassInfoTab } from "~/components/dashboard/classes/ClassInfoTab"
import { ClassListView } from "~/components/dashboard/classes/ClassListView"
import { ClassStudentsTab } from "~/components/dashboard/classes/ClassStudentsTab"
import { classes, type ClassItem, type ClassTab } from "~/lib/classes"

export default function ClassesPage() {
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null)
  const [activeTab, setActiveTab] = useState<ClassTab>("info")
  const [statusFilter, setStatusFilter] = useState("Status")

  const filteredClasses = useMemo(() => {
    if (statusFilter === "Status" || statusFilter === "Hamısı") return classes
    return classes.filter((item) => item.status === statusFilter)
  }, [statusFilter])

  if (!selectedClass) {
    return (
      <ClassListView
        classes={filteredClasses}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        onSelectClass={setSelectedClass}
      />
    )
  }

  return (
    <section className="space-y-8 text-brand-dark">
      <ClassDetailHeader
        activeTab={activeTab}
        onBack={() => {
          setSelectedClass(null)
          setActiveTab("info")
        }}
        onTabChange={setActiveTab}
      />

      {activeTab === "info" && <ClassInfoTab classItem={selectedClass} />}
      {activeTab === "students" && <ClassStudentsTab classItem={selectedClass} />}
      {activeTab === "exams" && <ClassExamsTab classItem={selectedClass} />}
    </section>
  )
}
