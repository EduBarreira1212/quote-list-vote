import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Quote from '../atoms/Quote';

test("Render Quote component", () => {
    render(<Quote>{{author: "name test", text: "text test", note: 10}}</Quote>)

    const pAuthor = screen.getByText("Author: name test");
    const pText = screen.getByText("Text: text test");
    const pNote = screen.getByText("Note: 10");

    expect(pAuthor).toBeInTheDocument();
    expect(pText).toBeInTheDocument();
    expect(pNote).toBeInTheDocument();
})