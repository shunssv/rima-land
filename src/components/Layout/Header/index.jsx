import { useInView } from 'react-intersection-observer';
import styles from './Header.module.scss';
import Link from 'next/link';
import { Noto_Sans_Mono } from 'next/font/google';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const NotoSansMono = Noto_Sans_Mono({ weight: '700', subsets: ['latin'] });

export function Header() {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <>
      <header className={styles.headerContainer} ref={ref}>
        <h1 className={`${styles.logoWrapper} ${NotoSansMono.className}`}>
          <Link href="/">RIMA LAND</Link>
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
