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
            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredients.map(ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    ))}
                </ul>
                {ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>}
        </main>
    )
}