import { Inter } from 'next/font/google';
import styles from './Loader.module.scss';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Loader() {
  return (
    <div className={`${styles.loaderContainer} ${inter.className}`}>
      <div className={styles.inner}>
        <Image src="/loader.svg" alt="Loading" width={60} height={20} priority className={styles.image} />
        <p className={styles.text}>Loading...</p>
      </div>
    </div>
  );
}
