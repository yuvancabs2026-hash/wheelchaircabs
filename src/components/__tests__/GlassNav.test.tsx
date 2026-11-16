// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import GlassNav from '../GlassNav';
// import { getGlobalData } from '@/lib/data';

// const navData = getGlobalData().nav;

// describe('GlassNav Component', () => {
//     it('renders the brand name', () => {
//         render(<GlassNav data={navData} />);
//         expect(screen.getByText('WheelchairCabs')).toBeInTheDocument();
//     });

//     it('renders the configured tagline', () => {
//         render(<GlassNav data={navData} />);
//         expect(screen.getByText('by Click-N-Start')).toBeInTheDocument();
//     });

//     it('renders navigation links', () => {
//         render(<GlassNav data={navData} />);
//         expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
//         expect(screen.getAllByText('Services')[0]).toBeInTheDocument();
//         expect(screen.getAllByText('About')[0]).toBeInTheDocument();
//         expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
//     });

//     it('renders the driver status indicator', () => {
//         render(<GlassNav data={navData} />);
//         expect(screen.getAllByText('Driver Available')[0]).toBeInTheDocument();
//     });

//     it('uses a semantic <nav> element', () => {
//         const { container } = render(<GlassNav data={navData} />);
//         const nav = container.querySelector('nav');
//         expect(nav).toBeInTheDocument();
//     });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GlassNav from '../GlassNav';
import { getGlobalData } from '@/lib/data';

const navData = getGlobalData().nav;

describe('GlassNav Component', () => {
    it('renders the brand name', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getByText('WheelchairCabs')).toBeInTheDocument();
    });

    it('renders the configured tagline', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getByText('by Click-N-Start')).toBeInTheDocument();
    });

    it('links the tagline to the Click-N-Start website', () => {
        render(<GlassNav data={navData} />);
        const link = screen.getByText('by Click-N-Start').closest('a');
        expect(link).toHaveAttribute('href', 'https://clicknstart.in/');
    });

    it('renders navigation links', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Services')[0]).toBeInTheDocument();
        expect(screen.getAllByText('About')[0]).toBeInTheDocument();
        expect(screen.getAllByText('Contact')[0]).toBeInTheDocument();
    });

    it('renders the driver status indicator', () => {
        render(<GlassNav data={navData} />);
        expect(screen.getAllByText('Driver Available')[0]).toBeInTheDocument();
    });

    it('uses a semantic <nav> element', () => {
        const { container } = render(<GlassNav data={navData} />);
        const nav = container.querySelector('nav');
        expect(nav).toBeInTheDocument();
    });
});