import React from 'react';
import { render } from '@testing-library/react';
import Services from '@pages/services';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/services',
  }),
}));

describe('Services page', () => {
  it('renders a section element', () => {
    const { container } = render(<Services />);
    const sectionElement = container.getElementsByClassName('Services');
    expect(sectionElement.length).toBe(1);
  });
});
