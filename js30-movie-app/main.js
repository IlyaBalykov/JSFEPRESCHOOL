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
    let movieInfo = document.createElement('div');
    let movieTitle = document.createElement('h2');
    let movieRating = document.createElement('div');
    let movieOverview = document.createElement('div');
    let movieOverviewTitle = document.createElement('h3');
    let movieOverviewText = document.createElement('p');
    movieCard.className = 'card'
    moviePoster.className = 'card__poster'
    movieInfo.className = 'card__info'
    movieTitle.className = 'card-info__title'
    movieRating.className = 'card-info__rating'
    movieOverview.className = 'card__overview'
    movieOverviewTitle.className = 'card__overview-title'
    movieOverviewText.className = 'card__overview-text'
    moviePoster.src = 'https://image.tmdb.org/t/p/w300' + `${data.results[index].poster_path}`
    movieTitle.textContent = `${data.results[index].title}`
    movieRating.textContent = `${data.results[index].vote_average}`
    movieOverviewText.textContent = `${data.results[index].overview}`
    movieOverviewTitle.textContent = 'Overview'
    mainContainer.append(movieCard)
    movieCard.append(moviePoster)
    movieCard.append(movieInfo)
    movieCard.append(movieOverview)
    movieOverview.append(movieOverviewTitle)
    movieOverview.append(movieOverviewText)
    movieInfo.append(movieTitle)
    movieInfo.append(movieRating)
    
    if (data.results[index].vote_average < 5) {
      movieRating.style.color = '#ff0000'
    } else if (data.results[index].vote_average > 8) {
      movieRating.style.color = '#008000'
    } else {
      movieRating.style.color = '#ffff00'
    }

    if(moviePoster.src.includes('null')) {
      moviePoster.src = './assets/image-coming-soon.png'
    }
  })
}

function removeData() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
}