import { render, screen } from '@testing-library/react';
import React from 'react';
import NavbarItem from '@components/NavbarItem';

describe('NavbarItem component', () => {
  const props = {
    key: '/about-0',
    path: '/about',
    text: 'About',
    setIsOpen: 'false',
    location: '/about',
  };

  it('should render a link element', () => {
    render(<NavbarItem {...props}/>);
    const linkElement = screen.getByText(props.text);
    expect(linkElement).toBeInTheDocument();
  })
})