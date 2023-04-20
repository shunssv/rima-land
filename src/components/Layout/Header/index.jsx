import styles from './Header.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <h1 className={styles.logoWrapper}>
        <Link href="/">Rima Land</Link>
      </h1>
    </header>
  );
}
