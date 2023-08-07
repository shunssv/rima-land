import Image from 'next/image';
import styles from './RimaIsLovelyItems.module.scss';
import {
  rimaIsLovelyCreative,
  rimaIsLovelyDiligent,
  rimaIsLovelyFriendly,
} from '@/assets/';

const rimaIsLovelyItems = [
  {
    heading: rimaIsLovelyCreative,
    alt: 'Creative',
    description:
      'RIMAは他にはない独特な感性の持ち主。ラップを作詞するだけではなく、キャラクターを描いたり、独自の言語を作ったりとクリエイティブ。NiziUメンバーやWithUに発信して浸透させる力もあるのも彼女のすごいところ。',
  },
  {
    heading: rimaIsLovelyDiligent,
    alt: 'Diligent',
    description:
      '「ラップ」「美貌」だけではないのがRIMA。プライベートでは勉強にとても熱心に取り組んでいます。それはNIziUメンバーが評するほど。NiziUの活動や練習がある中、勉強に時間を割いているストイックな一面があります。',
  },
  {
    heading: rimaIsLovelyFriendly,
    alt: 'Friendly',
    description:
      '美貌の裏は甘えん坊で可愛らしいRIMA。人懐っこく、周りを笑顔にしてくれる性格です。怖がりで涙もろいところもあり、そんな意外性も人を惹き寄せていると思います。美と愛嬌の絶妙なギャップさがRIMAの一つの魅力。',
  },
];

export default function RimaIsLovelyItems() {
  return (
    <div className={styles.rimaIsLovelyItemsContainer}>
      {rimaIsLovelyItems.map((item, index) => {
        return (
          <dl className={styles.rimaIsLovelyItem} key={index}>
            <dt>
              <Image
                src={item.heading}
                alt={item.alt}
                sizes="100vw"
                className={styles.rimaIsLovelyItemImage}
                priority
              />
            </dt>
            <dd>{item.description}</dd>
          </dl>
        );
      })}
    </div>
  );
}
