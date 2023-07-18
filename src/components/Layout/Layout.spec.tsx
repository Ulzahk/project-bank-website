import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Layout component', () => {
  it('renders a header and a footer', () => {
    useRouter.mockImplementationOnce(() => ({
      route: '/'
    }))

    render(<Layout />);
    const headerElement = screen.getByText(/About/i);
    const footerElement = screen.getByText(/Bank Name/i);
    expect(headerElement).toBeInTheDocument();
    expect(footerElement).toBeInTheDocument();
  });
});