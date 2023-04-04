import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import Link from 'next/link';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | RIMA LAND</title>
        <meta name="description" content="404 page not found" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Link href="/">
          <h1>RIMA LAND</h1>
        </Link>
      </header>

      <div className={styles.wrapper}>
        <section className={styles.custom404Container}>
          <h2 className={styles.title}>
            <Image
              src="/404.png"
              width={200}
              height={30}
              alt="404 page not found"
              priority
            />
          </h2>
          <p className={styles.text}>
            <span>SORRY…</span>
            お探しのページが見つかりませんでした。
            <br />
            URLが変更されているか、もしくはページが存在しません。
          </p>
          <div className={styles.buttonRightArrow}>
            <Link href="/">Keep browsing</Link>
          </div>
        </section>
      </div>

      <footer>
        <ul role="list">
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
                property
              />
            </a>
          </li>
          <li>
            <Link href="/disclamer">Disclaimer</Link>
          </li>
        </ul>
        <small>© 2023 RIMA LAND</small>
      </footer>
    </>
  );
}
