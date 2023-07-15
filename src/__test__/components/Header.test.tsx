import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from '@components/Header';

describe('Header component', () =>{
  it('should render a header', () => {
    render(<Header/>);
    const headerElement = screen.getByText(/Header/i);
    expect(headerElement).toBeInTheDocument();
  })
})