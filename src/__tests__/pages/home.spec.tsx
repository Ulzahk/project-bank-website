import React from 'react';
import { render } from '@testing-library/react';
import Home from '@pages/home';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
  }),
}));

describe('Home page', () => {
  it('renders a section element', () => {
    const { container } = render(<Home />);
    const sectionElement = container.getElementsByClassName('Home');
    expect(sectionElement.length).toBe(1);
  });
});