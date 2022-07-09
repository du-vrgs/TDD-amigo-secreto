import { render, screen } from "@testing-library/react"
import Cabecalho from "."


describe('quando o Cabecalho é renderizado', () => {

    test('deve estar no documento', () => {

        render(<Cabecalho />)

        const cabecalho = screen.getByTestId('cabecalho')

        expect(cabecalho).toBeInTheDocument()
    })
})