import { render, screen } from '@testing-library/react';
import React from 'react';
import ServiceItemCard from './ServiceItemCard';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/services',
  }),
}));

describe('ServiceItemCard component', () => {
  const mockProps = {
    href: 'test-service',
    imageAlt: 'Test Service Image',
    imageSrc: '/test-image.png',
    contentTitle: 'Test Service Title',
    contentDescription: 'Test Service Description',
    ctaText: 'Learn More',
  };

  it('renders ServiceItemCard component', () => {
    render(<ServiceItemCard {...mockProps} />);

    const component = screen.getByTestId('service-item-card');
    expect(component).toBeInTheDocument();

    const image = screen.getByAltText('Test Service Image');
    expect(image).toBeInTheDocument();

    const title = screen.getByText('Test Service Title');
    expect(title).toBeInTheDocument();

    const description = screen.getByText('Test Service Description');
    expect(description).toBeInTheDocument();

    const ctaText = screen.getByText('Learn More');
    expect(ctaText).toBeInTheDocument();

    const arrowIcon = screen.getByAltText('Right navigation arrow icon');
    expect(arrowIcon).toBeInTheDocument();
  });

  it('redirects to the correct href when clicked', () => {
    render(<ServiceItemCard {...mockProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/services/test-service');
  });
});
