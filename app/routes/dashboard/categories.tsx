import React, { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Plus } from 'lucide-react'
import { categoriesData } from '~/lib/categories'
import CategoryCard from '~/components/dashboard/categories/CategoryCard'
import AddCategoryDialog from '~/components/dashboard/categories/AddCategoryDialog'

const CategoriesPage = () => {
    const [categories, setCategories] = useState(categoriesData)

    const handleToggle = (index: number, value: boolean) => {
        setCategories((prev) =>
            prev.map((c, i) =>
                i === index
                    ? { ...c, active: value, status: value ? 'Aktiv' : 'Deaktiv' }
                    : c
            )
        )
    }

    return (
        <div className='space-y-7'>
            <div className='flex justify-between'>
                <p className='font-bold text-[25px] text-brand-dark'>Kateqoriyalar</p>
                <AddCategoryDialog />
            </div>
            <div className='flex flex-col p-5 gap-10 rounded-xl bg-white'>
                <div className='grid grid-cols-3 gap-14'>
                    <div className='flex flex-col p-3 gap-3 rounded-xl border border-neutral-stroke items-center justify-center'>
                        <p className='font-bold text-xl text-brand-dark'>9</p>
                        <p className='font-regular text-xl text-neutral-500'>Ümumi kateqoriyalar</p>
                    </div>
                    <div className='flex flex-col p-3 gap-3 rounded-xl border border-neutral-stroke items-center justify-center'>
                        <p className='font-bold text-xl text-brand-primary'>34</p>
                        <p className='font-regular text-xl text-neutral-500'>Ümumi fənn</p>
                    </div>
                    <div className='flex flex-col p-3 gap-3 rounded-xl border border-neutral-stroke items-center justify-center'>
                        <p className='font-bold text-xl text-green-700'>502</p>
                        <p className='font-regular text-xl text-neutral-500'>Ümumi imtahan</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-x-14 gap-y-10">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            {...category}
                            onToggle={(value) => handleToggle(index, value)}
                        />
                    ))}
                </div>
            </div>
        </div >
    )
}

export default CategoriesPage
