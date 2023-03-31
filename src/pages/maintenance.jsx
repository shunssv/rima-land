import Head from 'next/head';
import styles from '@/styles/Maintenance.module.scss';
import { FaSmileWink } from 'react-icons/fa';
import { MdRamenDining } from 'react-icons/md';
import { Loader } from '@/components/Loader';

export default function Maintenance() {
  return (
    <>
      <Head>
        <title>RIMA LAND 制作中</title>
        <meta
          name="description"
          content="Currently in Production | RIMA LAND"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.maintenanceContainer}>
        <p className={styles.text}>
          <MdRamenDining /> Currently in Production <MdRamenDining />
        </p>
        <p className={styles.text}>
          RIMA LAND 制作中
          <FaSmileWink />
        </p>
      </div>

      <Loader />
    </>
  );
}
