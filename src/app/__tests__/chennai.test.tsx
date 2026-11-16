import { render, screen } from '@testing-library/react';
import ChennaiPage from '@/app/chennai/page';

describe('Chennai landing page', () => {
    it('renders the city-specific wheelchair taxi booking form and trip highlights', () => {
        render(<ChennaiPage />);

        expect(screen.getByRole('heading', { name: 'Wheelchair Taxi in Chennai' })).toBeInTheDocument();
        expect(screen.getByLabelText('Pickup location')).toBeInTheDocument();
        expect(screen.getByLabelText('Dropoff location')).toBeInTheDocument();
        expect(screen.getByText('Dialysis & treatment')).toBeInTheDocument();
        expect(screen.getByText('Airport transfers')).toBeInTheDocument();
    });
});
