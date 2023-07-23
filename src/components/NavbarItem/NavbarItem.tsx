import React from 'react';
import Link from 'next/link';
import styles from './NavbarItem.module.scss';

type NavBarItemProps = {
  key: string;
  path: string;
  text: string;
  setIsOpen?: any;
  location?: string;
};

function NavbarItem({ path, text, setIsOpen, location }: NavBarItemProps) {
  const actualPath = location === path || false;

  if (setIsOpen) {
    return (
      <Link
        href={path}
        passHref
        className={styles.NavbarItemLink}
        onClick={() => setIsOpen(false)}
      >
        <div className={styles.NavbarItemLink} onClick={() => setIsOpen(false)}>
          <li>{text}</li>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={path}
      passHref
      className={`
        ${styles.NavbarItemLink}
        ${actualPath ? styles.NavbarItemLinkFocused : null}
      `}
    >
      <li>{text}</li>
    </Link>
  );
}

export default NavbarItem;
