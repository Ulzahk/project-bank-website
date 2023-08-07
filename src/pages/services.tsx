import React from 'react';
import Layout from '@components/Layout';
import styles from '@styles/services.module.scss';
import ServicesSavingsAccount from '@images/services-savings-account.png';
import ServiceItemCard, {
  ServiceItemCardProps,
} from '@/components/ServiceItemCard/ServiceItemCard';

interface ServicesTypeSection {
  typeTitle: string;
  typeCollection: ServiceItemCardProps[];
}

function Services() {
  const data = [
    {
      typeTitle: 'Accounts',
      typeCollection: [
        {
          href: '/savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
        {
          href: '/savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
      ],
    },
    {
      typeTitle: 'Cards',
      typeCollection: [
        {
          href: '/cards',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
      ],
    },
    {
      typeTitle: 'Credits',
      typeCollection: [
        {
          href: '/cards',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
      ],
    },
  ];

  return (
    <Layout>
      <section className={styles.Services}>
        {data.map((record: ServicesTypeSection) => (
          <div className={styles.ServicesTypeSection}>
            <h2 className={styles.ServicesTypeTitle}>{record.typeTitle}</h2>
            <div className={styles.ServicesTypeCollectionWrapper}>
              {record.typeCollection.map(serviceDetails => (
                <ServiceItemCard {...serviceDetails} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default Services;
