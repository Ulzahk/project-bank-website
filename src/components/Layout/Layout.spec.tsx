import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/about',
  }),
}));

describe('Layout component', () => {
  it('renders a header and a footer', () => {
    const { container } = render(<Layout />);
    const headerElement = container.getElementsByClassName('Header');
    const footerElement = container.getElementsByClassName('Footer');
    expect(headerElement.length).toBe(1);
    expect(footerElement.length).toBe(1);
  });
});
