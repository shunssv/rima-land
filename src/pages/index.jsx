import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import BlackCheckeredPattern from '@/components/BlackCheckeredPattern';
import {
  mainVisual,
  learnHerMore,
  instagram,
  tiktok,
  twitter,
  line,
  facebook,
  niziu,
  withu,
  official,
  rimania,
  redCheckeredPattern,
  whoRima,
  is,
  wheelBackground,
  wheelItemInternational,
  wheelItemArtist,
  wheelItemRapper,
  wheelItemPhotogenic,
  wheelItemFoodie,
  rimaIsLovelyRoof,
  rimaIsLovelyCreative,
  rimaIsLovelyDiligent,
  rimaIsLovelyFriendly,
  rimaIsLovely,
  rimaIsLovelyBecause,
} from '@/assets/';
import YoutubeList from '@/components/YoutubeList';

const rimaProfileItems = [
  { badge: 'NAME', detail: 'RIMA' },
  { badge: 'COLOR', detail: 'PANTONE® 200C' },
  { badge: 'GREETING', detail: 'NiziUの魅力的なボイス' },
  { badge: 'BORN', detail: 'March 26th, 2004' },
  { badge: 'NIZOO*', detail: 'Llanu *NiziU Official Characters' },
];

const rimaIsLovelyItems = [
  {
    heading: rimaIsLovelyCreative,
    alt: 'Creative',
    description:
      'RIMAは他にはない独特な感性の持ち主。ラップを作詞するだけではなく、キャラクターを描いたり、独自の言語を作ったりとクリエイティブ。NiziUメンバーやWithUに発信して浸透させる力もあるのも彼女のすごいところ。',
  },
  {
    heading: rimaIsLovelyDiligent,
    alt: 'Diligent',
    description:
      '「ラップ」「美貌」だけではないのがRIMA。プライベートでは勉強にとても熱心に取り組んでいます。それはNIziUメンバーが評するほど。NiziUの活動や練習がある中、勉強に時間を割いているストイックな一面があります。',
  },
  {
    heading: rimaIsLovelyFriendly,
    alt: 'Friendly',
    description:
      '美貌の裏は甘えん坊で可愛らしいRIMA。人懐っこく、周りを笑顔にしてくれる性格です。怖がりで涙もろいところもあり、そんな意外性も人を惹き寄せていると思います。美と愛嬌の絶妙なギャップさがRIMAの一つの魅力。',
  },
];

const officialSNSaccounts = [
  {
    url: 'https://www.instagram.com/niziu_info_official/',
    img: instagram,
    alt: 'NiziU @niziu_info_official | Instagram',
  },
  {
    url: 'https://www.tiktok.com/@niziu_official',
    img: tiktok,
    alt: 'NiziU @niziu_official | Tiktok',
  },
  {
    url: 'https://twitter.com/NiziU__official',
    img: twitter,
    alt: 'NiziU @NiziU__official | Twitter',
  },
  { url: 'https://lin.ee/XNJHkof', img: line, alt: 'NiziU Official | LINE' },
  {
    url: 'https://www.facebook.com/NiziUinfoofficial',
    img: facebook,
    alt: 'NiziU Official | facebook',
  },
];

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
          <div className={styles.rimaProfile}>
            {rimaProfileItems.map((item, index) => {
              return (
                <dl className={styles.profileItem} key={index}>
                  <dt className={styles.profileBadge}>{item.badge}</dt>
                  <dd className={styles.profileDetail}>{item.detail}</dd>
                </dl>
              );
            })}
          </div>
        </div>
      </section>

      <div className={styles.redCheckeredPatternContainer}>
        <Image
          src={redCheckeredPattern}
          alt="Red checkered pattern image"
          sizes="100vw"
          className={`${styles.redCheckeredPattern}`}
          priority
        />
      </div>

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
        <div className={styles.rimaIsLovelyItemsContainer}>
          {rimaIsLovelyItems.map((item, index) => {
            return (
              <dl className={styles.rimaIsLovelyItem} key={index}>
                <dt>
                  <Image
                    src={item.heading}
                    alt={item.alt}
                    sizes="100vw"
                    className={styles.rimaIsLovelyItemImage}
                    priority
                  />
                </dt>
                <dd>{item.description}</dd>
              </dl>
            );
          })}
        </div>
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

      <div className={styles.redCheckeredPatternContainerIsFlip}>
        <Image
          src={redCheckeredPattern}
          alt="Red checkered pattern image"
          sizes="100vw"
          className={styles.redCheckeredPattern}
          priority
        />
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
          <ul className={styles.officialSNSList} role="list">
            {officialSNSaccounts.map((account, index) => {
              return (
                <li key={index}>
                  <a href={account.url} target="_blank" rel="noopener">
                    <Image
                      src={account.img}
                      alt={account.alt}
                      sizes="100vw"
                      className={styles.snsImage}
                      priority
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
