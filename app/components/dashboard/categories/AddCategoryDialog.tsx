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
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useCreateCategory } from "~/services/test/hooks"

const categorySchema = z.object({
    name: z
        .string()
        .min(1, "Kateqoriya adı tələb olunur")
        .min(2, "Kateqoriya adı ən az 2 simvol olmalıdır"),
    description: z.string().optional(),
})

type CategoryFormValues = z.infer<typeof categorySchema>

const azMap: Record<string, string> = {
  ə: "e",
  ü: "u",
  ö: "o",
  ğ: "g",
  ç: "c",
  ş: "s",
  ı: "i",
};

const AddCategoryDialog = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { mutateAsync: createCategory, isPending } = useCreateCategory()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<CategoryFormValues>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    const onSubmit = async (data: CategoryFormValues) => {
        try {
            const payload = {
                name: data.name,
                slug: data.name
                  .toLowerCase()
                  .replace(/[əüöğçşı]/g, (char) => azMap[char] || char)
                  .replace(/[^a-z0-9\s]/g, "")
                  .trim()
                  .replace(/\s+/g, "-"),
                parentId: "",
                displayOrder: 0,
            }
            
            await createCategory(payload)
            reset()
            setIsOpen(false)
        } catch (error) {
            console.error("Error creating category:", error)
        }
    }
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="h-12 bg-brand-primary rounded-xl text-white font-semibold text-base">
                    <Plus size={24} /> Kateqoriya əlavə et
                </Button>
            </DialogTrigger>

            <DialogContent
                showCloseButton={false}
                className="p-0 sm:max-w-[880px] overflow-hidden gap-0 bg-white max-h-[90vh] overflow-y-auto"
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

                <form onSubmit={handleSubmit(onSubmit)}>
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
                                    {...register("name")}
                                />
                            </div>

                        {/* <div className="flex flex-col gap-1">
                            <label className="text-brand-dark text-sm font-semibold">
                                Açıqlama
                            </label>
                            <Textarea
                                placeholder="Kateqoriya haqqında qısa məlumat........"
                                className="bg-white min-h-[100px] text-base text-brand-secondary"
                            />
                        </div> */}

                        {/* <div className="flex flex-col gap-1">
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
                        </div> */}
                    </div>

                    {/* <div className="flex items-center gap-5 mt-10">
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
                      <div className="flex flex-col gap-3 p-5 rounded-xl bg-neutral-50 border border-neutral-stroke">
                        <div className="flex gap-1 flex-col">
                            <label className="text-brand-dark text-sm font-semibold">
                              Fənn adı
                            </label>
                            <div className="flex items-center gap-3">
                            <Input
                                placeholder="Məs : Riyaziyyat"
                                className="bg-white h-12 text-base text-brand-secondary"
                            />
                            <div className="flex gap-1">
                                <Button className="bg-white text-brand-dark border-brand-primary rounded-xl h-10 w-20">Aktiv</Button>
                                <Button className="bg-white text-brand-dark rounded-xl h-10 w-20">Deaktiv</Button>
                            </div>
                            </div>
                        </div>
                        <span className="h-px w-full bg-neutral-stroke" />

                        <div className="flex flex-col gap-1">
                            <label className="text-brand-dark text-sm font-semibold">
                                Mövzu
                            </label>
                            <div className="flex items-center gap-3">
                            <Input
                                placeholder="Məs : Kəsrlər"
                                className="bg-white h-12 text-base text-brand-secondary"
                            />
                            <div className="flex gap-1">
                                <Button className="bg-white text-brand-dark border-brand-primary rounded-xl h-10 w-20">Aktiv</Button>
                                <Button className="bg-white text-brand-dark rounded-xl h-10 w-20">Deaktiv</Button>
                            </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-brand-dark text-sm font-semibold">
                                Mövzu
                            </label>
                            <div className="flex items-center gap-3">
                            <Input
                                placeholder="Məs : Funksiyalar"
                                className="bg-white h-12 text-base text-brand-secondary"
                            />
                            <div className="flex gap-1">
                                <Button className="bg-white text-brand-dark border-brand-primary rounded-xl h-10 w-20">Aktiv</Button>
                                <Button className="bg-white text-brand-dark rounded-xl h-10 w-20">Deaktiv</Button>
                            </div>
                            </div>
                        </div>
                        <Button
                            className="h-12 bg-white rounded-xl border-brand-primary text-brand-primary font-semibold text-base mt-7"
                        >
                            <Plus className="w-6 h-6" />
                            Mövzu əlavə et
                        </Button>
                    </div> */}
                    {/* <div className="flex flex-col gap-3 p-5 rounded-xl bg-neutral-50 border border-neutral-stroke">
                        <div className="flex gap-1 flex-col">
                            <label className="text-brand-dark text-sm font-semibold">
                              Fənn adı
                            </label>
                            <div className="flex items-center gap-3">
                            <Input
                                placeholder="Məs : Fizika"
                                className="bg-white h-12 text-base text-brand-secondary"
                            />
                            <div className="flex gap-1">
                                <Button className="bg-white text-brand-dark border-brand-primary rounded-xl h-10 w-20">Aktiv</Button>
                                <Button className="bg-white text-brand-dark rounded-xl h-10 w-20">Deaktiv</Button>
                            </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex justify-center gap-4 pt-10">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                className="h-12 bg-white w-55 rounded-xl border-neutral-stroke text-brand-primary font-semibold text-base"
                            >
                                Ləğv et
                            </Button>
                        </DialogClose>
                        <Button 
                            type="submit"
                            disabled={isPending || isSubmitting}
                            className="h-12 w-55 rounded-xl bg-brand-primary text-white font-semibold text-base"
                        >
                            {isPending || isSubmitting ? "Yadda saxlanır..." : "Yadda saxla"}
                        </Button>
                    </div>
                </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddCategoryDialog