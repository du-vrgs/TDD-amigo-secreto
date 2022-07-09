import { render, screen } from "@testing-library/react"
import Card from "."


describe('quando o Card é renderizado', () => {

    test('deve estar no documento', () => {

        render(<Card />)

        const cabecalho = screen.getByTestId('card')

        expect(cabecalho).toBeInTheDocument()
    })
})