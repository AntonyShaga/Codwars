// My solution
function findAverage(array) {
  // your code here
  if (array.length === 0) {
    return 0;
  }
  let sum = array.reduce((a,b) => a + b)
  return sum / array.length
}

//Best Practices

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}