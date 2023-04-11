import styles from './Header.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <h1>Rima Land</h1>
      </Link>
    </header>
  );
}
