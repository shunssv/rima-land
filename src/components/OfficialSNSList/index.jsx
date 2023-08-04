import Image from 'next/image';
import styles from './OfficialSNSList.module.scss';
import {
  instagram,
  tiktok,
  twitter,
  line,
  facebook,
} from '@/assets/';

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

export default function OfficialSNSList() {
  return (
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
  );
}
