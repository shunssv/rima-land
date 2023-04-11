import Image from 'next/image';
import styles from './Footer.module.scss';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <ul role="list" className={styles.footerLinkList}>
        <li>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/media-twitter-logo.svg"
              width={30}
              height={30}
              alt="Twitter"
              priority
            />
          </a>
        </li>
        <li>
          <Link href="/disclamer">Disclaimer</Link>
        </li>
      </ul>
      <small className={styles.copyRightText}>© 2023 RIMA LAND</small>
    </footer>
  );
}
