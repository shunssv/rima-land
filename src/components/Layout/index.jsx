import styles from './Layout.module.scss';
import { Header } from '@/components/Layout/Header';
import { Footer } from '@/components/Layout/Footer';
import { Loader } from '@/components/Layout/Loader';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
      <Loader />
    </>
  );
}
