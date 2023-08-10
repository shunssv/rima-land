import Image from 'next/image';
import styles from './FlippedRedCheckeredPattern.module.scss';
import { redCheckeredPattern } from '@/assets/';

export default function FlippedRedCheckeredPattern() {
  return (
    <div className={styles.flippedRedCheckeredPatternContainer}>
      <Image
        src={redCheckeredPattern}
        alt="Red checkered pattern image"
        sizes="100vw"
        className={styles.redCheckeredPattern}
        priority
      />
    </div>
  );
}
