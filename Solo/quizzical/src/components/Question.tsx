export default function Question() {
    return (
        <div className="w-full">
            <h2 className="text-[#293264] font-heading font-bold text-xl">This is a question, please answer</h2>
            <div>
                <label htmlFor="answer1">
                    Answer1
                    <input type="radio" name="answer" id="answer1" className="hidden" />
                </label>
                <label htmlFor="answer2">
                    Answer2
                    <input type="radio" name="answer" id="answer2" className="hidden" />
                </label>
                <label htmlFor="answer3">
                    Answer3
                    <input type="radio" name="answer" id="answer3" className="hidden" />
                </label>
                <label htmlFor="answer4">
                    Answer4
                    <input type="radio" name="answer" id="answer4" className="hidden" />
                </label>
            </div>
        </div>
    )
}