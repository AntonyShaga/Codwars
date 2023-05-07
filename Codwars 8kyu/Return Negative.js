// My solution
function makeNegative(num) {
  // Code?
  if (num > 0) {
    return num - num - num
  }
  return num
  }

//Best Practices

function makeNegative(num) {
  return -Math.abs(num);
}