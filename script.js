const jokeContainer = document.getElementById("jokeContainer");
const getJokeBtn = document.getElementById("getJokeBtn");

// Getting jokes from this website 
const API_URL = `https://v2.jokeapi.dev/joke/Any?type=single`;

getJoke();
// api call

async function getJoke() {
  const res = await fetch(API_URL);
  const data = await res.json();

  jokeContainer.innerHTML = data.joke;
}

getJokeBtn.addEventListener("click", getJoke);
