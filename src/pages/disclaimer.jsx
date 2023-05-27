import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Disclaimer.module.scss';
import Link from 'next/link';
import { Layout } from '@/components/Layout';
import titleImage from '@/assets/disclaimer.svg';


export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | RIMA LAND</title>
        <meta name="description" content="Disclaimer" />
      </Head>

      <section className={styles.disclaimerContainer}>
        
        <nav aria-label="breadcrumb">
          <ol className={styles.breadcrumb} role="list">
            <li className={styles.breadcrumbItem}>
              <Link href="/">HOME</Link>
            </li>
            <li className={styles.breadcrumbItem}>Disclaimer</li>
          </ol>
        </nav>

        <h2 className={styles.title}>
          <Image
            src={titleImage}
            alt="Disclaimer"
            className={styles.titleImage}
            sizes="100vw"
            priority
          />
        </h2>

        <p className={styles.introduction}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてい</p>

        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>免責事項見出しが入ります</dt>
          <dd className={styles.detail}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章</dd>
          <dd className={styles.detail}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章</dd>
        </dl>

        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>免責事項見出しが入ります</dt>
          <dd className={styles.detail}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章</dd>
        </dl>
        
        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>免責事項見出しが入ります</dt>
          <dd className={styles.detail}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章</dd>
        </dl>
        
        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>免責事項見出しが入ります</dt>
          <dd className={styles.detail}>この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章</dd>
        </dl>
        
        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>Googleアナリティクスについて</dt>
          <dd className={styles.detail}>
            当サイトでは、より良いサービスの提供とサイトの使いやすさ向上を目的として、サイト利用状況のトラフィックデータ収集と解析のために「Google アナリティクス」を使用しています。<br />
            Google アナリティクスは、トラフィックデータの収集のためにCookieを使用しています。Cookieを通じて得たトラフィックデータは個人を特定するものではありません。<br />
            収集されたトラフィックデータはGoogleのプライバシーポリシーにおいて管理されます。<br />
            <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener">https://policies.google.com/technologies/partner-sites?hl=ja</a></dd>
        </dl>
        
      </section>
    </>
  );
}

Disclaimer.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
