import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/about',
  }),
}));

describe('Footer component', () =>{
  it('renders Footer component', () => {
    render(<Footer/>);

    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument();

    const logoImage = screen.getByAltText('Nexus Unity Bank logo');
    expect(logoImage).toBeInTheDocument();

    const creditLink = screen.getByTestId('credit-link');
    expect(creditLink).toBeInTheDocument();
  })
})