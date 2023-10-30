import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import { Layout } from '@/components/Layout';
import titleImage from '@/assets/404.svg';
import ButtonArrowRight from '@/components/ButtonArrowRight';

const HEADINFO = {
  title: '404 page not found｜RIMA LAND（リマランド）｜NiziU RIMA非公式ファンサイト',
  description: 'NiziU RIMA非公式ファンサイト リマランド（RIMA LAND）。NiziUのRIMAをたくさんの方に知ってほしい想いからファン（WithU）にてサイトを開設。デジタルからRIMAを応援しています。お探しのページが見つかりませんでした。',
  image: 'ogp.png'
}

export default function Custom404() {
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
