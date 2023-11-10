const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

const API_URL = `https://v2.jokeapi.dev/joke/Any?type=single`;

getJoke();

async function getJoke() {
  const res = await fetch(API_URL);

  jokeContainer.innerHTML = data.joke;
}

getJokeBtn.addEventListener("click", getJoke);
