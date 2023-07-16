import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '@components/Footer';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Footer component', () =>{
  it('should render a nav element', () => {
    useRouter.mockImplementationOnce(() => ({
      route: '/About'
    }))

    render(<Footer/>);
    const navElement = screen.getByText(/Bank Name/i);
    expect(navElement).toBeInTheDocument();
  })
})