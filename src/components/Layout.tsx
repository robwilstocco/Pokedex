import Header from "./Header";
import Footer from "./Footer";
import styles from '../../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>{children}</main>
      <Footer />
    </>
  );
}
