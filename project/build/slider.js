export default function slider(div, l_btn, r_btn) {
  let currentIdx = 0;
  let count = 0;
  div.style.transform = `translateX(0.5%)`;
  function moveSlide(num) {
    div.style.transform = `translateX(${num * 0.5 + 0.5}%)`;
    // pokeList.style.transform = `translate3d(${-num * 3.5}%, 0px, 0px) rotateX(0deg) rotateY(${-num * 5}deg)`;
  }

  l_btn.addEventListener("click", function () {
    div.style.transition = "ease .5s";
    moveSlide(currentIdx + 1);
    currentIdx++;
  });

  r_btn.addEventListener("click", function () {
    div.style.transition = "ease .5s";
    moveSlide(currentIdx - 1);
    currentIdx--;
  });
}