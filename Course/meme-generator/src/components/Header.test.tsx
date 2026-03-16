import { expect, test, describe } from 'vitest'
import Header from './Header'
import { render, screen } from '@testing-library/react'

describe('Header', () => {
    test('displays the app name', () => {
        render(<Header />)

        expect(screen.getByText('Meme Generator')).toBeInTheDocument()
    })

    test('displays the troll face', () => {
        render(<Header />)

        const trollFaceImage = screen.getByRole('img') as HTMLImageElement

        expect(trollFaceImage.src).toContain('troll-face.png')
    })
})