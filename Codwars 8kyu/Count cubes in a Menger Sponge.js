// My solution
function calc_ms(n) {
  let res = 1;
  
  while(n > 0) {
    res *= 20
    n--
  }
  
  return res
}
//Best Practices

function calc_ms(n) {
  return Math.pow(20, n);
}