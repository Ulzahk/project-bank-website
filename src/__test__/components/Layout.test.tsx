import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from '@components/Layout';

describe('Layout component', () => {
  it('renders a header', () => {
    render(<Layout />);
    const headerElement = screen.getByText(/Layout/i);
    expect(headerElement).toBeInTheDocument();
  });
});