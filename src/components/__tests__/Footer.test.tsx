// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import Footer from '../Footer';
// import { getGlobalData } from '@/lib/data';

// // Mock next/image for test environment
// jest.mock('next/image', () => {
//     return function MockImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
//         // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
//         return <img {...props} />;
//     };
// });

// const footerData = getGlobalData().footer;

// describe('Footer Component', () => {
//     it('renders the brand name', () => {
//         render(<Footer data={footerData} />);
//         expect(screen.getByText('WheelchairCabs')).toBeInTheDocument();
//     });

//     it('renders the phone number', () => {
//         render(<Footer data={footerData} />);
//         expect(screen.getByText('+91 81058 25544')).toBeInTheDocument();
//     });

//     it('renders service area links', () => {
//         render(<Footer data={footerData} />);
//         expect(screen.getByText('Across Bangalore')).toBeInTheDocument();
//         expect(screen.getByText('Airport Transfers')).toBeInTheDocument();
//         expect(screen.getByText('Hospital Trips')).toBeInTheDocument();
//         expect(screen.getByText('Wheelchair Taxi in Chennai')).toBeInTheDocument();
//     });

//     it('renders footer column headings', () => {
//         render(<Footer data={footerData} />);
//         expect(screen.getByText('Areas We Serve')).toBeInTheDocument();
//         expect(screen.getByText('Company')).toBeInTheDocument();
//         expect(screen.getByText('Support')).toBeInTheDocument();
//     });

//     it('renders the copyright text', () => {
//         render(<Footer data={footerData} />);
//         expect(screen.getByText(/© 2026 WheelchairCabs Bengaluru/)).toBeInTheDocument();
//     });

//     it('uses a semantic <footer> element', () => {
//         const { container } = render(<Footer data={footerData} />);
//         const footer = container.querySelector('footer');
//         expect(footer).toBeInTheDocument();
//     });
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { getGlobalData } from '@/lib/data';

// Mock next/image for test environment
jest.mock('next/image', () => {
    return function MockImage(props: React.ImgHTMLAttributes<HTMLImageElement>) {
        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
        return <img {...props} />;
    };
});

const footerData = getGlobalData().footer;

describe('Footer Component', () => {
    it('renders the brand name', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('WheelchairCabs')).toBeInTheDocument();
    });

    it('renders the configured tagline', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText(footerData.tagline)).toBeInTheDocument();
    });

    it('links to the related Yuvan Cabs and Click-N-Start websites', () => {
        render(<Footer data={footerData} />);
        const yuvanLink = screen.getByRole('link', { name: 'Yuvan Cabs' });
        const clickNStartLink = screen.getByRole('link', { name: 'Website by Click-N-Start' });
        expect(yuvanLink).toHaveAttribute('href', 'https://yuvancabs.com/');
        expect(clickNStartLink).toHaveAttribute('href', 'https://clicknstart.in/');
        [yuvanLink, clickNStartLink].forEach((link) => {
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
        });
    });

    it('renders the phone number', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('+91 81058 25544')).toBeInTheDocument();
    });

    it('renders service area links', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('Bengaluru service areas')).toBeInTheDocument();
        expect(screen.getByText('Airport Transfers')).toBeInTheDocument();
        expect(screen.getByText('Manipal Hospital trips')).toBeInTheDocument();
        expect(screen.getByText('Wheelchair Taxi in Chennai')).toBeInTheDocument();
    });

    it('renders footer column headings', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText('Areas We Serve')).toBeInTheDocument();
        expect(screen.getByText('Company')).toBeInTheDocument();
        expect(screen.getByText('Support')).toBeInTheDocument();
    });

    it('renders the copyright text', () => {
        render(<Footer data={footerData} />);
        expect(screen.getByText(/© 2026 WheelchairCabs Bengaluru/)).toBeInTheDocument();
    });

    it('uses a semantic <footer> element', () => {
        const { container } = render(<Footer data={footerData} />);
        const footer = container.querySelector('footer');
        expect(footer).toBeInTheDocument();
    });
});