import { render, screen } from '@testing-library/react';
import React from 'react';
import ServiceItemCard from './ServiceItemCard';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/services',
  }),
}));

describe('ServiceItemCard component', () => {
  it('renders ServiceItemCard component', () => {
    const mockProps = {
      href: '',
      imageAlt: '',
      imageSrc: '',
      contentTitle: '',
      contentDescription: '',
      ctaText: '',
    };

    render(<ServiceItemCard {...mockProps} />);

    const component = screen.getByTestId('service-item-card');
    expect(component).toBeInTheDocument();
  });
});
