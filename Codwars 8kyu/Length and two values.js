// My solution
function alternate(n, firstValue, secondValue){
  let arr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr.push(firstValue)
    }else {
      arr.push(secondValue)
    }
  }
  return arr
}

//Best Practices

function alternate(n, firstValue, secondValue){
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(i % 2 === 0 ? firstValue : secondValue)
  }
  return array;
}