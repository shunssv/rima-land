import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';
import { Layout } from '@/components/Layout';
import titleImage from '@/assets/404.svg';
import ButtonArrowRight from '@/components/ButtonArrowRight';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found | RIMA LAND</title>
        <meta name="description" content="404 page not found" />
      </Head>

      <section className={styles.custom404Container}>
        <h2 className={styles.title}>
          <Image
            src={titleImage}
            alt="404 page not found"
            className={styles.titleImage}
            sizes="100vw"
            priority
          />
        </h2>
        <p className={styles.text}>
          <span>SORRY…</span>
          お探しのページが見つかりませんでした。
          <br />
          URLが変更されているか、もしくはページが存在しません。
        </p>
        <ButtonArrowRight url="/" text="Keep browsing" />
      </section>
    </>
  );
}

Custom404.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
