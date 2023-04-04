import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import Link from 'next/link';
import { MdOutlineArrowRight } from 'react-icons/md';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | RIMA LAND</title>
        <meta name="description" content="404 page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.headerContainer}>
        <Link href="/">
          <h1>Rima Land</h1>
        </Link>
      </header>

      <div className={styles.wrapper}>
        <section className={styles.custom404Container}>
          <h2 className={styles.title}>
            <Image
              src="/404.png"
              width={120}
              height={78}
              alt="404 page not found"
              className={styles.titleImage}
              priority
            />
          </h2>
          <p className={styles.text}>
            <span>SORRY…</span>
            お探しのページが見つかりませんでした。
            <br />
            URLが変更されているか、もしくはページが存在しません。
          </p>
          <Link href="/" className={styles.buttonArrowRight}>
            Keep browsing
            <MdOutlineArrowRight className={styles.icon} />
          </Link>
        </section>
      </div>

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
    </>
  );
}
