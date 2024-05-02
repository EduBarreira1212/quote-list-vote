import "@testing-library/jest-dom"
import { fireEvent, render, screen } from '@testing-library/react'
import QuoteInput from "../organisms/QuoteInput"

describe("QuoteInput component", () => {
    test("render component", async () => {
        render(<QuoteInput/>);
        const button = await screen.findByText("Send")
        expect(button).toBeInTheDocument();
    })
})