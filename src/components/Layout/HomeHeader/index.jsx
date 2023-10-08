import styles from './HomeHeader.module.scss';
import Link from 'next/link';
import { useCallback } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
import { useInView } from 'react-intersection-observer';

export function HomeHeader() {

  const [ref, inView] = useInView({
    threshold: 0,
  });

  const handleClick = useCallback((e) => {
    e.preventDefalt();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <header className={styles.headerContainer} ref={ref}>
        <h1 className={styles.logoWrapper}>
          <Link href="/">Rima Land</Link>
        </h1>
      </header>
      {inView ? (
        <Link href="#" className={styles.scrollToTop}>
          <IoIosArrowDropupCircle className={styles.icon} />
        </Link>
      ) : (
        <Link href="#" className={`${styles.scrollToTop} ${styles.appear}`} onClick={handleClick}>
          <IoIosArrowDropupCircle className={styles.icon} />
        </Link>
      )}
    </>
  );
}
