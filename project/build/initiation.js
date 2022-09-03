import divStyle from "./style.js";
import slider from "./slider.js";
import build from "./build.js";
import setPokeCard from "./cardClass.js";

export default class initiation {
  initIndex(idA, idB, idC, idD, idE, idF, idG, idH, classCard, stylingArr, loop) {
    const divId = [idA, idB, idC, idD, idE, idF, idG, idH];   

    const loopPoke = (loop) => {
      for (let i = 0; i < loop; i++) {
        const cardDiv = new setPokeCard();
        const poke_api = new build();
        cardDiv.setCard(idH, classCard);
        poke_api.loadPoDatSpecies(i, classCard);
        poke_api.loadPokeData(i, classCard);
      }
    };

    divStyle(divId, stylingArr);
    slider(idH, idB, idC);
    loopPoke(loop);
  }
}