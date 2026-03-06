import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients 
that a user has and suggests a recipe they could make 
with some or all of those ingredients. You don't need 
to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't 
mention, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render 
to a web page
`

const anthropic = new Anthropic({
    apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
    dangerouslyAllowBrowser: true
})

export const getRecipeFromChefClaude = async (ingredientsArr: Array<string>) => {
    const ingredientString = ingredientsArr.join(', ')

    const msg = await anthropic.messages.create({
        model: "claude-sonnet-4-5-20250929",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [
            {
                role: 'user',
                content: `I have ${ingredientString}. Please give me a recipe you'd recommend I make!`
            },
        ]
    })

    const textBlock = msg.content.find(block => block.type === 'text');
    return textBlock && textBlock.type === 'text' ? textBlock.text : '';
}