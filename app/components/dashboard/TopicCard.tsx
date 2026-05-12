import React from "react";
import { Button } from "~/components/ui/button";
import { PencilLine, Trash, ArrowRight } from "lucide-react";
import { Switch } from "~/components/ui/switch";
import type { TopicCardProps } from "~/lib/topics";

type TopicCardComponentProps = TopicCardProps & {
    onToggle?: (value: boolean) => void;
};

const TopicCard = ({
    id,
    status,
    title,
    questions,
    active,
    onToggle,
}: TopicCardComponentProps) => {
    return (
         <div className="flex flex-col p-5 gap-5 border border-neutral-stroke bg-neutral-50 rounded-xl">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <span
                                    className={`p-[10px] h-6 rounded-xl gap-1 w-20 items-center flex justify-center text-sm
                        ${active
                                            ? "bg-[#0FAD171A] text-green-800"
                                            : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {status}
                                </span>
        
                                <Switch variant="green" checked={active} onCheckedChange={onToggle} />
                            </div>
        
                            <p className="font-bold text-xl text-brand-dark">{title}</p>
                        </div>
        
                    </div>
        
                    <div className="flex flex-col gap-7">
                        <div className="flex">
        
                            <div className="flex flex-col gap-1 items-center">
                                <p className="font-bold text-sm text-brand-dark">{questions}</p>
                                <p className="font-regular text-sm text-neutral-500">Imtahan</p>
                            </div>
    
                        </div>
        
                        <div className="flex gap-7 justify-end">
                            <PencilLine size={24} className="text-brand-dark cursor-pointer" />
        
                            <Trash size={24} className="text-brand-dark cursor-pointer" />
                           
                        </div>
                    </div>
                </div>
    );
};

export default TopicCard;
