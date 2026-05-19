import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import { X , TrashIcon} from "lucide-react"

const DeleteCategoryDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="text-brand-dark bg-transparent w-6 h-6 bg-transparent">
                    <TrashIcon /> 
                </Button>
            </DialogTrigger>

            <DialogContent
                showCloseButton={false}
                className="p-0 sm:max-w-[540px] overflow-hidden gap-0 bg-white max-h-[90vh] overflow-y-auto"
            >
                <DialogHeader className="bg-brand-primary px-8 py-5 flex flex-row items-center justify-between">
                    <DialogTitle className="text-white text-xl font-semibold">
                        Kateqoriya sil
                    </DialogTitle>
                    <DialogClose asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/10 hover:text-white"
                        >
                            <X size={24} />
                        </Button>
                    </DialogClose>
                </DialogHeader>

                <div className="flex flex-col gap-10 py-10 px-6">
                    <div className="flex flex-col items-center gap-7">
                        <p className="text-brand-dark font-semibold text-xl whitespace-nowrap">
                           Abituriyent kateqoriyasını silmək istədiyinizə əminsiniz?
                        </p>
                          <p className="text-brand-dark font-regular text-sm whitespace-nowrap">
                           Bu əməliyyat geri qaytarıla bilməz.
                        </p>
                        <span className="bg-red-0 p-[10px] gap-[10px] flex text-red-500 rounded-xl">⚠️ 6 fənn və 124 imtahan da silinəcək</span>
                    </div>
                    
                    <div className="flex justify-center gap-4">
                        <DialogClose asChild>
                            <Button
                                className="h-12 bg-white w-55 rounded-xl border-neutral-stroke text-brand-primary font-semibold text-base"
                            >
                                Ləğv et
                            </Button>
                        </DialogClose>
                        <Button className="h-12 w-55 rounded-xl bg-brand-primary text-white font-semibold text-base">
                            Yadda saxla
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteCategoryDialog