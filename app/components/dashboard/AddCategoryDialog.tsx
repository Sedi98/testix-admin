import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
import {
    Dropdown,
    DropdownContent,
    DropdownItem,
    DropdownTrigger,
    DropdownValue,
} from "~/components/ui/dropdown"
import { Plus, X } from "lucide-react"

const AddCategoryDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-12 bg-brand-primary rounded-xl text-white font-semibold text-base">
                    <Plus size={24} /> Kateqoriya əlavə et
                </Button>
            </DialogTrigger>

            <DialogContent
                showCloseButton={false}
                className="p-0 sm:max-w-[880px] overflow-hidden gap-0 bg-white"
            >
                <DialogHeader className="bg-brand-primary px-8 py-5 flex flex-row items-center justify-between">
                    <DialogTitle className="text-white text-xl font-semibold">
                        Kateqoriya əlavə et
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

                <div className="flex flex-col gap-5 p-8">
                    <div className="flex items-center gap-3">
                        <p className="text-brand-dark font-semibold text-sm whitespace-nowrap">
                            Kateqoriya məlumatları
                        </p>
                        <span className="h-px w-full bg-neutral-stroke" />
                    </div>

                    <div className="flex flex-col gap-3 p-5 rounded-xl bg-neutral-50 border border-neutral-stroke">
                        <div className="flex flex-col gap-1">
                            <label className="text-brand-dark text-sm font-semibold">
                                Kateqoriya adı
                            </label>
                            <Input
                                placeholder="Məs : Abituriyent"
                                className="bg-white h-12 text-base text-brand-secondary"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-brand-dark text-sm font-semibold">
                                Açıqlama
                            </label>
                            <Textarea
                                placeholder="Kateqoriya haqqında qısa məlumat........"
                                className="bg-white min-h-[100px] text-base text-brand-secondary"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-brand-dark text-sm font-semibold">
                                Status
                            </label>
                            <Dropdown>
                                <DropdownTrigger className="w-full bg-white h-12">
                                    <DropdownValue placeholder="Aktiv" className="text-brand-secondary text-base font-regular" />
                                </DropdownTrigger>
                                <DropdownContent>
                                    <DropdownItem value="Aktiv">
                                        <span className="text-green-600">Aktiv</span>
                                    </DropdownItem>
                                    <DropdownItem value="Deaktiv">
                                        <span className="text-red-600">Deaktiv</span>
                                    </DropdownItem>
                                </DropdownContent>
                            </Dropdown>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mt-10">
                        <p className="text-brand-dark font-semibold text-sm whitespace-nowrap">
                            Fənnlər
                        </p>
                        <span className="h-px w-full bg-neutral-stroke" />
                        <Button
                            variant="outline"
                            className="h-12 px-5 w-[202px] rounded-xl border-brand-primary text-brand-primary font-semibold whitespace-nowrap"
                        >
                            <Plus size={24} /> Fənn əlavə et
                        </Button>
                    </div>

                    <div className="flex justify-center gap-4 pt-20">
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

export default AddCategoryDialog