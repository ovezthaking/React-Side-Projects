import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState<Array<string>>([])

    const addIngredient = (formData: FormData) => {
        const newIngredient = formData.get('ingredient')
        if(newIngredient && typeof newIngredient === 'string') {
            setIngredients(prevIng => [...prevIng, newIngredient])
        }
        console.log(ingredients)
    }

    return (
        <main>
            <form className="add-ingredient-form" action={addIngredient}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </main>
    )
}