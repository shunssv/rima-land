import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | RIMA LAND</title>
        <meta name="description" content="404 page not found" />
      </Head>

      <Header />

      <div className={styles.wrapper}>
        <section className={styles.custom404Container}>
          <h2 className={styles.title}>
            <Image
              src="/404.svg"
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
            <MdArrowForwardIos className={styles.icon} />
          </Link>
        </section>
      </div>

      <Footer />
    </>
  );
}
