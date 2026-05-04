import React from 'react'
import { Info, Copy, Trash, Bold, Italic, Underline, Image } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Textarea } from '~/components/ui/textarea'

const ExamQuestions = () => {
    return (
        <div className='flex flex-col bg-white p-8 rounded-[20px] gap-8'>
            <div className='flex gap-5 flex-col'>
                <div className='flex gap-3 p-4 bg-orange-50 w-full rounded-2xl items-center'>
                    <Info size={24} className="text-orange-800" />
                    <p className="font-medium text-sm text-orange-800">29 sual daha əlavə etməlisiniz. Cəmi 30 sual lazımdır.</p>
                </div>
                <div className='border-[0.8px] border-neutral-blue rounded-2xl'>
                    <div className='flex bg-neutral-50  w-full rounded-t-2xl'>
                        <div className='flex justify-between py-4 px-5 w-full'>
                            <div className='flex gap-2 items-center'>
                                <div className='flex bg-brand-primary text-white w-8 h-8 rounded-lg justify-center items-center font-bold text-sm'>1</div>
                                <p className='text-brand-dark font-bold text-base'>Sual</p>
                            </div>
                            <div className='flex gap-3'>
                                <Button className='bg-white text-brand-primary border border-neutral-stroke font-semibold text-base'>
                                    <Copy size={24} className='text-brand-primary' />
                                    Kopyala
                                </Button>
                                <Button className='bg-white text-brand-primary border border-neutral-stroke font-semibold text-base'>
                                    <Trash size={24} className='text-brand-primary' />
                                    Sil
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 p-5'>
                        <div className='flex gap-[11px]'>
                            <p className='text-brand-secondary font-semibold text-sm'>Sual tipi:</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex py-3 px-4 gap-5 rounded-[14px] border border-neutral-stroke w-full'>
                                <Bold size={20} className="text-brand-secondary" />
                                <Italic size={20} className="text-brand-secondary" />
                                <Underline size={20} className="text-brand-secondary" />
                                <div className='border border-neutral-stroke'></div>
                                <Image size={20} className="text-brand-secondary" />
                            </div>
                            <Textarea className='bg-neutral-50 p-4' placeholder='Sual mətni yazın...' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExamQuestions
