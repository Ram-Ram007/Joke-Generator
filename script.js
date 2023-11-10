const jokeContainer = document.getElementById('jokeContainer');
const getJokeBtn = document.getElementById('getJokeBtn');

const API_URL = `https://v2.jokeapi.dev/joke/Any?type=single`;

getJoke();


getJokeBtn.addEventListener('click', getJoke);