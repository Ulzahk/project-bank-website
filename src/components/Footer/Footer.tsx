import { format } from 'date-fns';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import NexusUnityBankLogo from '@images/nexus-unity-bank-logo.png';

import styles from './Footer.module.scss';

function Footer(){
  const footerContent = {
    text: `Website Developed By Ulzahk`,
    link: `https://ulzahk.com/`,
    actualYear: format(new Date(), 'yyyy')
  };

  return (
    <footer data-testid="footer" className={styles.Footer}>
      <div className={styles.FooterWrapper}>
      <Link href="/" passHref className={styles.FooterLink}>
          <div className={styles.FooterLogo}>
          <Image 
            alt='Nexus Unity Bank logo'
            src={NexusUnityBankLogo.src}
            className={styles.FooterLogoImage}
            width={50}
            height={50}
          />
            <p className={styles.FooterLogoTitle}>Nexus Unity Bank</p>
          </div>
      </Link>
      <ul className={styles.FooterList}>
        <li className={styles.FooterListItem}>
          <a
            data-testid="credit-link"
            href={footerContent.link}
            target='_blank'
            className={styles.FooterListItemLink}
          >
            {`${footerContent.actualYear} ${footerContent.text} `}
          </a>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;