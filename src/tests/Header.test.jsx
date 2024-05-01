import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react'
import Header from "../atoms/Header"

describe("header component", () => {
    test("render header", () => {
        render(<Header>test</Header>)
        const header = screen.getByText("test")
        expect(header).toBeInTheDocument()
    })
})