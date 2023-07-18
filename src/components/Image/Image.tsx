import React from 'react';
import styles from './Image.module.scss'

type ImageProps = {
  alt: string;
  src: string;
  className: string;
}

function Image({
  alt = '',
  src,
  className,
}: ImageProps){
  return(
    <img
      alt={alt}
      src={src}
      className={styles[className]}
    />
  );
}

export default Image;