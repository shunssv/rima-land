import Head from 'next/head';
import styles from '@/styles/Maintenance.module.scss';
import { FaSmileWink } from 'react-icons/fa';
import { MdRamenDining } from 'react-icons/md';

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>RIMA LAND 制作中</title>
        <meta
          name="description"
          content="Currently in Production | RIMA LAND"
        />
      </Head>

      <div className={styles.maintenanceContainer}>
        <div className={styles.maintenanceInner}>
          <p className={styles.text}>
            <MdRamenDining /> Currently in Production <MdRamenDining />
          </p>
          <p className={styles.text}>
            RIMA LAND 制作中
            <FaSmileWink />
          </p>
        </div>
      </div>
    </>
  );
}
