const search = document.querySelector('.search')
const mainContainer = document.querySelector('.main-container')

search.addEventListener('keydown', (event) => event.keyCode === 13 ? getData() : false)

window.onload = async function () {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=fc17ef421bcf5425d173f899b55a435a`;
  const res = await fetch(url);
  const data = await res.json();
  showData(data)
}

async function getData() {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search.value}&api_key=fc17ef421bcf5425d173f899b55a435a`;
  const res = await fetch(url);
  const data = await res.json();
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

console.log(
  "1. Вёрстка [+10]\n" +
  "- на странице есть несколько карточек фильмов и строка поиска. На каждой карточке фильма есть постер и название фильма. Также на карточке может быть другая информация. +5\n" +
  "- в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n" +
  "2. При загрузке приложения на странице отображаются карточки фильмов с полученными от API данными +10\n" +
  "3. Если в поле поиска ввести слово и отправить поисковый запрос, на странице отобразятся карточки фильмов, в названиях которых есть это слово. [+10]\n" +
  "4. Поиск [+30]\n" +
  "- при открытии приложения курсор находится в поле ввода +5\n" +
  "- есть placeholder +5\n" +
  "- автозаполнение поля ввода отключено (нет выпадающего списка с предыдущими запросами) +5\n" +
  "- поисковый запрос можно отправить нажатием клавиши Enter +5\n" +
  "- после отправки поискового запроса и отображения результатов поиска, поисковый запрос продолжает отображаться в поле ввода +5\n" +
  "- в поле ввода есть крестик при клике по которому поисковый запрос из поля ввода удаляется и отображается placeholder +5\n" +
  "5. Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения [+10]\n" +
  "- высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо\n" +
  "- дополнительным функционалом может быть, например, наличие на карточке фильма его описания и рейтинга на IMDb"
)