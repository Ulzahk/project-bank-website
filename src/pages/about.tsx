import React from 'react';
import Layout from '@components/Layout';
import AboutPartnership from '@images/about-partnership.jpg'
import AboutCustomerFocus from '@images/about-customer-focus.jpg';
import AboutCommunity from '@images/about-community.jpg';
import Image from 'next/image'
import styles from '@styles/about.module.scss';



function About(){
  return(
    <Layout>
     <section className={styles.About}>
      <div className={styles.AboutCard}>
        <div className={styles.AboutCardImageWrapper}>
          <Image 
            alt='group of 4 persons, two of them shaking hands'
            src={AboutPartnership.src}
            className={styles.AboutCardImage}
            width={640}
            height={427}
          />
        </div>
        <div className={styles.AboutCardTextWrapper}>
          <h2 className={styles.AboutCardTextTitle}>Your Trusted Financial Partner</h2>
          <p>Welcome to Nexus Unity Bank, where your financial aspirations come to life.</p>
          <p>At Nexus Unity Bank, we understand that your financial well-being is of utmost importance. With over 10 years of experience in the industry, we have built a strong foundation based on trust, reliability, and personalized service. We take pride in being your trusted partner in achieving your financial goals.</p>
          <p>Our mission is to empower individuals, families, and businesses with the tools and resources they need to thrive. Whether you are a first-time account holder, a seasoned investor, or a business owner, we offer a wide range of innovative financial solutions tailored to meet your unique needs.</p>
        </div>
      </div>
      <div className={`${styles.AboutCard} ${styles.DarkBackground}`}>
        <div className={styles.AboutCardTextWrapper}>
          <h2 className={styles.AboutCardTextTitle}>Why Choose Nexus Unity Bank? Here Is What Sets Us Apart</h2>
          <ul>
            <li><b>Integrity:</b> Trust is the cornerstone of everything we do. We conduct our business with unwavering integrity, transparency, and honesty. You can rely on us to always act in your best interests.</li>
            <li><b>Customer Focus:</b> You are at the heart of our organization. We listen, understand your needs, and provide tailored solutions to help you achieve your financial goals. Your success is our success.</li>
            <li><b>Excellence:</b> Striving for excellence is ingrained in our culture. We continually challenge ourselves to deliver superior banking services, innovative products, and an exceptional customer experience.</li>
          </ul>
        </div>
        <div className={styles.AboutCardImageWrapper}>
          <Image 
            alt='two women sitting chatting, one of them holding a gray laptop'
            src={AboutCustomerFocus.src}
            className={styles.AboutCardImage}
            width={640}
            height={427}
          />
        </div>
      </div>
      <div className={styles.AboutCard}>
        <div className={styles.AboutCardImageWrapper}>
          <Image 
            alt='group of persons sitting at the park in a sunny day'
            src={AboutCommunity.src}
            className={styles.AboutCardImage}
            width={640}
            height={427}
          />
        </div>
        <div className={styles.AboutCardTextWrapper}>
          <h2 className={styles.AboutCardTextTitle}>Community Commitment</h2>
          <p>We are deeply rooted in the communities we serve. Through various corporate social responsibility initiatives, we actively give back and contribute to the betterment of society. Together, we can make a positive impact on the lives of individuals and the community as a whole.</p>
          <p>At Nexus Unity Bank, your trust and satisfaction are our top priorities. We invite you to explore our website, visit our branches, or contact our dedicated customer service team to experience the Nexus Unity Bank difference firsthand.</p>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default About;