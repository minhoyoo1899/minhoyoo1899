export default class build {
  loadPoDatSpecies(num, pokeCard) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${num + 1}/`;
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", () => {
      const l_POKE_API = request.response;
      JSON.parse(JSON.stringify(l_POKE_API));
  
      for (let i = 0; l_POKE_API.names.length; i++) {
        if (l_POKE_API.names[i].language.name === "ko") {
          const name = l_POKE_API.names[i].name;
          const id = l_POKE_API.id;
          pokeCard[num].children[0].children[0].innerText = `No.${id} ${name}`;
          break;
        }
      }
  
      for (let i = 0; l_POKE_API.flavor_text_entries.length; i++) {
        if (l_POKE_API.flavor_text_entries[i].language.name === "ko") {
          const expl = l_POKE_API.flavor_text_entries[i].flavor_text;
          pokeCard[num].children[2].children[0].innerText = expl;
          break;
        }
      }
    });
  }
  
  loadPokeData(num, pokeCard) {
    const url = `https://pokeapi.co/api/v2/pokemon/${num + 1}`;
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "json";
    request.send();
    request.addEventListener("load", () => {
      const l_POKE_API = request.response;
      const item = l_POKE_API.sprites.other.dream_world.front_default;
      const imgTag = document.createElement("img");
      imgTag.src = item;
      imgTag.style.width = "100%";
      imgTag.style.maxWidth = "22vw";
      imgTag.style.height = "10vw";
      pokeCard[num].children[1].appendChild(imgTag);
    });
  }
}


