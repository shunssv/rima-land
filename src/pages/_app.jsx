import '@/styles/reset.scss';
import '@/styles/globals.scss';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import { GoogleTagManagerAbove } from '@/components/Analytics/GoogleTagManagerAbove';

const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {ENV === 'Production' && <GoogleTagManagerAbove />}

      <Component {...pageProps} />
    </>
  );
}
