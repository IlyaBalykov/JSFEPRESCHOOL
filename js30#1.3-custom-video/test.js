function sortMyString(S) {
  let even = []
  let odd = []
  S
    .split("")
    .map((element, index) => {
    if((index%2) === 0) {
      even.push(element)
    } else {
      odd.push(element)
    }
  })

  let concat = [...even, ...odd]
  concat.splice(even.length, 0, " ")
  let res1 = concat.join("")
  console.log(even)
  console.log(odd)
  console.log(concat)
  console.log(res1)

}

sortMyString("CodeWars")

//четные слева CdWr oeas























// function findMissing(arr1, arr2) {
//   let res = [...arr1, ...arr2]
//   console.log(res)
// }
//
// findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4])
//
// //3