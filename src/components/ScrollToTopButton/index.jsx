import styles from './ScrollToTopButton.module.scss';
import Link from 'next/link';
import { useCallback } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

export function ScrollToTopButton() {
  const handleClick = useCallback((e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Link  ink href="#" className={`${styles.scrollToTop} ${styles.appear}`} onClick={handleClick}>
      <IoIosArrowDropupCircle className={styles.icon} />
    </Link>
  );
}
