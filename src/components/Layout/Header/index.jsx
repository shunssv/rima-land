import { useInView } from 'react-intersection-observer';
import styles from './Header.module.scss';
import Link from 'next/link';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

export function Header() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <>
      <header className={styles.headerContainer} ref={ref}>
        <h1 className={styles.logoWrapper}>
          <Link href="/">Rima Land</Link>
        </h1>
      </header>
      {inView ? (
        <ScrollToTopButton />
      ) : (
        <ScrollToTopButton appear={styles.appear} />
      )}
    </>
  );
}
