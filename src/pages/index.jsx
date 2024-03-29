import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import {
  mainVisual,
  learnHerMore,
  niziu,
  withu,
  official,
  rimania,
  whoRima,
  is,
  wheelBackground,
  wheelItemInternational,
  wheelItemArtist,
  wheelItemRapper,
  wheelItemPhotogenic,
  wheelItemFoodie,
  rimaIsLovelyRoof,
  rimaIsLovely,
  rimaIsLovelyBecause,
} from '@/assets/';
import BlackCheckeredPattern from '@/components/BlackCheckeredPattern';
import YoutubeList from '@/components/YoutubeList';
import RimaProfile from '@/components/RimaProfile';
import OfficialSNSList from '@/components/OfficialSNSList';
import RimaIsLovelyItems from '@/components/RimaIsLovelyItems';
import RedCheckeredPattern from '@/components/RedCheckeredPattern';
import FlippedRedCheckeredPattern from '@/components/FlippedRedCheckeredPattern';

const HEADINFO = {
  title: 'WELCOME TO RIMA LAND｜RIMA LAND（リマランド）｜NiziU RIMA非公式ファンサイト',
  description: 'NiziU RIMA非公式ファンサイト リマランド（RIMA LAND）。NiziUのRIMAをたくさんの方に知ってほしい想いからファン（WithU）にてサイトを開設。デジタルからRIMAを応援しています。',
  image: 'ogp.png'
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{HEADINFO.title}</title>
        <meta name="description" content={HEADINFO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_VERCEL_URL} />
        <meta property="og:title" content={HEADINFO.title} />
        <meta property="og:description" content={HEADINFO.description} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_VERCEL_URL}/${HEADINFO.image}`} />
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
          <p className={styles.text}>
            本サイトはNiziU RIMA非公式ファンサイトです。
          </p>
          <p className={styles.text}>WithUにて運営しております。</p>
        </div>
      </div>

      <section className={styles.whoRimaIsContainer}>
        <h2 className={styles.title}>
          <Image
            src={whoRima}
            alt="WHO RIMA"
            sizes="100vw"
            className={styles.titleWhoRimaImage}
            priority
          />
          <Image
            src={is}
            alt="is..."
            sizes="100vw"
            className={styles.titleIsImage}
            priority
          />
        </h2>
        <figure className={styles.wheel}>
          <Image
            src={wheelBackground}
            alt="wheel background"
            sizes="100vw"
            className={styles.wheelBackground}
            priority
          />
          <Image
            src={wheelItemArtist}
            alt="Artist"
            sizes="100vw"
            className={`${styles.wheelItemImage} ${styles.artist}`}
            priority
          />
          <Image
            src={wheelItemRapper}
            alt="Rapper"
            sizes="100vw"
            className={`${styles.wheelItemImage} ${styles.rapper}`}
            priority
          />
          <Image
            src={wheelItemInternational}
            alt="International"
            sizes="100vw"
            className={`${styles.wheelItemImage} ${styles.international}`}
            priority
          />
          <Image
            src={wheelItemFoodie}
            alt="Foodie"
            sizes="100vw"
            className={`${styles.wheelItemImage} ${styles.foodie}`}
            priority
          />
          <Image
            src={wheelItemPhotogenic}
            alt="Photogenic"
            sizes="100vw"
            className={`${styles.wheelItemImage} ${styles.photogenic}`}
            priority
          />
        </figure>
        <div className={styles.rimaInformation}>
          <p>
            ソニーミュージック・JYP合同オーディションプロジェクト「Nizi
            Project」より1万人の中から選ばれ構成されたガールズグループ「NiziU」のメンバーの一人。
          </p>
          <p>
            RIMAは主にラップを担当。時にラップを作詞する本格派。また、日本語と英語、韓国語が堪能で世界へ発信する要となっています。
          </p>
          <RimaProfile />
        </div>
      </section>

      <RedCheckeredPattern />

      <section className={styles.rimaIsLovelyContainer}>
        <div className={styles.roofWrapper}>
          <Image
            src={rimaIsLovelyRoof}
            alt="roof image"
            sizes="100vw"
            className={styles.rimaIsLovelyRoof}
            priority
          />
          <Image
            src={rimaIsLovelyBecause}
            alt="because image"
            sizes="100vw"
            className={styles.rimaIsLovelyBecause}
            priority
          />
          <Image
            src={rimaIsLovely}
            alt="RIMA is weird but LOVELY"
            sizes="100vw"
            className={styles.rimaIsLovely}
            priority
          />
        </div>
        <RimaIsLovelyItems />
      </section>

      <BlackCheckeredPattern />

      <section className={styles.rimaniaContainer}>
        <h2 className={styles.title}>
          <Image
            src={rimania}
            alt="Rimania!"
            sizes="100vw"
            className={styles.titleImage}
            priority
          />
        </h2>
        <div className={styles.rimaniaMainContent}>
          <p>ただいま開発中...</p>
        </div>
      </section>

      <FlippedRedCheckeredPattern />

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
        <YoutubeList />
      </section>

      <BlackCheckeredPattern />

      <section className={styles.officialContainer}>
        <h2 className={styles.title}>
          <Image
            src={official}
            alt="Official"
            sizes="100vw"
            className={styles.titleImage}
            priority
          />
        </h2>
        <div className={styles.officialListContainer}>
          <ul className={styles.officialSiteList} role="list">
            <li className={styles.listItem}>
              <a href="https://niziu.com" target="_blank" rel="noopener">
                <Image
                  src={niziu}
                  alt="NiziU Official Website"
                  sizes="100vw"
                  className={styles.officialImage}
                  priority
                />
              </a>
            </li>
            <li className={styles.listItem}>
              <a href="https://fc.niziu.com" target="_blank" rel="noopener">
                <Image
                  src={withu}
                  alt="NiziU OFFICIAL FANCLUB WithU"
                  sizes="100vw"
                  className={styles.officialImage}
                  priority
                />
              </a>
            </li>
          </ul>
          <OfficialSNSList />
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
