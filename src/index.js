
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return [];

  const reversedArr =  matrix.map((item, index) => {
  if(index % 2){
  return item.reverse()
  } else {
  return item
  }
    
  })
  return reversedArr.flat()
}