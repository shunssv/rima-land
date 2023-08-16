import Image from 'next/image';
import styles from './YoutubeList.module.scss';
import {
  youtube01,
  youtube02,
  youtube03,
  youtube04,
  youtube05,
  youtube06,
  youtube07,
  youtube08,
  youtube09,
} from '@/assets/';
import { IoCloseCircleSharp } from 'react-icons/io5';

const youtubeVideos = [
  {
    url: 'https://youtu.be/7FzqKhvgmVY',
    badge: 'To.NiziU',
    img: youtube01,
    alt: 'To.NiziU EP3 RIMA&NINA',
  },
  {
    url: 'https://youtu.be/WXY0uGNi-IA',
    badge: 'Teaser',
    img: youtube02,
    alt: 'NiziU 3rd Single『CLAP CLAP』 RIMA Solo Teaser',
  },
  {
    url: 'https://youtu.be/hHVcOjdQrhs',
    badge: 'NiziU LOG',
    img: youtube03,
    alt: '[NiziU LOG] #33 ミニゲームセンター',
  },
  {
    url: 'https://youtu.be/nCjmXHsRJNY',
    badge: 'MV',
    img: youtube04,
    alt: 'NiziU(니쥬) 1st Album 「Chopstick」 MV',
  },
  {
    url: 'https://youtu.be/M6cfYVKldNk',
    badge: 'NiziU LOG',
    img: youtube05,
    alt: '[NiziU LOG] #9 Tell us! RIMA',
  },
  {
    url: 'https://youtu.be/YrUEPI2Fu8E',
    badge: 'NiziU LOG',
    img: youtube06,
    alt: '[NiziU LOG] NiziU School #1',
  },
  {
    url: 'https://youtu.be/zoPtbRE5d3c',
    badge: 'NiziU LOG',
    img: youtube07,
    alt: '[NiziU LOG] #12 NiziUの休日',
  },
  {
    url: 'https://youtu.be/SFf7Hump8pQ',
    badge: 'MV',
    img: youtube08,
    alt: 'NiziU(니쥬) 5th Single「Paradise」M/V',
  },
  {
    url: 'https://youtu.be/YetOEQd8y5E',
    badge: 'To.NiziU',
    img: youtube09,
    alt: 'To.NiziU EP9 MAYUKA&RIMA',
  },
];

export default function YoutubeList() {
  return (
    <ul className={styles.youtubeList} role="list">
      {youtubeVideos.map((youtubeVideo, index) => {
        return (
          <li className={styles.item} key={index}>
            <a href={youtubeVideo.url} target="_blank">
              <span className={styles.itemBadge}>{youtubeVideo.badge}</span>
              <Image
                src={youtubeVideo.img}
                alt={youtubeVideo.alt}
                sizes="100vw"
                priority
              />
            </a>

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
          </li>
        );
      })}
    </ul>
  );
}