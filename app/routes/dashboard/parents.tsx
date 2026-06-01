import { useMemo, useState } from "react"
import { ParentCoinsTab } from "~/components/dashboard/parents/ParentCoinsTab"
import { ParentConnectionsTab } from "~/components/dashboard/parents/ParentConnectionsTab"
import { ParentDetailHeader } from "~/components/dashboard/parents/ParentDetailHeader"
import { ParentEditModal } from "~/components/dashboard/parents/ParentEditModal"
import { ParentInfoTab } from "~/components/dashboard/parents/ParentInfoTab"
import { ParentListView } from "~/components/dashboard/parents/ParentListView"
import { ParentPackageTab } from "~/components/dashboard/parents/ParentPackageTab"
import { ParentResultsTab } from "~/components/dashboard/parents/ParentResultsTab"
import { parents, type Parent, type ParentTab } from "~/lib/parents"

export default function ParentsPage() {
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null)
  const [activeTab, setActiveTab] = useState<ParentTab>("info")
  const [packageFilter, setPackageFilter] = useState("Hamısı")
  const [linkFilter, setLinkFilter] = useState("Hamısı")
  const [statusFilter, setStatusFilter] = useState("Hamısı")
  const [editOpen, setEditOpen] = useState(false)

  const filteredParents = useMemo(() => {
    return parents.filter((parent) => {
      const packageMatches =
        packageFilter === "Hamısı" || parent.package === packageFilter
      const statusMatches =
        statusFilter === "Hamısı" || parent.status === statusFilter
      const linkMatches =
        linkFilter === "Hamısı" ||
        (linkFilter === "Bağlantısız"
          ? parent.children.length === 0
          : parent.links.includes(linkFilter))

      return packageMatches && statusMatches && linkMatches
    })
  }, [linkFilter, packageFilter, statusFilter])

  if (!selectedParent) {
    return (
      <ParentListView
        parents={filteredParents}
        packageFilter={packageFilter}
        linkFilter={linkFilter}
        statusFilter={statusFilter}
        onPackageFilterChange={setPackageFilter}
        onLinkFilterChange={setLinkFilter}
        onStatusFilterChange={setStatusFilter}
        onSelectParent={setSelectedParent}
      />
    )
  }

  return (
    <>
      <section className="space-y-8 text-brand-dark">
        <ParentDetailHeader
          activeTab={activeTab}
          onBack={() => {
            setSelectedParent(null)
            setActiveTab("info")
          }}
          onTabChange={setActiveTab}
        />

        {activeTab === "info" && (
          <ParentInfoTab parent={selectedParent} onEdit={() => setEditOpen(true)} />
        )}
        {activeTab === "package" && <ParentPackageTab />}
        {activeTab === "coins" && <ParentCoinsTab />}
        {activeTab === "connections" && (
          <ParentConnectionsTab onEdit={() => setEditOpen(true)} />
        )}
        {activeTab === "results" && <ParentResultsTab />}
      </section>

      {editOpen && (
        <ParentEditModal
          parent={selectedParent}
          onClose={() => setEditOpen(false)}
        />
      )}
    </>
  )
}
