import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Header component', () =>{
  useRouter.mockImplementationOnce(() => ({
    route: '/About'
  }))


  it('should render a nav element', () => {
    render(<Header/>);
    const navElement = screen.getByText(/About/i);
    expect(navElement).toBeInTheDocument();
  })
})