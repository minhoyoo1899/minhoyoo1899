export default class setPokeCard {
  setCard(listDiv, pokeCard) {
    const newDiv = document.createElement("div");
    newDiv.className = "card_section";
    listDiv.appendChild(newDiv);
    for (let i = 0; i < pokeCard.length; i++) {
      pokeCard[i].innerHTML = `<div><div></div></div><div></div><div><div></div></div>`;
    }
  };
}
