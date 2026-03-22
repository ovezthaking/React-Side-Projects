import clsx from 'clsx'

interface questionProps {
    question: string
    answers: Array<string>
    correct: string
    isChecked: boolean,
    selectedAnswer: string | null
    onSelectAnswer: (answer: string) => void
}

export default function Question(
    { question, answers, correct, isChecked, selectedAnswer, onSelectAnswer }: questionProps
) {
    return (
        <div className="w-full border-b-2 border-b-[#DBDEF0] my-5">
            <h2 className="text-[#293264] font-heading font-bold text-xl mb-5">{question}</h2>
            <div className="flex gap-5 mb-5">
                {answers.map((ans, index) => {
                    // <label htmlFor={ans} className="answer hover:bg-[#889cfc]" key={index}>
                    //     {ans}
                    //     <input type="radio" name="answer" id={ans} value={ans} className="hidden" />
                    // </label>

                    const tailwindClasses = 'answer hover:bg-[#889cfc] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#F5F7FB]'
                    const buttonClassName = clsx(tailwindClasses, {
                        correct: ans === correct && isChecked,
                        incorrect: ans === selectedAnswer && isChecked && ans !== correct,
                        selected: !isChecked && ans === selectedAnswer
                    })


                    return (
                        <button
                            key={index}
                            value={ans}
                            className={buttonClassName}
                            disabled={isChecked}
                            onClick={() => onSelectAnswer(ans)}
                        >
                            {ans}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}