import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '@pages/404';

describe('404 Not Found page', () => {
  it('renders a header', () => {
    render(<NotFound />);
    const headerElement = screen.getByText(/Not Found/i);
    expect(headerElement).toBeInTheDocument();
  });
});
