import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { IoCloseCircleSharp } from 'react-icons/io5';
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
  youtube05,
} from '@/assets/';
import BlackCheckeredPattern from '@/components/BlackCheckeredPattern';
import YoutubeList from '@/components/YoutubeList';
import RimaProfile from '@/components/RimaProfile';
import OfficialSNSList from '@/components/OfficialSNSList';
import RimaIsLovelyItems from '@/components/RimaIsLovelyItems';
import RedCheckeredPattern from '@/components/RedCheckeredPattern';
import FlippedRedCheckeredPattern from '@/components/FlippedRedCheckeredPattern';

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
          <p>COMING SOON!</p>
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
        <div className={styles.youtubeModalWindowContainer}>
          <figure className={styles.youtubeModalWindowCloseWrapper}>
            <IoCloseCircleSharp className={styles.youtubeModalWindowClose} />
          </figure>
          <div className={styles.youtubeModalWindow}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BqB_eWydtrI"
              title="YouTube video  player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className={styles.youtubeContent}
            ></iframe>
          </div>
        </div>
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
