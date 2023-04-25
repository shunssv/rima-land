import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import mainVisual from '@/assets/home-mv.svg';
import Link from 'next/link';
import {
  youtube01,
  youtube02,
  youtube03,
  youtube04,
  youtube05,
  youtube06,
  youtube07,
  youtube08,
  youtube09,
  learnHerMore,
} from '@/assets/';

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

      <section className={styles.learnHerMoreContainer}>
        <h2>
          <Image
            src={learnHerMore}
            alt="Learn her more here"
            sizes="100vw"
            className={styles.titleImage}
            priority
          />
        </h2>
        <ul className={styles.youtubeList} role="list">
          <li className={styles.item}>
            <a href="https://youtu.be/7FzqKhvgmVY" target="_blank">
              <span className={styles.itemBadge}>To.NiziU</span>
              <Image
                src={youtube01}
                alt="To.NiziU EP3 RIMA&NINA"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/WXY0uGNi-IA" target="_blank">
              <span className={styles.itemBadge}>Teaser</span>
              <Image
                src={youtube02}
                alt="NiziU 3rd Single『CLAP CLAP』 RIMA Solo Teaser"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/hHVcOjdQrhs" target="_blank">
              <span className={styles.itemBadge}>NiziU LOG</span>
              <Image
                src={youtube03}
                alt="[NiziU LOG] #33 ミニゲームセンター"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/nCjmXHsRJNY" target="_blank">
              <span className={styles.itemBadge}>MV</span>
              <Image
                src={youtube04}
                alt="NiziU(니쥬) 1st Album 「Chopstick」 MV"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/M6cfYVKldNk" target="_blank">
              <span className={styles.itemBadge}>NiziU LOG</span>
              <Image
                src={youtube05}
                alt="[NiziU LOG] #9 Tell us! RIMA"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/YrUEPI2Fu8E" target="_blank">
              <span className={styles.itemBadge}>NiziU LOG</span>
              <Image
                src={youtube06}
                alt="[NiziU LOG] NiziU School #1"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/zoPtbRE5d3c" target="_blank">
              <span className={styles.itemBadge}>NiziU LOG</span>
              <Image
                src={youtube07}
                alt="[NiziU LOG] #12 NiziUの休日"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/SFf7Hump8pQ" target="_blank">
              <span className={styles.itemBadge}>MV</span>
              <Image
                src={youtube08}
                alt="NiziU(니쥬) 5th Single「Paradise」M/V"
                sizes="100vw"
                priority
              />
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://youtu.be/YetOEQd8y5E" target="_blank">
              <span className={styles.itemBadge}>To.NiziU</span>
              <Image
                src={youtube09}
                alt="To.NiziU EP9 MAYUKA&RIMA"
                sizes="100vw"
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
