import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import NavbarItem from '@components/NavbarItem';
import Image from '@components/Image';
import MobileMenuIcon from '@icons/mobile-menu-icon.png';
// import MobileCloseMenuIcon from '@icons/mobile-close-menu-icon.svg';
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
    {/* <MobileHeader
      location={location}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    /> */}
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


function GeneralHeader({
  location,
}: HeaderProps){
  const imageUrl = MobileMenuIcon;

  return(
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Link href="/" passHref>
        <div
            className={styles.headerLink}
          >
            <div className={styles.headerLogo}>
              <Image
                alt={'Test Image'}
                src={MobileMenuIcon.src}
                className='test'
              />
              <p className={styles.headerLogoImage}>BL</p>
              <p className={styles.headerLogoTitle}>Bank Logo</p>
            </div>
          </div>
        </Link>
        <nav className={styles.headerNavBar}>
          <ul className={styles.headerNavBarList}>
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

// function MobileHeader({
//   isOpen,
//   setIsOpen,
// }: HeaderProps){
//   return(
//     <div className={styles.mobileHeader}>
//     <div
//       className={styles.mobileHeaderWrapper}
//     >
//       <Link href="/" passHref>
//         <div
//           className={styles.mobileHeaderLink}
//         >
//           <div className={styles.mobileHeaderLogo}>
//             <p className={styles.mobileHeaderLogoImage}>BL</p>
//             <p className={styles.mobileHeaderLogoTitle}>Ulzahk</p>
//           </div>
//         </div>
//       </Link>
//       <div className={styles.mobileHeaderMenu}>
//         {isOpen ? (
//           <MobileCloseMenuIcon
//             className={styles.mobileHeaderMenuIcon}
//             onClick={() => {
//               if(setIsOpen){
//                 setIsOpen(false)
//               }
//             }}
//           />
//         ) : (
//           <MobileMenuIcon
//             className={ styles.mobileHeaderMenuIcon}
//             onClick={() => {
//               if(setIsOpen){
//                 setIsOpen(true)
//               }
//             }}
//           />
//         )}
//       </div>
//     </div>
//     <nav
//       className={`${styles.mobileHeaderNavBar} ${
//         isOpen ? styles.mobileHeaderNavBarOpen : null
//       }`}
//     >
//       <ul
//         className={styles.mobileHeaderNavBarList
//         }
//       >
//         {HEADER_ROUTES_DICTIONARY.map((route, index) => (
//           <NavbarItem
//             key={`${route.text}-${index}`}
//             path={route.path}
//             text={route.text}
//             setIsOpen={setIsOpen}
//           />
//         ))}
//       </ul>
//     </nav>
//   </div>
//   )
// }

export default Header;