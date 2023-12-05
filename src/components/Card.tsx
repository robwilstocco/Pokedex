import Image from "next/image";
import styles from "../../styles/PokemonCard.module.css";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Card({ pokemon }) {
  /*---EFEITO PARALLAX SEM BIBLIOTECA-----*/
  // const [xAxis, setXAxis] = useState(0);
  // const [yAxis, setYAxis] = useState(0);
  // const [transform, setTransform] = useState("none");
  // const paralaxManual = (clientX, clientY) => {
  //   const cardContainer = document.getElementById("parallax");
  //   if (!cardContainer) return;
  //   const x =
  //     clientX - cardContainer.offsetLeft - cardContainer.offsetWidth / 2;
  //   const y =
  //     clientY - cardContainer.offsetTop - cardContainer.offsetHeight / 2;
  //   setXAxis((-y / cardContainer.offsetHeight) * 25);
  //   setYAxis((x / cardContainer.offsetWidth) * 25);
  // };
  // useEffect(() => {
  //   setTransform(`scale(105%) perspective(500px) rotate3d(${xAxis},${yAxis},0, 10deg)`);
  // }, [xAxis, yAxis]);

  useEffect(() => {
    const cardContainer = document.getElementById("parallax");
    if (!cardContainer) return;
    VanillaTilt.init(cardContainer, { glare: true });
  }, []);

  return (
    <div
      id="parallax"
      className={styles.parallax}
      // onMouseOver={(event) => paralaxEffect(event.clientX, event.clientY)}
      // onMouseLeave={() => {setTransform("none")}}
    >
      <div
        className={styles.card_container}
        // style={{ transform: transform }}
      >
        <div className={styles.pokemon_title}>
          <p>#{pokemon.id.toString().padStart(4, "0")}</p>
          <p>{pokemon.name.toUpperCase()}</p>
        </div>
        <div className={styles.pokemon_image}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            width="200"
            height="200"
            alt={pokemon.name}
            priority={true}
          />
        </div>
        <div className={styles.pokemon_details}>
          <div>
            <h4>Description:</h4>
            <p>{pokemon.flavor.replace(/[\n\f]/g, " ")}</p>
          </div>
          <div>
            <h4>Type:</h4>
            <div className={styles.types_container}>
              {pokemon.types.map((item, index) => (
                <Chip
                  key={index}
                  label={item.type.name}
                  className={styles.chip}
                  sx={{
                    backgroundColor: `var(--${item.type.name})`,
                  }}
                />
              ))}
            </div>
          </div>
          <div className={styles.pokemon_info}>
            <div>
              <h4>Height:</h4>
              <p>{pokemon.height * 10} cm</p>
            </div>
            <div>
              <h4>Weight:</h4>
              <p>{pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
