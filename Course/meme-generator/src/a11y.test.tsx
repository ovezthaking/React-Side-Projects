import { test, expect, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('a11y', () => {
    test('ensures troll face image is accesible', () => {
        render(<App />)

        expect(screen.getByAltText('Troll face logo')).toBeInTheDocument()
    })

    test('ensures meme image is accesible', () => {
        render(<App />)

        expect(screen.getByAltText('One Does Not Simply')).toBeInTheDocument()
    })
})