import { useEffect, useState } from "react";
import Question from "./Question";
import { getQuestions } from "../utils/quizUtils";
import type { questionType } from "../lib/types";
import { Loader2 } from "lucide-react";

export default function QuizPage() {
    const [questions, setQuestions] = useState<questionType[] | never[]>([])
    const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string | null}>({})
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [gameCount, setGameCount] = useState<number>(1)

    const correctNumber = questions.filter((question, index) =>
        selectedAnswers[index] === question.correct  
    ).length

    useEffect(() => {
        const questionsState = async () => {
            setQuestions(await getQuestions())
        }
        questionsState()
    }, [gameCount])

    const handleSelectedAnswer = (questionIndex: number, answer: string) => {
        setSelectedAnswers(prev => (
            {
                ...prev,
                [questionIndex]: answer
            }
        ))
    }

    const handleCheckAnswers = () => {
        setIsChecked(true)
    }

    const handlePlayAgain = () => {
        setQuestions([])
        setGameCount(prevCount => prevCount + 1)
        setIsChecked(false)
        setSelectedAnswers({})
    }

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
                            selectedAnswer={selectedAnswers[index] || null}
                            isChecked={isChecked}
                            onSelectAnswer={(answer: string) => handleSelectedAnswer(index, answer)}
                        />
                    ))}
                    <div className="mt-7 flex gap-5 justify-center items-center">
                        {isChecked ? 
                            <>
                                <p className="text-[#293264] font-bold">You scored {correctNumber}/5 correct answers</p> 
                                <button
                                    className="btn-seconary"
                                    onClick={handlePlayAgain}
                                >
                                    Play Again
                                </button>
                            </>
                            :
                            <button
                                className="btn-seconary"
                                disabled={isChecked}
                                onClick={handleCheckAnswers}
                            >
                                Check answers
                            </button>
                        }
                        
                    </div>
                </section>
            : <p className="absolute top-[50%] animate-spin"><Loader2 /></p>}
        </>
    )
}