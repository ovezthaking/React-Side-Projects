import { test, expect, describe } from 'vitest'
import { userEvent } from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
    test('Updates the top text', async () => {
        const user = userEvent.setup()
        render(<App />)

        const topTextbox = screen.getAllByRole('textbox')[0]

        await user.clear(topTextbox)
        await user.type(topTextbox, 'A coder does not simply')

        expect(screen.getByText('A coder does not simply')).toBeInTheDocument()
    })

    test('Updates the bottom text', async () => {
        const user = userEvent.setup()
        render(<App />)

        const bottomTextbox = screen.getAllByRole('textbox')[1]

        await user.clear(bottomTextbox)
        await user.type(bottomTextbox, 'Code without coffee')

        expect(screen.getByText('Code without coffee')).toBeInTheDocument()
    })

    test('Gives new meme after click a button', async () => {
        const user = userEvent.setup()
        render(<App />)

        const button = screen.getByRole('button')

        await user.click(button)

        const meme = screen.getAllByRole('img')[1] as HTMLImageElement

        expect(meme.src).toBe('https://i.imgflip.com/1c1uej.jpg')
    })
})