import { expect, test, describe } from 'vitest'
import Main from './Main'
import { render, screen } from '@testing-library/react'

describe('Main', () => {
    test('displays top and bottom text', () => {
        render(<Main />)

        expect(screen.getByText('One does not simply')).toBeInTheDocument()
        expect(screen.getByText('Walk into Mordor')).toBeInTheDocument()
    })

    test('displays meme', () => {
        render(<Main />)

        const meme = screen.getByRole('img') as HTMLImageElement

        expect(meme.src).toBe('https://i.imgflip.com/1bij.jpg')
    })
})
