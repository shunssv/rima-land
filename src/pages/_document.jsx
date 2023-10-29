import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleTagManagerBelow } from '@/components/Analytics/GoogleTagManagerBelow';

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;

export default function Document() {
  return (
    <Html lang="ja" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta property="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RimaLandByWithU" />
      </Head>
      <body>
        {ENV === 'Production' && <GoogleTagManagerBelow />}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
