import styles from './HomeHeader.module.scss';
import Link from 'next/link';
import { Noto_Sans_Mono } from 'next/font/google';
import { useInView } from 'react-intersection-observer';
import { ScrollToTopButton } from '@/components/ScrollToTopButton';

const NotoSansMono = Noto_Sans_Mono({ weight: '700', subsets: ['latin'] });

export function HomeHeader() {
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
