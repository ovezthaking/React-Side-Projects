type LandingPageProps = {
    handleStart: () => void
}

export default function LandingPage({ handleStart }: LandingPageProps) {


    return (
        <section className="flex flex-col justify-center items-center min-h-screen gap-3.5">
            <h1 className="font-heading font-bold text-4xl text-[#293264]">Quizzical</h1>
            <p className="font-sans text-[#293264] font-normal">Wanna try your knowledge?</p>
            <button
                className="mt-4 font-sans rounded-2xl text-[#F5F7FB] bg-[#4D5B9E] py-3 px-14 font-medium cursor-pointer"
                onClick={handleStart}
            >
                Start Quiz
            </button>
        </section>
    )
}