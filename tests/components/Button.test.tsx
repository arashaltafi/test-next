import Button from '@/components/Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button component', () => {
    it('renders with label and responds to click', () => {
        const handleClick = jest.fn();
        render(<Button label="Test Button" onClick={handleClick} />);
        const button = screen.getByRole('button', { name: /test button/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});