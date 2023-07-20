import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '@pages/about';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/About',
  }),
}));

describe('About page', () => {
  it('renders a section element', () => {
    const { container } = render(<About/>)
    const sectionElement = container.getElementsByClassName('About');
    expect(sectionElement.length).toBe(1);
  })
})