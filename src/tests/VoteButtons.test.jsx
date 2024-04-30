import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import VoteButtons from '../atoms/VoteButtons';


test("click on button", () => {
    const mockFunction = jest.fn()
    render(<VoteButtons onClick={mockFunction}/>)
    const btn = screen.getByText("2");
    fireEvent.click(btn);
    expect(mockFunction).toHaveBeenCalledTimes(1);
})