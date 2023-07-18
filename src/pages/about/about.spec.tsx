import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './about';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/About',
  }),
}));

describe('About page', () => {
  it('renders a header', () => {
    render(<About/>)
    const headerElement = screen.getByRole('heading', {name: /About/i});
    expect(headerElement).toBeInTheDocument();
  })
})