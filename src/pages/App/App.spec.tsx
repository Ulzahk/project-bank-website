import { AppProps } from 'next/app';
import { render } from '@testing-library/react';
import { Router } from 'next/router';
import React from 'react';
import App from './App';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('App component', () => {
  it('renders the component and sets the document title', () => {
    const mockRouter = {
      pathname: '/',
      route: '/',
      query: {},
      asPath: '/',
    };

    const appProps: AppProps = {
      Component: () => <div>Mock Component</div>,
      pageProps: {},
      router: mockRouter as Router,
    };

    render(<App {...appProps} />);

    expect(document.title).toBe('Bank Name');
  });
});
