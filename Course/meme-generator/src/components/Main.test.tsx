import { expect, test, describe } from 'vitest'
import Main from './Main'
import { render, screen } from '@testing-library/react'

describe('Main', () => {
    test('displays top and bottom text on the image', () => {
        render(<Main />)

        expect(screen.getByText('One does not simply')).toBeInTheDocument()
        expect(screen.getByText('Walk into Mordor')).toBeInTheDocument()
    })

    test('displays meme', () => {
        render(<Main />)

        const meme = screen.getByRole('img') as HTMLImageElement

        expect(meme.src).toBe('https://i.imgflip.com/1bij.jpg')
    })

    test('displays input labels text', () => {
        render(<Main />)

        expect(screen.getByText('Top Text')).toBeInTheDocument()
        expect(screen.getByText('Bottom Text')).toBeInTheDocument()
    })

    test('displays placeholder inputs text', () => {
        render(<Main />)

        expect(screen.getByPlaceholderText('One does not simply')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Walk into Mordor')).toBeInTheDocument()
    })

    test('displays button text', () => {
        render(<Main />)

        expect(screen.getByRole('button').textContent).toBe('Get a new meme image 🖼')
    })
})
