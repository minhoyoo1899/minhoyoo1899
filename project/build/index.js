import initiation from "./initiation.js";
import stylingArr from "./styleObj.js";

const root = document.getElementById("root");
root.innerHTML = `<div id="poke_slide"><div id="l_arrow"><img src="./img/poke_arrow.png" alt="arrow imgage 화살표 이미지"></div><div id="mainDiv"> <div id="pokeList"></div></div><div id="r_arrow"><img src="./img/poke_arrow.png" alt="arrow imgage 화살표 이미지"></div></div>`;

const l_arrow = document.getElementById("l_arrow");
const r_arrow = document.getElementById("r_arrow");
const mainDiv = document.getElementById("mainDiv");
const pokeList = document.getElementById("pokeList");
const poke_slide = document.getElementById("poke_slide");
const card_section = document.getElementsByClassName("card_section");

const styleArr = stylingArr();
const startIndex = new initiation();

startIndex.initIndex(root, l_arrow, r_arrow, l_arrow.children[0], r_arrow.children[0], poke_slide, mainDiv, pokeList, card_section, styleArr, 151);