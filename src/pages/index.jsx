import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { HomeLayout } from '@/components/Layout/HomeLayout';
import mainVisual from '@/assets/home-mv.svg';

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

      <section className='learnHerMoreContainer'>
        <h2 className='title'></h2>
        <ul className={styles.youtubeList} role="list">
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
          <li>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7FzqKhvgmVY"
              srcdoc="
              <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
              <a href=https://www.youtube.com/embed/7FzqKhvgmVY?autoplay=1>
                <img 
                  src=https://img.youtube.com/vi/7FzqKhvgmVY/hqdefault.jpg 
                  alt='Video: To.NiziU EP3 RIMA&NINA'>
                <span>&#x25BA;</span>
              </a>"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="To.NiziU EP3 RIMA&NINA"
              loading="lazy"
            ></iframe>
          </li>
        </ul>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
