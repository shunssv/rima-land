import styles from './ButtonArrowRight.module.scss';
import Link from 'next/link';
import { MdArrowForwardIos } from 'react-icons/md';

export default function ButtonArrowRight({ url, text }) {
  return (
    <Link href={url} className={styles.buttonArrowRight}>
      {text}
      <MdArrowForwardIos className={styles.icon} />
    </Link>
  );
}
