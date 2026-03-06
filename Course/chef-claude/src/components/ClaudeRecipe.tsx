import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe({recipe}: {recipe: string}) {
    return (
        <section className='suggested-recipe-container'>
            <ReactMarkdown>{recipe}</ReactMarkdown>
        </section>
    )
}