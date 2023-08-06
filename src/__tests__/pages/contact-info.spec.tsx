import React from 'react';
import { render } from '@testing-library/react';
import ContactInfo from '@pages/contact-info';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/contact-info',
  }),
}));

describe('Contact Info page', () => {
  it('renders a section element', () => {
    const { container } = render(<ContactInfo />);
    const sectionElement = container.getElementsByClassName('ContactInfo');
    expect(sectionElement.length).toBe(1);
  });
});
