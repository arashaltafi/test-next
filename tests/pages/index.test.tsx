import HomePage from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('HomePage', () => {
    it('renders the homepage with a heading', () => {
        render(<HomePage />);
        const heading = screen.getByRole('heading', { name: /welcome to next\.js v15 sample/i });
        expect(heading).toBeInTheDocument();
    });
});