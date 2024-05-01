import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import HeaderOrganisms from '../organisms/HeaderOrganisms';

describe("Header organism component", () => {
  test('renders header with correct text', () => {
    render(<HeaderOrganisms />);
    const paragraph = screen.getByText('Welcome to the quote list vote');
    const button = screen.getByText('Start voting');

    expect(paragraph).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
})