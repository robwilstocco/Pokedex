import Image from "next/image";
import styles from "styles/Home.module.css";

const MiniCard = ({ id, name }) => {
  return (
    <li className={styles.pokemon_item}>
      <Image
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        width="70"
        height="70"
        alt="PokeCard"
        priority={true}
      />
      <div className={styles.pokemon_info}>
        <h4 className={styles.pokemon_id}>Nº {id.padStart(4,'0')}</h4>
        <h1 className={styles.pokemon_name}>{name}</h1>
      </div>
    </li>
  );
};

export default MiniCard;
