import { useEffect, useState } from "react"

export default function Main() {
    type memeObjType = {imageUrl: string, topText: string, bottomText: string}

    const memeObj: memeObjType = {
        imageUrl: "https://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
    }

    const [meme, setMeme] = useState<memeObjType>(memeObj)
    const [allMemes, setAllMemes] = useState<{url: string}[]>([])

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(data => {
                console.log(data.data.memes)
                setAllMemes(data.data.memes)
            })
            .catch(e => console.error('Error: ', e))
    }, [])

    const getRandomMeme = (): void => {
        const randomIndex: number = Math.floor(Math.random() * allMemes.length)
        const newImageUrl: string = allMemes[randomIndex].url

        setMeme(prevMeme => (
            {
                ...prevMeme,
                imageUrl: newImageUrl
            }
        ))
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value, name} = e.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}