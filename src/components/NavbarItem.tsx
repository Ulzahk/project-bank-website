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
        <div 
          className={styles.headerNavbarLink}
          onClick={() => setIsOpen(false)}
        >
          <li>{text}</li>
        </div>
      </Link>
    )
  }

  return(
    <Link href={path} passHref>
      <div 
        className={`
          ${styles.headerNavbarLink}
          ${actualPath ? styles.headerNavbarLinkFocused : null}
        `}
      >
        <li>{text}</li>
      </div>
    </Link>
  )
}

export default NavbarItem;