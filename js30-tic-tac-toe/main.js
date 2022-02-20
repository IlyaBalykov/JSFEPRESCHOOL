const area = document.getElementById('area')
let isWinner= ''
let move = 0;

area.addEventListener('click', event => {
  if (event.target.className === 'area__box') {
    move % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = 'O';
    move++
    check()
  }
})

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
      showWinner(isWinner)
    } else if (
      areaBoxes[arr[index][0]].innerHTML === 'O' && areaBoxes[arr[index][1]].innerHTML === 'O' && areaBoxes[arr[index][2]].innerHTML === 'O'
    ) {
      isWinner= 'нолики'
      showWinner(isWinner)
    }
  })
}
function showWinner (winner) {
  console.log(winner)
}
