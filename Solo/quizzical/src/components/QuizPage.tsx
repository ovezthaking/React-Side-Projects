import { useEffect, useState } from "react";
import Question from "./Question";
import { getQuestions } from "../utils/quizUtils";
import type { questionType } from "../lib/types";
import { Loader2 } from "lucide-react";

export default function QuizPage() {
    const [questions, setQuestions] = useState<questionType[] | never[]>([])

    useEffect(() => {
        const questionsState = async () => {
            setQuestions(await getQuestions())
        }
        questionsState()
    }, [])

    return (
        <>
            {questions.length > 0 && questions ?
                <section className="flex flex-col items-center w-5xl pt-12 px-10 md:w-3xl">
                    {questions.map((question: questionType, index: number) => (
                        <Question
                            key={index}
                            question={question.question}
                            answers={question.answers}
                            correct={question.correct}
                        />
                    ))}
                    <div className="mt-7">
                        <button className="btn-seconary">Check answers</button>
                    </div>
                </section>
            : <p className="absolute top-[50%] animate-spin"><Loader2 /></p>}
        </>
    )
}