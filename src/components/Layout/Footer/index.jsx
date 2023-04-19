import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

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
          <Link href="/disclaimer">Disclaimer</Link>
        </li>
      </ul>
      <small className={styles.copyRightText}>© 2023 RIMA LAND</small>
    </footer>
  );
}