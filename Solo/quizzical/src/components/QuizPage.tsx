import Question from "./Question";

export default function QuizPage() {
    return (
        <section className="flex flex-col items-center w-5xl pt-12 px-10 md:w-3xl">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <div className="mt-7">
                <button className="btn-seconary">Check answers</button>
            </div>
        </section>
    )
}