import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Custom404.module.scss';
import { Layout } from '@/components/Layout';
import titleImage from '@/assets/404.svg';
import ButtonArrowRight from '@/components/ButtonArrowRight';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page not found｜RIMA LAND（リマランド）｜NiziU RIMA非公式ファンサイト</title>
        <meta name="description" content="NiziU RIMA非公式ファンサイト リマランド（RIMA LAND）。NiziUのRIMAをたくさんの方に知ってほしい想いからファン（WithU）にてサイトを開設。デジタルからRIMAを応援しています。お探しのページが見つかりませんでした。" />
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
