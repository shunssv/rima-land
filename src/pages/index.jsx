import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import mainVisual from '@/assets/home-mv.svg';
import Link from 'next/link';
import { youtube01, youtube02, youtube03, learnHerMore } from '@/assets/';

export default function Home() {
  return (
    <>
      <Head>
        <title>WELCOME TO RIMA LAND</title>
        <meta name="description" content="WELCOME TO RIMA LAND" />
      </Head>
      <div className={styles.mainVisualContainer}>
        <Image
          src={mainVisual}
          alt="Welcome to RIMA LAND"
          sizes="100vw"
          className={styles.mainVisual}
          priority
        />
        <div className={styles.mainVisualIntroduction}>
          <p className={styles.text}>RIMA LANDはNiziU RIMAファンサイトです。</p>
          <p className={styles.text}>WithUにて運営しております。</p>
        </div>
      </div>

      <section className="learnHerMoreContainer">
        <h2 className="title">
          <Image
            src={learnHerMore}
            alt="Learn her more here"
            sizes="100vw"
            priority
          />
        </h2>
        <ul className={styles.youtubeList} role="list">
          <li>
            <a href="https://youtu.be/hHVcOjdQrhs" target="_blank">
              <Image
                src={youtube01}
                alt="[NiziU LOG] #33 ミニゲームセンター"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/WXY0uGNi-IA" target="_blank">
              <Image
                src={youtube02}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/7FzqKhvgmVY" target="_blank">
              <Image
                src={youtube03}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/hHVcOjdQrhs" target="_blank">
              <Image
                src={youtube01}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/WXY0uGNi-IA" target="_blank">
              <Image
                src={youtube02}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/7FzqKhvgmVY" target="_blank">
              <Image
                src={youtube03}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/hHVcOjdQrhs" target="_blank">
              <Image
                src={youtube01}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/WXY0uGNi-IA" target="_blank">
              <Image
                src={youtube02}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
          <li>
            <a href="https://youtu.be/7FzqKhvgmVY" target="_blank">
              <Image
                src={youtube03}
                sizes="100vw"
                alt="[NiziU LOG] #33 ミニゲームセンター"
                priority
              />
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
