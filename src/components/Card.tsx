import Image from "next/image";
import styles from "../../styles/PokemonCard.module.css";
import { Chip } from "@mui/material";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Card({ pokemon }) {
  useEffect(() => {
    const cardContainer = document.getElementById("parallax");
    if (!cardContainer) return;
    VanillaTilt.init(cardContainer, { glare: true, scale: 1.1 });
  }, []);

  return (
    <div id="parallax" className={styles.card_container}>
      <div className={styles.pokemon_title} style={{transformStyle: 'preserve-3d'}}>
        <p style={{transform: 'translateZ(20px)'}}>#{pokemon.id.toString().padStart(4, "0")}</p>
        <p style={{transform: 'translateZ(20px)'}}>{pokemon.name.toUpperCase()}</p>
      </div>
      <div className={styles.pokemon_image}>
        <Image
          id="imagem"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          width="200"
          height="200"
          alt={pokemon.name}
          priority={true}
          style={{transform: 'translateZ(20px)'}}
        />
      </div>
      <div className={styles.pokemon_details} style={{transformStyle: 'preserve-3d'}}>
        <div style={{transformStyle: 'preserve-3d'}}>
          <h4 style={{transform: 'translateZ(15px)'}}>Description:</h4>
          <p style={{transform: 'translateZ(15px)'}}>{pokemon.flavor.replace(/[\n\f]/g, " ")}</p>
        </div>
        <div style={{transformStyle: 'preserve-3d'}}>
          <h4 style={{transform: 'translateZ(15px)'}}>Type:</h4>
          <div className={styles.types_container} style={{transformStyle: 'preserve-3d'}}>
            {pokemon.types.map((item, index) => (
              <Chip
                key={index}
                label={item.type.name}
                className={styles.chip}
                style={{transform: 'translateZ(15px)'}}
                sx={{
                  backgroundColor: `var(--${item.type.name})`,
                }}
              />
            ))}
          </div>
        </div>
        <div className={styles.pokemon_info} style={{transformStyle: 'preserve-3d'}}>
          <div style={{transform: 'translateZ(15px)'}}>
            <h4>Height:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div style={{transform: 'translateZ(15px)'}}>
            <h4>Weight:</h4>
            <p>{pokemon.weight / 10} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}