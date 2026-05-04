import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select"
import { Switch } from "../../../components/ui/switch"
import { Button } from "~/components/ui/button"
import { useState } from "react"
import { Coins, PencilLine, ChevronRight } from "lucide-react";
import Coin from "~/assets/images/coin.png"
import { Input } from "../../../components/ui/input"
import { useNavigate } from "react-router";

const ExamParameters = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<string | null>(null);
    const [activeMoney, setActiveMoney] = useState<number | null>(null);
    const [isFree, setIsFree] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    return (
        <div>
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
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Kateqoriya</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Kateqoriya seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Bölmələr</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Bölmə seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Kateqoriya</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Kateqoriya seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Fənn</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Fənn seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Mövzu</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Mövzu seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-brand-dark text-sm font-medium">Sual sayı</p>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-neutral-50 h-45">
                                        <SelectValue placeholder="30 sual" className="text-brand-secondary text-base font-regular" />
                                    </SelectTrigger>

                                    <SelectContent >
                                        <SelectItem value="1">Category 1</SelectItem>
                                        <SelectItem value="2">Category 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-brand-dark text-sm font-medium">İmtahan müddəti</p>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-neutral-50 h-45">
                                        <SelectValue placeholder="60 dəqiqə" className="text-brand-secondary text-base font-regular" />
                                    </SelectTrigger>

                                    <SelectContent >
                                        <SelectItem value="1">Category 1</SelectItem>
                                        <SelectItem value="2">Category 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Kateqoriya</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Kateqoriya seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Fənn</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Fənn seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Mövzu</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-full bg-neutral-50 h-45">
                                    <SelectValue placeholder="Mövzu seçin..." className="text-brand-secondary text-base font-regular" />
                                </SelectTrigger>

                                <SelectContent >
                                    <SelectItem value="1">Category 1</SelectItem>
                                    <SelectItem value="2">Category 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-brand-dark text-sm font-medium">Sual sayı</p>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-neutral-50 h-45">
                                        <SelectValue placeholder="30 sual" className="text-brand-secondary text-base font-regular" />
                                    </SelectTrigger>

                                    <SelectContent >
                                        <SelectItem value="1">Category 1</SelectItem>
                                        <SelectItem value="2">Category 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-brand-dark text-sm font-medium">İmtahan müddəti</p>
                            <div>
                                <Select>
                                    <SelectTrigger className="w-full bg-neutral-50 h-45">
                                        <SelectValue placeholder="60 dəqiqə" className="text-brand-secondary text-base font-regular" />
                                    </SelectTrigger>

                                    <SelectContent >
                                        <SelectItem value="1">Category 1</SelectItem>
                                        <SelectItem value="2">Category 2</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Çətinlik səviyyəsi</p>
                        <div className="flex justify-between">
                            <Button
                                onClick={() => setActive("asan")}
                                className={`w-[336px] border h-12 transition cursor-pointer
      ${active === "asan"
                                        ? "bg-green-50 text-green-600 border-green-600"
                                        : "bg-white text-brand-secondary border-neutral-stroke"}
    `}
                            >
                                Asan
                            </Button>

                            <Button
                                onClick={() => setActive("orta")}
                                className={`w-[336px] border h-12 transition cursor-pointer
      ${active === "orta"
                                        ? "bg-orange-50 text-orange-600 border-orange-600"
                                        : "bg-white text-brand-secondary border-neutral-stroke"}
    `}
                            >
                                Orta
                            </Button>

                            <Button
                                onClick={() => setActive("cetin")}
                                className={`w-[336px] border h-12 transition cursor-pointer
      ${active === "cetin"
                                        ? "bg-red-50 text-red-600 border-red-600"
                                        : "bg-white text-brand-secondary border-neutral-stroke"}
    `}
                            >
                                Çətin
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-brand-dark text-sm font-medium">Çətinlik səviyyəsi</p>

                        <div className="flex flex-col bg-white p-4 border border-neutral-stroke rounded-xl">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2">
                                    <Coins size={16} className="text-brand-dark" />
                                    <p className="text-brand-dark text-sm font-medium">Pulsuz</p>
                                </div>
                                <div>
                                    <Switch
                                        id="pulsuz"
                                        checked={isFree}
                                        onCheckedChange={(val) => {
                                            setIsFree(val)
                                            if (val) setIsEditing(false)
                                        }}
                                        className="cursor-pointer"
                                    />
                                </div>
                            </div>
                            {!isFree && (
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-[10px]">
                                        <p className="text-sm text-brand-secondary font-medium">Coin miqdarı seçin</p>
                                        <div className="flex justify-between">
                                            <div className="flex gap-5">
                                                <Button
                                                    onClick={() => setActiveMoney(50)}
                                                    className={`border p-3 cursor-pointer transition text-base font-bold h-12
      ${activeMoney === 50
                                                            ? "bg-brand-primary text-white border-brand-primary"
                                                            : "bg-white border-neutral-stroke text-brand-dark"}
    `}>
                                                    <img src={Coin} width={24} height={24} />
                                                    <p>50</p>
                                                </Button>
                                                <Button
                                                    onClick={() => setActiveMoney(100)}
                                                    className={`border p-3 cursor-pointer transition text-base font-bold h-12
      ${activeMoney === 100
                                                            ? "bg-brand-primary text-white border-brand-primary"
                                                            : "bg-white border-neutral-stroke text-brand-dark"}
    `}>
                                                    <img src={Coin} width={24} height={24} />
                                                    <p>100</p>
                                                </Button>
                                                <Button
                                                    onClick={() => setActiveMoney(150)}
                                                    className={`border p-3 cursor-pointer transition text-base font-bold h-12
      ${activeMoney === 150
                                                            ? "bg-brand-primary text-white border-brand-primary"
                                                            : "bg-white border-neutral-stroke text-brand-dark"}
    `}>
                                                    <img src={Coin} width={24} height={24} />
                                                    <p>150</p>
                                                </Button>
                                                <Button
                                                    onClick={() => setActiveMoney(200)}
                                                    className={`border p-3 cursor-pointer transition text-base font-bold h-12
      ${activeMoney === 200
                                                            ? "bg-brand-primary text-white border-brand-primary"
                                                            : "bg-white border-neutral-stroke text-brand-dark"}
    `}>
                                                    <img src={Coin} width={24} height={24} />
                                                    <p>200</p>
                                                </Button>
                                            </div>
                                            <Button onClick={() => setIsEditing(prev => !prev)} className="bg-white border border-neutral-stroke h-12 w-40 cursor-pointer gap-2">
                                                <PencilLine size={24} className="text-brand-primary" />
                                                <p className="text-brand-primary text-semibold text-base">Redaktə et</p>
                                            </Button>
                                        </div>
                                    </div>
                                    {isEditing && (
                                        <Input className="bg-neutral-50 text-brand-secondary text-base h-14" placeholder="Coin miqdarını daxil edin" />
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <Button onClick={() => setActiveMoney(0)} className="bg-white border border-neutral-stroke h-12 w-40 cursor-pointer gap-2">
                        <PencilLine size={24} className="text-brand-primary" />
                        <p className="text-brand-primary text-semibold text-base">Sıfırla</p>
                    </Button>
                    <Button
                        onClick={() => navigate("/create-exam/exam-summary")}
                        className="bg-brand-primary h-12 w-40 cursor-pointer gap-2">
                        <p className="text-white text-semibold text-base">Davam et</p>
                        <ChevronRight size={24} className="text-white" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ExamParameters