import React from 'react';
import { render } from '@testing-library/react';
import About from '@pages/about';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/about',
  }),
}));

describe('About page', () => {
  it('renders a section element', () => {
    const { container } = render(<About />);
    const sectionElement = container.getElementsByClassName('About');
    expect(sectionElement.length).toBe(1);
  });
});
