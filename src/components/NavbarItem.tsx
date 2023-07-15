import React from 'react';
import Link from 'next/link';
import styles from '@styles/Header.module.scss';

type NavBarItemProps = {
  key: string;
  path: string;
  text: string;
  setIsOpen?: any;
  location?: string;
};

function NavbarItem({
  path,
  text,
  setIsOpen,
  location,
}: NavBarItemProps){
  const actualPath = location === path || false;

  if(setIsOpen) {
    return(
      <Link href={path} passHref>
        <a 
          className={styles.headerNavbarLink}
          onClick={() => setIsOpen(false)}
        >
          <li>{text}</li>
        </a>
      </Link>
    )
  }

  return(
    <Link href={path} passHref>
      <a 
        className={`
          ${styles.headerNavbarLink}
          ${actualPath ? styles.headerNavbarLinkFocused : null}
        `}
      >
        <li>{text}</li>
      </a>
    </Link>
  )
}

export default NavbarItem;