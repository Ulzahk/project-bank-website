import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

import styles from './Footer.module.scss';

function Footer(){
  const footerText: string = `Bank Name `;
  const actualYear = format(new Date(), 'yyyy');
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <Link href="/" passHref>
          <div
            className={styles.footerListLink}
          >
            <li>{`${footerText} ${actualYear}`}</li>
          </div>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;