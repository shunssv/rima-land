import Image from 'next/image';
import styles from './BlackCheckeredPattern.module.scss';
import { blackCheckeredPattern } from '@/assets/';

export default function BlackCheckeredPattern() {
  return (
    <div className={styles.blackCheckeredImageWrapper}>
      <Image
        src={blackCheckeredPattern}
        alt=""
        sizes="100vw"
        priority
      />
    </div>
  );
}
