import { ChevronLeft } from 'lucide-react'
import React, { type ReactNode } from 'react'

const ExamHeader = ({ children, route }: { children: ReactNode, route?: string }) => {
    return (
        // <div className='flex justify-between py-[14px]'>
        //     <div> {route && <ChevronLeft />
        //     }
        //         Imtahan yarat</div>

        //     {children}
        // </div>
        <div className="flex justify-between py-[14px]">
            <div className="flex flex-col gap-1">
                <p className="font-bold text-brand-dark text-[25px]">İmtahan yarat</p>
                <p>İmtahan parametrlərini daxil edin</p>
            </div>
            <div className="flex gap-3 items-center">
                <span className="flex h-[30px] w-[30px] bg-brand-primary text-white font-bold rounded-full justify-center items-center">1</span>
                <p className="text-brand-dark font-medium text-sm">Parametrlər</p>
                <span className="h-[2px] w-10 bg-neutral-stroke rounded-[2px]"></span>
                <span className="flex h-[30px] w-[30px] bg-dark-blue-50 text-brand-secondary font-bold rounded-full justify-center items-center">2</span>
                <p>Suallar</p>
            </div>
        </div>
    )
}

export default ExamHeader
