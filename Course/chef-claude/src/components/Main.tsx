import { useEffect, useRef, useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "../utils/ai"

export default function Main() {
    const [ingredients, setIngredients] = useState<Array<string>>([])
    // const [recipeShown, setRecipeShown] = useState<boolean>(false)
    const [recipe, setRecipe] = useState<string>('')
    const recipeSection = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(recipe !== '' && recipeSection.current !== null)
            recipeSection.current.scrollIntoView({behavior: 'smooth'})
    }, [recipe])
    
    const addIngredient = (formData: FormData): void => {
        const newIngredient = formData.get('ingredient')
        if(newIngredient && typeof newIngredient === 'string' && !ingredients.includes(newIngredient)) {
            setIngredients(prevIng => [...prevIng, newIngredient])
        }
        console.log(ingredients)
    }

    // const toggleRecipeShown = (): void => {
    //     setRecipeShown(prevState => !prevState)
    // }

    const getRecipe = async (): Promise<void> => {
        const recipeContent = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeContent)
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

            {ingredients.length > 0 && <IngredientsList ref={recipeSection} onClick={getRecipe} ingredients={ingredients}/>}

            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}
