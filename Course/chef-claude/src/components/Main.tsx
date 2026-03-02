export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                
            </ul>
        </main>
    )
}