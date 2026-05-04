import React from 'react'
import { Plus } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { useNavigate } from "react-router";
const ExamSummary = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col bg-white p-8 rounded-[20px] gap-8'>
            <div className='flex flex-col gap-5'>
                <p className='text-brand-dark font-semibold text-xl'>İmtahan xülasəsi</p>
                <div className='flex p-5 gap-3 justify-between border border-neutral-stroke rounded-xl'>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Kateqoriya</p>
                        <p className='font-semibold text-sm text-brand-dark'>Buraxılış imtahanı</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Sual sayı / müddət</p>
                        <p className='font-semibold text-sm text-brand-dark'>30 sual / 60 dəq</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Çətinlik</p>
                        <p className='font-semibold text-sm text-brand-dark'>Çətin</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Bölmə</p>
                        <p className='font-semibold text-sm text-brand-dark'>9-cu sinif</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Fənn</p>
                        <p className='font-semibold text-sm text-brand-dark'>Riyaziyyat</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Mövzu</p>
                        <p className='font-semibold text-sm text-brand-dark'>Natural ədədlər</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p className='font-medium text-sm text-brand-secondary'>Qiymət</p>
                        <p className='font-semibold text-sm text-brand-dark'>50 koin</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-5 border border-dashed border-neutral-stroke rounded-2xl items-center'>
                <div className='p-5 bg-neutral-50 rounded-[20px]'>
                    <Plus size={32} className="text-brand-dark" />
                </div>
                <p className='font-bold text-xl text-brand-dark'>Sual əlavə edin</p>
                <p className='font-medium text-sm text-brand-secondary'>Hələ heç bir sual əlavə edilməyib. Aşağıdakı düymə ilə başlayın.</p>
                <Button
                    onClick={() => navigate("/create-exam/exam-questions")}
                    className='bg-brand-primary text-white font-semibold text-base w-50 h-12 rounded-xl cursor-pointer'>
                    <Plus size={24} className="text-white" />
                    İlk sualı əlavə et
                </Button>
            </div>
        </div>
    )
}

export default ExamSummary
