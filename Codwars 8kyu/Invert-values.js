// My solution
function invert(array) {
  return array.map(function(x) {
    
     if (x < 0) {
      return Math.abs(x)
    } else if (x >= 0) {
      return -Math.abs(x)
    } 
   });
}

//Best Practices

const invert = array => array.map(num => -num);
