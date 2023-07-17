import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from './Layout.module.scss';

type LayoutProps = {
  children?: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return(
    <div className={styles.layout}>
      <Header/>
      { children }
      <Footer/>
    </div>
  )
}

export default Layout;