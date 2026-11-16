import { render, screen } from '@testing-library/react';
import ChennaiPage from '@/app/chennai/page';

describe('Chennai landing page', () => {
    it('renders the city-specific wheelchair taxi booking form and trip highlights', () => {
        render(<ChennaiPage />);

        expect(screen.getByRole('heading', { name: 'Wheelchair Taxi in Chennai' })).toBeInTheDocument();
        expect(screen.getByLabelText('Full Name *')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('e.g., Adyar, Chennai')).toBeInTheDocument();
        expect(screen.getByText('Dialysis & treatment')).toBeInTheDocument();
        expect(screen.getByText('Airport transfers')).toBeInTheDocument();
    });
});
