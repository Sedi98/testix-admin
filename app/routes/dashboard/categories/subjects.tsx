import { useParams, useNavigate } from "react-router"
import SubjectCard from "~/components/dashboard/SubjectCard"
import { subjectsData } from "~/lib/subjects"
import { categoriesData } from "~/lib/categories"
import AddCategoryDialog from "~/components/dashboard/AddCategoryDialog"

export default function SubjectsPage() {
  const { categoryId } = useParams()
  
  const currentCategory = categoriesData.find(cat => cat.id === categoryId)
  
  const categorySubjects = subjectsData.filter(subject => subject.categoryId === categoryId)
  
  return (
    <div className="space-y-7">
        <div className='flex justify-between'>
                <p className='font-bold text-[25px] text-brand-dark'>{currentCategory?.title}- Fənnlər</p>
                <AddCategoryDialog />
        </div>
      <div className='flex flex-col p-5 gap-10 rounded-xl bg-white'>
      <div className="grid grid-cols-3 gap-x-14 gap-y-10">
        {categorySubjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            {...subject}
          />
        ))}
      </div>
    </div></div>
  )
}
