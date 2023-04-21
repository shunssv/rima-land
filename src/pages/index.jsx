import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import mainVisual from '@/assets/home-mv.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>WELCOME TO RIMA LAND</title>
        <meta name="description" content="WELCOME TO RIMA LAND" />
      </Head>
      <div className={styles.mainVisualContainer}>
        <Image src={mainVisual} alt="Welcome to RIMA LAND" sizes="100vw" className={styles.mainVisual} priority /> 
        <div className={styles.mainVisualIntroduction}>
          <p className={styles.text}>
            RIMA LANDはNiziU RIMAファンサイトです。 
          </p>
          <p className={styles.text}>
            WithUにて運営しております。
          </p>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
