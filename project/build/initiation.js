import divStyle from "./style.js";
import slider from "./slider.js";
import loopPokeMon from "./loopPokeMon.js";

export default class initiation {
  initIndex(idA, idB, idC, idD, idE, idF, idG, idH, classCard, stylingArr, loop) {
    const divId = [idA, idB, idC, idD, idE, idF, idG, idH];
    const loopPKM = new loopPokeMon();    

    divStyle(divId, stylingArr);
    slider(idH, idB, idC);
    loopPKM.loopPoke(loop, classCard, idH);
  }
}