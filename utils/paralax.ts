/*
let cardContainer = document.querySelector(".container");
loadCardInfo();

async function loadCardInfo() {
  let allPokemons = await fetch(
    "https://gist.githubusercontent.com/sandren/8f86756390fc5e0be7a59ac0b79e4414/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json"
  ).then((response) => response.json());

  allPokemons.forEach((pokemon) => {
    if(pokemon.id > 15){return}
    cardContainer.innerHTML += `
    <div class="card__container">
        <div class="card">
          <div class="card__title">
            <h2>${pokemon.name.english}</h2>
            <span>${pokemon.id}/706</span>
          </div>
          <div class="card__image">
            <img src="./assets/pokemons/poke_${pokemon.id}.gif" alt="" />
          </div>
          <div class="card__info">
            <div class="card__info__type">
              <h3>Tipo</h3>
              <p>${pokemon.type.join()}</p>
            </div>
            <div class="card__info__description">
              <h3>Descrição</h3>
              <p>
                "Bulbasaur can be seen napping in bright sunlight. There is a
                seed on its back. By soaking up the sun’s rays, the seed grows
                progressively larger."
              </p>
            </div>
          </div>
        </div>
      </div>
    `
  })

  //Seletor de todas os card_containers
let allCards = document.querySelectorAll(".card__container");
allCards.forEach((cardContainer) => {
  cardContainer.addEventListener("mousemove", function (e) {
    // obtém as coordenadas do mouse relativas ao centro do elemento pai
    const x =
      e.clientX - cardContainer.offsetLeft - cardContainer.offsetWidth / 2;
    const y =
      e.clientY - cardContainer.offsetTop - cardContainer.offsetHeight / 2;
    // calcula os ângulos de rotação da carta em graus
    const rotateX = (-y / cardContainer.offsetHeight) * 25;
    const rotateY = (x / cardContainer.offsetWidth) * 25;
    // seleciona a carta
    const card = cardContainer.children[0];
    // aplica a transformação na carta usando os ângulos calculados
    card.style.transform = ` scale(105%) perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    //outro modo
    // setTransform(`scale(105%) perspective(500px) rotate3d(${xAxis},${yAxis},0, 10deg)`)
  });
  // adiciona um evento de mouseleave ao elemento pai
  cardContainer.addEventListener("mouseleave", () => {
    // seleciona a carta
    const card = cardContainer.children[0];
    // remove a transformação da carta
    card.style.transform = "none";
  });
});
}
*/
