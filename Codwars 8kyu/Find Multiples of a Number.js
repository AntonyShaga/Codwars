// My solution
function findMultiples(integer, limit) {
  //your code here
  let arr = [];
  for (let i = integer ; i <= limit; i+= integer) {
    arr.push(i)
  }
  return arr
}

//Best Practices

function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}