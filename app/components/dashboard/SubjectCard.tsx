import React from "react";
import { Button } from "~/components/ui/button";
import { PencilLine, Trash, ArrowRight } from "lucide-react";
import { Switch } from "~/components/ui/switch";
import { useNavigate } from "react-router";
import type { SubjectCardProps } from "~/lib/subjects";

type SubjectCardComponentProps = SubjectCardProps & {
    onToggle?: (value: boolean) => void;
};

const SubjectCard = ({
    id,
    status,
    title,
    description,
    topics,
    questions,
    exams,
    active,
    onToggle,
}: SubjectCardComponentProps) => {
    const navigate = useNavigate();
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
        
                        <p className="font-regular text-base text-brand-dark">
                            {description}
                        </p>
                    </div>
        
                    <div className="flex flex-col gap-7">
                        <div className="flex justify-evenly">
        
                            <div className="flex flex-col gap-1 items-center">
                                <p className="font-bold text-sm text-brand-dark">{topics}</p>
                                <p className="font-regular text-sm text-neutral-500">Mövzu</p>
                            </div>
        
                            <div className="flex flex-col gap-1 items-center">
                                <p className="font-bold text-sm text-brand-dark">{exams}</p>
                                <p className="font-regular text-sm text-neutral-500">İmtahan</p>
                            </div>
                        </div>
        
                        <div className="flex gap-7 justify-between items-center">
                            <PencilLine size={24} className="text-brand-dark cursor-pointer" />
        
                            <Trash size={24} className="text-brand-dark cursor-pointer" />
        
                            <Button 
                                className="h-12 w-[171px] bg-brand-primary rounded-xl text-white font-semibold text-base gap-2"
                                onClick={() => navigate(`/topics/${id}`)}
                            >
                                Mövzulara bax <ArrowRight size={24} />
                            </Button>
                        </div>
                    </div>
                </div>
    );
};

export default SubjectCard;
