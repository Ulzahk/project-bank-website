import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '@pages/About';

describe('About page', () => {
  it('renders a header', () => {
    render(<About/>)
    const headerElement = screen.getByText(/About/i);
    expect(headerElement).toBeInTheDocument();
  })
})