import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header, { GeneralHeader, MobileHeader } from './Header';

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/about',
  }),
}));

describe('Header component', () => {
  it('renders the GeneralHeader and MobileHeader components', () => {
    render(<Header />);
    const generalHeader = screen.getByTestId('general-header');
    const mobileHeader = screen.getByTestId('mobile-header');

    expect(generalHeader).toBeInTheDocument();
    expect(mobileHeader).toBeInTheDocument();
  });
});

describe('GeneralHeader component', () => {
  jest.mock('./Header', () => ({
    HEADER_ROUTES_DICTIONARY: [
      { path: '/about', text: 'About' },
      { path: '/services', text: 'Services' },
      { path: '/contact-info', text: 'Contact Info' },
    ],
  }));

  it('renders the GeneralHeader correctly', () => {
    const location = '/about';
    render(<GeneralHeader location={location} />);

    const generalHeader = screen.getByTestId('general-header');
    expect(generalHeader).toBeInTheDocument();

    const logoImage = screen.getByAltText('Nexus Unity Bank logo');
    expect(logoImage).toBeInTheDocument();

    const logoTitle = screen.getByText('Nexus Unity Bank');
    expect(logoTitle).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    const servicesLink = screen.getByText('Services');
    const contactInfoLink = screen.getByText('Contact Info');

    expect(aboutLink).toBeInTheDocument();
    expect(servicesLink).toBeInTheDocument();
    expect(contactInfoLink).toBeInTheDocument();
  });
});

describe('MobileHeader component', () => {
  jest.mock('./Header', () => ({
    HEADER_ROUTES_DICTIONARY: [
      { path: '/about', text: 'About' },
      { path: '/services', text: 'Services' },
      { path: '/contact-info', text: 'Contact Info' },
    ],
  }));

  it('renders the MobileHeader correctly', () => {
    const setIsOpenMock = jest.fn();
    const isOpen = true;
    const location = '/about';

    render(<MobileHeader location={location} isOpen={isOpen} setIsOpen={setIsOpenMock} />);

    const mobileHeader = screen.getByTestId('mobile-header');
    expect(mobileHeader).toBeInTheDocument();

    const logoImage = screen.getByAltText('Nexus Unity Bank logo');
    expect(logoImage).toBeInTheDocument();

    const logoTitle = screen.getByText('Nexus Unity Bank');
    expect(logoTitle).toBeInTheDocument();

    const menuIcon = screen.getByAltText('Mobile header close menu icon');
    expect(menuIcon).toBeInTheDocument();

    fireEvent.click(menuIcon);
    expect(setIsOpenMock).toHaveBeenCalled();
  });

  describe('when isOpen=false', () => {
    it('renders the MobileHeader correctly', () => {
      const setIsOpenMock = jest.fn();
      const isOpen = false;
      const location = '/about';
  
      render(<MobileHeader location={location} isOpen={isOpen} setIsOpen={setIsOpenMock} />);
  
      const mobileHeader = screen.getByTestId('mobile-header');
      expect(mobileHeader).toBeInTheDocument();
  
      const logoImage = screen.getByAltText('Nexus Unity Bank logo');
      expect(logoImage).toBeInTheDocument();
  
      const logoTitle = screen.getByText('Nexus Unity Bank');
      expect(logoTitle).toBeInTheDocument();
  
      const menuIcon = screen.getByAltText('Mobile header menu icon');
      expect(menuIcon).toBeInTheDocument();
  
      fireEvent.click(menuIcon);
      expect(setIsOpenMock).toHaveBeenCalled();
    });
  })
});