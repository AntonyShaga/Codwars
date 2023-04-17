// My solution
var countSheep = function (num){
  let result = '';
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`
  }
  return result
}

//Best Practices

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}