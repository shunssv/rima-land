import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import Link from 'next/link';
import BlackCheckeredPattern from '@/components/BlackCheckeredPattern';
import {
  mainVisual,
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
            alt=""
            sizes="100vw"
            className={styles.wheelBackground}
            priority
          />
          <Image
            src={wheelItemInternational}
            alt="International"
            sizes="100vw"
            className={`${styles.wheelItemImage} ${styles.international}`}
            priority
          />
        </figure>
        <div className={styles.rimaInformation}>
          <p>
            ソニーミュージック・JYP合同オーディションプロジェクト「Nizi
            Project」より1万人の中から選ばれ構成されたガールズグループ「NiziU」のメンバーの一人。
          </p>
          <p>
            RIMAは主にラップを担当。時にラップを作詞する本格派。
            また、日本語と英語、韓国語が堪能で世界へ発信する要となっています。
          </p>
          <div className={styles.rimaProfile}>
            <dl className={styles.profileItem}>
              <dt className={styles.profileBadge}>NAME</dt>
              <dd className={styles.profileDetail}>RIMA NAKABAYASHI</dd>
            </dl>
            <dl className={styles.profileItem}>
              <dt className={styles.profileBadge}>COLOR</dt>
              <dd className={styles.profileDetail}>PANTONE® 200C</dd>
            </dl>
            <dl className={styles.profileItem}>
              <dt className={styles.profileBadge}>GREETING</dt>
              <dd className={styles.profileDetail}>NiziUの魅力的なボイス</dd>
            </dl>
            <dl className={styles.profileItem}>
              <dt className={styles.profileBadge}>BORN</dt>
              <dd className={styles.profileDetail}>March 26th, 2004</dd>
            </dl>
            <dl className={styles.profileItem}>
              <dt className={styles.profileBadge}>NIZOO*</dt>
              <dd className={styles.profileDetail}>
                Llanu<span>*NiziU Official Characters</span>
              </dd>
            </dl>
          </div>
        </div>
      </section>

      <section className={styles.rimaIsLovelyContainer}></section>

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

      <div className={styles.redCheckeredPatternContainer}>
        <Image
          src={redCheckeredPattern}
          alt=""
          sizes="100vw"
          className={`${styles.redCheckeredPattern} ${styles.isFlip}`}
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
            <li>
              <a
                href="https://www.instagram.com/niziu_info_official/"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={instagram}
                  alt="NiziU @niziu_info_official | Instagram"
                  sizes="100vw"
                  className={styles.snsImage}
                  priority
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@niziu_official"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={tiktok}
                  alt="NiziU @niziu_official | Tiktok"
                  sizes="100vw"
                  className={styles.snsImage}
                  priority
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/NiziU__official"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={twitter}
                  alt="NiziU @NiziU__official | Twitter"
                  sizes="100vw"
                  className={styles.snsImage}
                  priority
                />
              </a>
            </li>
            <li>
              <a href="https://lin.ee/XNJHkof" target="_blank" rel="noopener">
                <Image
                  src={line}
                  alt="NiziU Official | LINE"
                  sizes="100vw"
                  className={styles.snsImage}
                  priority
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/NiziUinfoofficial"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src={facebook}
                  alt="NiziU Official | facebook"
                  sizes="100vw"
                  className={styles.snsImage}
                  priority
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
