import Image from 'next/image';
import styles from './RedCheckeredPattern.module.scss';
import { redCheckeredPattern } from '@/assets/';

export default function RedCheckeredPattern() {
  return (
    <div className={styles.redCheckeredPatternContainer}>
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
