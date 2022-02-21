const area = document.getElementById('area')
const modalContainer = document.getElementById('modal-container')
const modalOverlay = document.getElementById('overlay')
const modalBtnClose = document.querySelector('.modal__btn-close')
const modalRecords = document.querySelector('.modal__records')
let isWinnersArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let isStepsArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const modalContent = document.getElementById('modal__content')

let isWinner = '';
let move = 0;
let isXSteps = 0;
let isOSteps = 0;
window.onload = function () {
  console.log(localStorage.result)
  if(localStorage.length > 0) {
    isStepsArr= localStorage.result.split(',')
    isWinnersArr= localStorage.winner.split(',')
  } else {
    localStorage.setItem('result', isStepsArr)
    localStorage.setItem('winner', isWinnersArr)
  }
  console.log('теперь' + isStepsArr)
}


area.addEventListener('click', event => {
  playClick()
  if (!event.target.innerHTML) {
    if (event.target.className === 'area__box') {
      if (move % 2 === 0) {
        event.target.innerHTML = 'X'
        move++
        isXSteps++
      } else {
        event.target.innerHTML = 'O'
        move++
        isOSteps++
      }
      check()
    }
  }
})
modalBtnClose.addEventListener('click', closeModal)

function check() {

  const areaBoxes = document.getElementsByClassName("area__box")
  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  arr.forEach((box, index) => {
    if (
      areaBoxes[arr[index][0]].innerHTML === 'X' && areaBoxes[arr[index][1]].innerHTML === 'X' && areaBoxes[arr[index][2]].innerHTML === 'X'
    ) {
      isWinner = 'крестики'
      showWinner(isWinner, isXSteps)
    } else if (
      areaBoxes[arr[index][0]].innerHTML === 'O' && areaBoxes[arr[index][1]].innerHTML === 'O' && areaBoxes[arr[index][2]].innerHTML === 'O'
    ) {
      isWinner = 'нолики'
      showWinner(isWinner, isOSteps)
    }
  })
}

function showWinner(winner, steps) {
  modalContent.innerHTML = `Выиграли ${winner} за ${steps} хода!`
  modalContainer.style.display = 'block'
  setLocalStorage(steps, winner)
  showResults()
}

function closeModal() {
  modalContainer.style.display = 'none'
  location.reload()
}

function setLocalStorage(steps, winner) {
  isStepsArr.pop()
  isStepsArr.unshift(steps)
  localStorage.setItem('result', isStepsArr)
  isWinnersArr.pop()
  isWinnersArr.unshift(winner)
  localStorage.setItem('winner', isWinnersArr)
}

function showResults() {
  isStepsArr.forEach((element, index) => {
    if (element > 0) {
      let result = document.createElement('span')
      result.className = 'result'
      console.log(element)
      result.innerHTML = `Выиграли ${isWinnersArr[index]} за ${element} хода`
      modalRecords.appendChild(result)
    }
  })
}

function playClick(){
  let audio = document.createElement('audio');
  audio.setAttribute("autoplay","true");
  audio.innerHTML = "<source src=\"assets/click.mp3\" type=\"audio/mpeg\">";
  document.body.appendChild(audio);
}