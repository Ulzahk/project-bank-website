import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarItem from '@components/NavbarItem';
import Image from 'next/image'
import NexusUnityBankLogo from '@images/nexus-unity-bank-logo.png';
import MobileMenuIcon from '@icons/mobile-menu-icon.png';
import MobileCloseMenuIcon from '@icons/mobile-close-menu-icon.png';
import styles from './Header.module.scss'

type HeaderProps = {
  location: string;
  isOpen?: boolean;
  setIsOpen?: Function;
}


function Header(){
  const location = useRouter().asPath;
  const [isOpen, setIsOpen]= useState<boolean>(false);

  return(
    <>
    <GeneralHeader
      location={location}
    />
    <MobileHeader
      location={location}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
    </>
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


export function GeneralHeader({
  location,
}: HeaderProps){
  return(
    <header data-testid="general-header" className={styles.Header}>
      <div className={styles.HeaderWrapper}>
        <Link href="/" passHref className={styles.HeaderLink}>
            <div className={styles.HeaderLogo}>
            <Image 
              alt='Nexus Unity Bank logo'
              src={NexusUnityBankLogo.src}
              className={styles.HeaderLogoImage}
              width={50}
              height={50}
            />
              <p className={styles.HeaderLogoTitle}>Nexus Unity Bank</p>
            </div>
        </Link>
        <nav className={styles.HeaderNavbar}>
          <ul className={styles.HeaderNavbarList}>
            {HEADER_ROUTES_DICTIONARY.map((route, index) => (
              <NavbarItem
                key={`${route.text}-${index}`}
                path={route.path}
                text={route.text}
                location={location}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function MobileHeader({
  isOpen,
  setIsOpen,
}: HeaderProps){
  return(
    <div data-testid="mobile-header" className={styles.MobileHeader}>
    <div
      className={styles.MobileHeaderWrapper}
    >
      <Link href="/" passHref className={styles.MobileHeaderLink}>
        <div className={styles.MobileHeaderLogo}>
          <Image 
            alt='Nexus Unity Bank logo'
            src={NexusUnityBankLogo.src}
            className={styles.MobileHeaderLogoImage}
            width={50}
            height={50}
          />
          <p className={styles.MobileHeaderLogoTitle}>Nexus Unity Bank</p>
        </div>
      </Link>
      <div className={styles.MobileHeaderMenu}>
        {isOpen ? (
          <Image 
            alt='Mobile header close menu icon'
            src={MobileCloseMenuIcon.src}
            className={styles.MobileHeaderMenuIcon}
            width={50}
            height={50}
            onClick={() => {
              if(setIsOpen){
                setIsOpen(false)
              }
            }}
          />
        ) : (
          <Image 
            alt='Mobile header menu icon'
            src={MobileMenuIcon.src}
            className={styles.MobileHeaderMenuIcon}
            width={50}
            height={50}
            onClick={() => {
              if(setIsOpen){
                setIsOpen(true)
              }
            }}
          />
        )}
      </div>
    </div>
    <nav
      className={`${styles.MobileHeaderNavbar} ${
        isOpen ? styles.MobileHeaderNavbarOpen : null
      }`}
    >
      <ul
        className={styles.MobileHeaderNavbarList
        }
      >
        {HEADER_ROUTES_DICTIONARY.map((route, index) => (
          <NavbarItem
            key={`${route.text}-${index}`}
            path={route.path}
            text={route.text}
            setIsOpen={setIsOpen}
          />
        ))}
      </ul>
    </nav>
  </div>
  )
}

export default Header;