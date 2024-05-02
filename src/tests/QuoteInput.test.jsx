import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react'
import QuoteInput from "../organisms/QuoteInput"

describe("QuoteInput component", () => {
    test("render loading message", () => {
        render(<QuoteInput/>)
        const loading = screen.getByText("Loading ...")
        expect(loading).toBeInTheDocument();
    })
    test("render component", async () => {
        render(<QuoteInput/>);
        const button = await screen.findByText("Send")
        expect(button).toBeInTheDocument();
    })
})