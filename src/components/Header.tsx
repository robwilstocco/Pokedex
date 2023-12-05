import styles from '../../styles/Layout.module.css';
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <Image
          src="/images/logo.png"
          className="logo"
          width="50"
          height="50"
          alt="PokeCard"
        />
      </Link>
      <div>BARRA DE PESQUISA</div>
      <div> FAVORITOS</div>
    </header>
  );
};

export default Header;
