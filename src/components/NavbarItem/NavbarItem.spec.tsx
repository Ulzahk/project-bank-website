import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NavbarItem from './NavbarItem';

describe('NavbarItem component', () => {
  const defaultProps = {
    key: '/path-0',
    path: '/path',
    text: 'Test Link',
  };

  it('renders a link without setIsOpen prop', () => {
    const { getByRole } = render(<NavbarItem {...defaultProps} />);
    const linkElement = getByRole('link');

    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveAttribute('href', '/path');
    expect(linkElement).toHaveClass('NavbarItemLink');
    expect(linkElement).not.toHaveClass('NavbarItemLinkFocused');
  });

  it('renders a link with setIsOpen prop', () => {
    const setIsOpenMock = jest.fn();
    const { getByRole } = render(<NavbarItem {...defaultProps} setIsOpen={setIsOpenMock} />);
    const linkElement = getByRole('link');

    expect(linkElement.tagName).toBe('A');
    expect(linkElement).toHaveClass('NavbarItemLink');
    expect(linkElement).not.toHaveClass('NavbarItemLinkFocused');

    fireEvent.click(linkElement);
    expect(setIsOpenMock).toHaveBeenCalledTimes(1);
    expect(setIsOpenMock).toHaveBeenCalled();
  });

  it('renders a link with actualPath true', () => {
    const { getByRole } = render(<NavbarItem {...defaultProps} location="/path" />);
    const linkElement = getByRole('link');

    expect(linkElement).toHaveClass('NavbarItemLinkFocused');
  });
});
