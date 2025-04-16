import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button';

describe('Button Component', () => {
  it('renders with the correct label and responds to clicks', () => {
    const handleClick = jest.fn();
    render(<Button label="Test Button" onClick={handleClick} />);
    
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});