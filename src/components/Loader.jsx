import Image from 'next/image';
import styles from './Loader.module.scss';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={`${styles.loaderContainer} ${inter.className}`}>
          <div className={styles.inner}>
            <Image
              src="/loader.svg"
              alt="Loading"
              width={60}
              height={20}
              priority
              className={styles.image}
            />
            <p className={styles.text}>Loading...</p>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.loaderContainer} ${inter.className} animate__animated animate__fadeOut animate__slow`}
        >
          <div
            className={`${styles.inner} animate__animated animate__fadeOut animate__faster`}
          >
            <Image
              src="/loader.svg"
              alt="Loading"
              width={60}
              height={20}
              priority
              className={styles.image}
            />
            <p className={styles.text}>Loading...</p>
          </div>
        </div>
      )}
    </>
  );
}
