import React from 'react';
import Layout from '@components/Layout';
import styles from './about.module.scss';
import AboutImage1 from '@images/about-image-1.png';



function About(){
  return(
    <Layout>
     <section className={styles.About}>
      <div className={styles.AboutCard}>
        <div className={styles.AboutCardImageWrapper}>
          <img 
            alt='group of 4 persons, two of them shaking hands'
            src={AboutImage1.src}
            className={styles.AboutCardImage}
          />
        </div>
        <div className={styles.AboutCardTextWrapper}>
          <h2 className={styles.AboutCardTextTitle}>Your Trusted Financial Partner</h2>
          <p>Welcome to [Bank Name], where your financial aspirations come to life.</p>
          <p>At [Bank Name], we understand that your financial well-being is of utmost importance. With over 10 years of experience in the industry, we have built a strong foundation based on trust, reliability, and personalized service. We take pride in being your trusted partner in achieving your financial goals.</p>
          <p>Our mission is to empower individuals, families, and businesses with the tools and resources they need to thrive. Whether you're a first-time account holder, a seasoned investor, or a business owner, we offer a wide range of innovative financial solutions tailored to meet your unique needs.</p>
        </div>
      </div>
      <div className={`${styles.AboutCard} ${styles.DarkBackground}`}>
        <div className={styles.AboutCardTextWrapper}>
          <h2 className={styles.AboutCardTextTitle}>Your Trusted Financial Partner</h2>
          <p>Welcome to [Bank Name], where your financial aspirations come to life.</p>
          <p>At [Bank Name], we understand that your financial well-being is of utmost importance. With over [number of years] years of experience in the industry, we have built a strong foundation based on trust, reliability, and personalized service. We take pride in being your trusted partner in achieving your financial goals.</p>
          <p>Our mission is to empower individuals, families, and businesses with the tools and resources they need to thrive. Whether you're a first-time account holder, a seasoned investor, or a business owner, we offer a wide range of innovative financial solutions tailored to meet your unique needs.</p>
        </div>
        <div className={styles.AboutCardImageWrapper}>
          <img 
            alt='group of 4 persons, two of them shaking hands'
            src={AboutImage1.src}
            className={styles.AboutCardImage}
          />
        </div>
      </div>
      <div className={styles.AboutCard}>
        <div className={styles.AboutCardImageWrapper}>
          <img 
            alt='group of 4 persons, two of them shaking hands'
            src={AboutImage1.src}
            className={styles.AboutCardImage}
          />
        </div>
        <div className={styles.AboutCardTextWrapper}>
          <h2 className={styles.AboutCardTextTitle}>Your Trusted Financial Partner</h2>
          <p>Welcome to [Bank Name], where your financial aspirations come to life.</p>
          <p>At [Bank Name], we understand that your financial well-being is of utmost importance. With over [number of years] years of experience in the industry, we have built a strong foundation based on trust, reliability, and personalized service. We take pride in being your trusted partner in achieving your financial goals.</p>
          <p>Our mission is to empower individuals, families, and businesses with the tools and resources they need to thrive. Whether you're a first-time account holder, a seasoned investor, or a business owner, we offer a wide range of innovative financial solutions tailored to meet your unique needs.</p>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default About;