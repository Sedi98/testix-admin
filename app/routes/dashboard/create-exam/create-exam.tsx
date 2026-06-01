import { useState } from "react"
import { ExamCreateLayout } from "~/components/dashboard/create-exam/ExamCreateLayout"
import { ExamParametersForm } from "~/components/dashboard/create-exam/ExamParametersForm"
import {
  ExamQuestionsActions,
  ExamQuestionsBuilder,
} from "~/components/dashboard/create-exam/ExamQuestionsBuilder"
import { ExamSummaryStep } from "~/components/dashboard/create-exam/ExamSummaryStep"

type CreateExamScreen = "parameters" | "summary" | "questions"

export default function CreateExamPage() {
  const [screen, setScreen] = useState<CreateExamScreen>("parameters")
  const isQuestionStep = screen !== "parameters"

  return (
    <ExamCreateLayout
      step={isQuestionStep ? "questions" : "parameters"}
      subtitle="İmtahan parametrlərini daxil edin"
      actions={screen === "questions" ? <ExamQuestionsActions /> : undefined}
      onBack={
        isQuestionStep
          ? () => setScreen(screen === "questions" ? "summary" : "parameters")
          : undefined
      }
    >
      {screen === "parameters" && (
        <ExamParametersForm onContinue={() => setScreen("summary")} />
      )}
      {screen === "summary" && (
        <ExamSummaryStep onAddQuestion={() => setScreen("questions")} />
      )}
      {screen === "questions" && <ExamQuestionsBuilder />}
    </ExamCreateLayout>
  )
}
