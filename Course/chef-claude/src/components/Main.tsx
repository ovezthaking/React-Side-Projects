import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main() {
    const [ingredients, setIngredients] = useState<Array<string>>([])
    const [recipeShown, setRecipeShown] = useState<boolean>(false)

    const addIngredient = (formData: FormData): void => {
        const newIngredient = formData.get('ingredient')
        if(newIngredient && typeof newIngredient === 'string') {
            setIngredients(prevIng => [...prevIng, newIngredient])
        }
        console.log(ingredients)
    }

    const toggleRecipeShown = (): void => {
        setRecipeShown(prevState => !prevState)
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

            {ingredients.length > 0 && <IngredientsList onClick={toggleRecipeShown} ingredients={ingredients}/>}

            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}