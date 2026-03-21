import { useEffect, useState } from "react";
import Question from "./Question";
import { getQuestions } from "../utils/quizUtils";
import type { questionType } from "../lib/types";

export default function QuizPage() {
    const [questions, setQuestions] = useState<questionType[] | never[]>([])

    useEffect(() => {
        const questionsState = async () => {
            setQuestions(await getQuestions())
        }
        questionsState()
    }, [])

    return (
        <section className="flex flex-col items-center w-5xl pt-12 px-10 md:w-3xl">
            {questions.map((question: questionType, index: number) => (
                <Question key={index} question={question.question} answers={question.answers} />
            ))}
            <div className="mt-7">
                <button className="btn-seconary">Check answers</button>
            </div>
        </section>
    )
}