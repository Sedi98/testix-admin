import { Button } from "~/components/ui/button"
import ExamHeader from "~/components/admin/ExamHeader";
import ExamParameters from "./exam-parameters";

export default function Exams() {
    return (
        <div className="space-y-[9px]">
            <ExamHeader route="/exams">
                <h2>test</h2>
                <Button>Salam</Button>
            </ExamHeader>
            <ExamParameters />
        </div>
    )
}