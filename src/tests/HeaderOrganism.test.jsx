import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Paragraph from '../atoms/Paragraph'

test("Render Paragraph", () => {
    render(<Paragraph>Hello</Paragraph>)

    const p = screen.getByText("Hello")

    expect(p).toBeInTheDocument();
})