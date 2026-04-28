import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select"

export default function Exams() {
    return (
        <div className="space-y-[9px]">
            <div className="flex justify-between py-[14px]">
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-brand-dark text-[25px]">Imtahan yarat</p>
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
            <div className="bg-white flex flex-col rounded-[20px] p-8 gap-8">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex flex-col gap-[2px]">
                            <p className="text-brand-dark font-semibold text-xl">İmtahan Parametrləri</p>
                            <p className="text-brand-secondary font-medium text-base">Bütün sahələri doldurun</p>
                        </div>
                    </div>
                    <div className="flex gap-[34px] text-brand-dark font-medium text-xl">
                        <p className="border-b border-brand-primary">AZ</p>
                        <p>RU</p>
                        <p>EN</p>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Kateqoriya</p>
                        <div className="w-full max-w-sm">
                            <Select>
                                <SelectTrigger className="w-full bg-gray-100 rounded-xl h-12">
                                    <SelectValue placeholder="Kateqoriya seçin..." />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}