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
    let div = document.createElement('div');
    let posterImage = document.createElement('img');
    div.className = 'card'
    posterImage.src = 'https://image.tmdb.org/t/p/w300' + `${data.results[index].poster_path}`
    mainContainer.append(div)
    div.append(posterImage)
  })
}

function removeData() {
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild)
  }
}