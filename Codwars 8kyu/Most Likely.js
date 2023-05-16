// My solution
function mostLikely(prob1,prob2){
  let p1 = prob1.split(':');
  let sum1 = p1[0] / p1[1];
  let p2 = prob2.split(':');
  let sum2 = p2[0] / p2[1];
  return sum1 > sum2;
}
//Best Practices

const divide = (a, b) => a / b;
const mostLikely = (p1, p2) => divide(...p1.split(':')) > divide(...p2.split(':'));