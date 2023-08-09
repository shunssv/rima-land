import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import { redCheckeredPattern } from '@/assets/';

export default function RedCheckeredPattern() {
  return (
    <Image
      src={redCheckeredPattern}
      alt="Red checkered pattern image"
      sizes="100vw"
      className={`${styles.redCheckeredPattern}`}
      priority
    />
  );
}
