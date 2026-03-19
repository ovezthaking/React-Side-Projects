import { decode } from "he"

interface resultType {
    question: string,
    correct_answer: string,
    incorrect_answers: Array<string>
}

export const getQuestions = async () => {
    try {
        const res = await fetch('https://opentdb.com/api.php?amount=5')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        
        const data = await res.json()
        
        const questionsArray = data.results.map((result: resultType) => {
            const question = decode(result.question)
            const correctAnswer = decode(result.correct_answer)
            const answers = [correctAnswer, ...result.incorrect_answers.map((ans) => decode(ans))]

            return {
                question,
                answers: shuffleArray(answers),
                correct: correctAnswer
            }
        })
        
        return questionsArray
    } catch (err) {
        console.error('Error getting questions: ', err)
    }
}

function shuffleArray(array: Array<unknown>) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array
}