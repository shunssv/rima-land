import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RimaLandByWithU" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
