import { useParams, useNavigate } from "react-router"
import TopicCard from "~/components/dashboard/TopicCard"
import { subjectsData } from "~/lib/subjects"
import { categoriesData } from "~/lib/categories"
import { topicsData } from "~/lib/topics"
import AddCategoryDialog from "~/components/dashboard/AddCategoryDialog"

export default function TopicsPage() {
  const { subjectId } = useParams()
  
  const currentSubject = subjectsData.find(subject => subject.id === subjectId)
  const currentCategory = categoriesData.find(cat => cat.id === currentSubject?.categoryId)
  
  const subjectTopics = topicsData.filter(topic => topic.subjectId === subjectId)
  
  return (
    <div className="space-y-7">
        <div className='flex justify-between'>
                <p className='font-bold text-[25px] text-brand-dark'>{currentSubject?.title} - Mövzular</p>
                <AddCategoryDialog />
        </div>
      <div className='flex flex-col p-5 gap-10 rounded-xl bg-white'>
      <div className="grid grid-cols-3 gap-x-14 gap-y-10">
        {subjectTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            {...topic}
          />
        ))}
      </div>
    </div></div>
  )
}
