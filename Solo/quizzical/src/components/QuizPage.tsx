import Question from "./Question";

export default function QuizPage() {
    return (
        <section className="flex flex-col items-center w-5xl pt-12 px-10">
            <Question />

            <button className="btn-seconary">Check answers</button>
        </section>
    )
}