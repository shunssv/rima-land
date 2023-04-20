import styles from './HomeLayout.module.scss';
import { Footer } from '@/components/Layout/Footer';
import { Loader } from '@/components/Layout/Loader';
import { HomeHeader } from './HomeHeader';

export function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
      <Loader />
    </>
  );
}