import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_MAIN_PATH } from '@utils/Constants';
import styles from './ServiceItemCard.module.scss';

interface ServiceItemCardProps {
  href: string;
  imageAlt: string;
  imageSrc: string;
  contentTitle: string;
  contentDescription: string;
  ctaText: string;
}

function ServiceItemCard({
  href,
  imageAlt,
  imageSrc,
  contentTitle,
  contentDescription,
  ctaText,
}: ServiceItemCardProps) {
  return (
    <Link
      data-testid="service-item-card"
      className={styles.ServiceItemCard}
      href={{
        pathname: `/${SERVICES_MAIN_PATH}/${href}`,
      }}
      passHref>
      <div className={styles.ServiceItemCardImageWrapper}>
        <Image
          alt={imageAlt}
          src={imageSrc}
          className={styles.ServiceItemCardImage}
          width={50}
          height={50}
        />
      </div>
      <div className={styles.ServiceItemCardContentWrapper}>
        <p className={styles.ServiceItemCardContentTitle}>{contentTitle}</p>
        <p className={styles.ServiceItemCardContentDescription}>
          {contentDescription}
        </p>
      </div>
      <div className={styles.ServiceItemCardCtaWrapper}>
        <p className={styles.ServiceItemCardCta}>{ctaText}</p>
      </div>
    </Link>
  );
}

export default ServiceItemCard;
