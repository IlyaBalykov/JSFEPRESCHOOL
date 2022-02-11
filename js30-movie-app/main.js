const image = document.querySelector('.card__image')
const search = document.querySelector('.search')
const mainContainer = document.querySelector('.main-container')


search.addEventListener('keydown', (event) => event.keyCode === 13 ? getData() : false)

async function getData() {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=fc17ef421bcf5425d173f899b55a435a`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(search.value)
  console.log(url)
  console.log(data);
  removeData()
  showData(data)
}

function showData(data) {

  data.results.forEach((item, index) => {
    let movieCard = document.createElement('div');
    let moviePoster = document.createElement('img');
    let movieTitle = document.createElement('h2');
    let movieRating = document.createElement('div');
    movieCard.className = 'card'
    moviePoster.className = 'card__poster'
    movieTitle.className = 'card__title'
    movieRating.className = 'card__rating'
    moviePoster.src = 'https://image.tmdb.org/t/p/w300' + `${data.results[index].poster_path}`
    movieTitle.textContent = `${data.results[index].title}`
    movieRating.textContent = `${data.results[index].vote_average}`
    mainContainer.append(movieCard)
    movieCard.append(moviePoster)
    movieCard.append(movieTitle)
    movieCard.append(movieRating)
  })
}

function removeData() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
}