import styles from './RimaProfile.module.scss';

const rimaProfileItems = [
  { badge: 'NAME', detail: 'RIMA' },
  { badge: 'COLOR', detail: 'PANTONE® 200C' },
  { badge: 'GREETING', detail: 'NiziUの魅力的なボイス' },
  { badge: 'BORN', detail: 'March 26th, 2004' },
  { badge: 'NIZOO*', detail: 'Llanu *NiziU Official Characters' },
];

export default function RimaProfile() {
  return (
    <div className={styles.rimaProfile}>
      {rimaProfileItems.map((item, index) => {
        return (
          <dl className={styles.profileItem} key={index}>
            <dt className={styles.profileBadge}>{item.badge}</dt>
            <dd className={styles.profileDetail}>{item.detail}</dd>
          </dl>
        );
      })}
    </div>
  );
}
