import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';
import NavbarItem from '@components/NavbarItem';


function Header(){
  return(
    <div>
      <h1>Header</h1>
    </div>
  )
};

const HEADER_ROUTES_DICTIONARY = [
  {
    path: '/about',
    text: 'About',
  },
  {
    path: '/services',
    text: 'Services',
  },
  {
    path: '/contact-info',
    text: 'Contact Info'
  }
];

export default Header;