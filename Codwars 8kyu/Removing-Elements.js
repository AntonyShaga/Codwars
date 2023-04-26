// My solution
function removeEveryOther(arr){
  return arr.filter((x,i) => i % 2 === 0)
}
//Best Practices
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}