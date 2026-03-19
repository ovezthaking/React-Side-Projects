export default function Question() {
    

    const test = ['hola', 'answer2', 'answer3', 'answer4']

    return (
        <div className="w-full border-b-2 border-b-[#DBDEF0] my-5">
            <h2 className="text-[#293264] font-heading font-bold text-xl mb-5">This is a question, please answer</h2>
            <div className="flex gap-5 mb-5">
                {test.map((ans, index) => (
                    // <label htmlFor={ans} className="answer hover:bg-[#889cfc]" key={index}>
                    //     {ans}
                    //     <input type="radio" name="answer" id={ans} value={ans} className="hidden" />
                    // </label>
                    <button
                        key={index}
                        value={ans}
                        className="answer hover:bg-[#889cfc] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#F5F7FB]"
                    >
                        {ans}
                    </button>
                ))}
            </div>
        </div>
    )
}