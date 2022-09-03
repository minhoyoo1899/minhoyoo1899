import build from "./build.js";
import setPokeCard from "./cardClass.js";

export default class loopPokeMon {
  loopPoke(loop, classCard, idH) {
    for (let i = 0; i < loop; i++) {
      const cardDiv = new setPokeCard();
      const poke_api = new build();
      cardDiv.setCard(idH, classCard);
      poke_api.loadPoDatSpecies(i, classCard);
      poke_api.loadPokeData(i, classCard);
    }
  }
}
