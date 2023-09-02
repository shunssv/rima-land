import Image from 'next/image';
import styles from './YoutubeList.module.scss';
import animates from '@/styles/_animation.module.scss';
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
import { useState } from 'react';

const youtubeVideos = [
  {
    id: '7FzqKhvgmVY',
    badge: 'To.NiziU',
    img: youtube01,
    alt: 'To.NiziU EP3 RIMA&NINA',
  },
  {
    id: 'WXY0uGNi-IA',
    badge: 'Teaser',
    img: youtube02,
    alt: 'NiziU 3rd Single『CLAP CLAP』 RIMA Solo Teaser',
  },
  {
    id: 'hHVcOjdQrhs',
    badge: 'NiziU LOG',
    img: youtube03,
    alt: '[NiziU LOG] #33 ミニゲームセンター',
  },
  {
    id: 'nCjmXHsRJNY',
    badge: 'MV',
    img: youtube04,
    alt: 'NiziU(니쥬) 1st Album 「Chopstick」 MV',
  },
  {
    id: 'M6cfYVKldNk',
    badge: 'NiziU LOG',
    img: youtube05,
    alt: '[NiziU LOG] #9 Tell us! RIMA',
  },
  {
    id: 'YrUEPI2Fu8E',
    badge: 'NiziU LOG',
    img: youtube06,
    alt: '[NiziU LOG] NiziU School #1',
  },
  {
    id: 'zoPtbRE5d3c',
    badge: 'NiziU LOG',
    img: youtube07,
    alt: '[NiziU LOG] #12 NiziUの休日',
  },
  {
    id: 'SFf7Hump8pQ',
    badge: 'MV',
    img: youtube08,
    alt: 'NiziU(니쥬) 5th Single「Paradise」M/V',
  },
  {
    id: 'YetOEQd8y5E',
    badge: 'To.NiziU',
    img: youtube09,
    alt: 'To.NiziU EP9 MAYUKA&RIMA',
  },
];

export default function YoutubeList() {
  const [isShowing, setIsShowing] = useState(false);
  const [modalYoutubeId, setModalYoutubeId] = useState(null);

  const closeModal = () => {
    setIsShowing(false);
  }

  return (
    <ul className={styles.youtubeList} role="list" onClick={(e) => e.stopPropagation()}>
      {youtubeVideos.map((youtubeVideo, index) => {
        return (
          <li className={styles.item} key={index}>
            <div className={styles.linkWrapper} onClick={() => {setIsShowing(true); setModalYoutubeId(youtubeVideo.id)}}>
              <span className={styles.itemBadge}>{youtubeVideo.badge}</span>
              <Image
                src={youtubeVideo.img}
                alt={youtubeVideo.alt}
                sizes="100vw"
                className={styles.itemThumbnail}
                priority
              />
            </div>
          </li>
        );
      })}

      {isShowing && (
        <div className={`${styles.youtubeModalWindowContainer} ${animates.fadeIn} ${styles.linkWrapper}`} onClick={closeModal}>
          <IoCloseCircleSharp onClick={closeModal}
            className={`${styles.youtubeModalWindowClose} ${styles.linkWrapper}`}
          />
          <div className={styles.youtubeModalWindow}>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${modalYoutubeId}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className={styles.youtubeContent}
            ></iframe>
          </div>
        </div>
      )}
    </ul>
  );
}
