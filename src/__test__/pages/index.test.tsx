import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@pages/index';

describe('Home page', () => {
  it('renders a header', () => {
    render(<Home />);
    const headerElement = screen.getByText(/Home/i);
    expect(headerElement).toBeInTheDocument();
  });
});