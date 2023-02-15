const result = document.querySelector(".result");
const input = document.querySelector(".content");
const marvel = document.querySelector(".marvel");
const dc = document.querySelector(".dc");

function displayHero(strongHeroes, weakHeroes) {
  let output;
  const heroes = [...strongHeroes, ...weakHeroes];
  result.classList.add("visible");
  input.classList.add("invisible");
  const heroIndex = Math.floor(Math.random() * heroes.length);
  const hero = heroes[heroIndex];
  if (strongHeroes.includes(hero)) {
    console.log(hero + " " + "😆 :)");
    output = hero + " " + "😆 :)";
  } else {
    console.log(hero + " " + "😭 :(");
    output = hero + " " + "😭 :(";
  }

  result.textContent = output;

  setTimeout(() => {
    result.classList.remove("visible");
    input.classList.remove("invisible");
  }, 3000);
}

dc.addEventListener("click", () => {
  displayHero(dcStrongHeroes, dcWeakHeroes);
});

marvel.addEventListener("click", () => {
  displayHero(marvelStrongHeroes, marvelWeakHeroes);
});
