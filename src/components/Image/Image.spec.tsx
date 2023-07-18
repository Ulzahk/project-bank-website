import { render } from '@testing-library/react';
import React from 'react';
import Image from './Image';

describe('Image component', () =>{
  it('should render an img element', () => {
    const { getByAltText } = render(<Image alt='test' className='test' src='https://example.com'/>);
    expect(getByAltText('test')).toBeDefined();
  })
})