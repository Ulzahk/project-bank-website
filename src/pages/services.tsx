import React from 'react';
import Layout from '@components/Layout';
import styles from '@styles/services.module.scss';
import ServicesSavingsAccount from '@images/services-savings-account.png';
import ServiceItemCard, {
  ServiceItemCardProps,
} from '@components/ServiceItemCard/ServiceItemCard';

interface ServicesTypeSection {
  id: string;
  typeTitle: string;
  typeCollection: ServiceItemCardProps[];
}

function Services() {
  const data = [
    {
      id: '1',
      typeTitle: 'Accounts',
      typeCollection: [
        {
          id: '1',
          href: 'savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
        {
          id: '2',
          href: 'savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
        {
          id: '2',
          href: 'savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
        {
          id: '2',
          href: 'savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
        {
          id: '2',
          href: 'savings-account',
          imageAlt: 'A Woman in Plaid Blazer Using Her Laptop',
          imageSrc: ServicesSavingsAccount.src,
          contentTitle: 'Savings Account',
          contentDescription:
            'Start building a strong financial foundation today with our Savings Account and embrace a future filled with possibilities.',
          ctaText: 'Learn More',
        },
        {
          id: '2',
          href: 'savings-account',
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
      id: '2',
      typeTitle: 'Cards',
      typeCollection: [
        {
          id: '1',
          href: 'cards',
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
      id: '3',
      typeTitle: 'Credits',
      typeCollection: [
        {
          id: '1',
          href: 'creadits',
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
        {data.map((record: ServicesTypeSection, index: number) => (
          <div
            key={`${index}-${record.id}`}
            className={styles.ServicesTypeSection}>
            <h2 className={styles.ServicesTypeTitle}>{record.typeTitle}</h2>
            <div className={styles.ServicesTypeCollectionWrapper}>
              {record.typeCollection.map((serviceDetails, index: number) => {
                return (
                  <ServiceItemCard
                    key={`${index}-${serviceDetails.id}`}
                    {...serviceDetails}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}

export default Services;
