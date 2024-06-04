import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Disclaimer.module.scss';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import titleImage from '@/assets/disclaimer.svg';

const HEADINFO = {
  title: 'リマニア！｜Rimania!｜RIMA LAND（リマランド）｜NiziU RIMA非公式ファンサイト',
  description: 'NiziU RIMA非公式ファンサイト リマランド（RIMA LAND）。NiziUのRIMAをたくさんの方に知ってほしい想いからファン（WithU）にてサイトを開設。デジタルからRIMAを応援しています。クイズゲームリマニアの紹介ページです。',
  image: 'ogp.png'
}

export default function Rimania() {
  return (
    <>
      <Head>
        <title>{HEADINFO.title}</title>
        <meta name="description" content={HEADINFO.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_VERCEL_URL} />
        <meta property="og:title" content={HEADINFO.title} />
        <meta property="og:description" content={HEADINFO.description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${HEADINFO.image}`} />
      </Head>

      <section className={styles.disclaimerContainer}>
        
        <nav aria-label="breadcrumb">
          <ol className={styles.breadcrumb} role="list">
            <li className={styles.breadcrumbItem}>
              <Link href="/">HOME</Link>
            </li>
            <li className={styles.breadcrumbItem}>Rimania!</li>
          </ol>
        </nav>

        <h2 className={styles.title}>
          Rimania!
        </h2>

        <p className={styles.introduction}>
          リマニア！の概要が入ります。
        </p>
        
      </section>
    </>
  );
}

Rimania.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
