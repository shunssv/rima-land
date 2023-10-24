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
        <title>免責事項｜Disclaimer｜RIMA LAND（リマランド）｜NiziU RIMA非公式ファンサイト</title>
        <meta name="description" content="NiziU RIMA非公式ファンサイト リマランド（RIMA LAND）。NiziUのRIMAをたくさんの方に知ってほしい想いからファン（WithU）にてサイトを開設。デジタルからRIMAを応援しています。本サイトの免責事項について記載しております。" />
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

        <p className={styles.introduction}>
          本サイトの免責事項について記載しております。
        </p>

        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>免責事項</dt>
          <dd className={styles.detail}>当サイトのコンテンツについて、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。<br />
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</dd>
          <dd className={styles.detail}>当サイトからリンクやバナーなどによって他のサイトに移動した場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。</dd>
        </dl>

        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>著作権・肖像権</dt>
          <dd className={styles.detail}>当サイトで掲載しているすべてのコンテンツ（文章、画像、動画、音声、ファイル等）の著作権・肖像権等は当サイト所有者または各権利所有者が保有し、許可なく無断利用（転載、複製、譲渡、二次利用等）することを禁止します。また、コンテンツの内容を変形・変更・加筆修正することも一切認めておりません。</dd>
          <dd className={styles.detail}>各権利所有者におかれましては、万一掲載内容に問題がございましたら、ご本人様よりお問い合わせください。迅速に対応いたします。</dd>
        </dl>
        
        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>リンク</dt>
          <dd className={styles.detail}>当サイトは原則リンクフリーです。リンクを行う場合の許可や連絡は不要です。引用する際は、引用元の明記と該当ページへのリンクをお願いいたします。</dd>
        </dl>
        
        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>Googleアナリティクスについて</dt>
          <dd className={styles.detail}>
            当サイトでは、より良いサービスの提供とサイトの使いやすさ向上を目的として、サイト利用状況のトラフィックデータ収集と解析のために「Google アナリティクス」を使用しています。<br />
            Google アナリティクスは、トラフィックデータの収集のためにCookieを使用しています。Cookieを通じて得たトラフィックデータは個人を特定するものではありません。<br />
            収集されたトラフィックデータはGoogleのプライバシーポリシーにおいて管理されます。<br />
            <a href="https://policies.google.com/technologies/partner-sites?hl=ja" target="_blank" rel="noopener">https://policies.google.com/technologies/partner-sites?hl=ja</a></dd>
        </dl>

        <dl className={styles.disclaimerItem}>
          <dt className={styles.heading}>本免責事項の変更</dt>
          <dd className={styles.detail}>当サイトは、本免責事項の内容を適宜見直し、その改善に努めます。本免責事項は、事前の予告なく変更することがあります。<br />
          本免責事項の変更は、当サイトに掲載された時点で有効になるものとします。</dd>
        </dl>
        
      </section>
    </>
  );
}

Disclaimer.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
