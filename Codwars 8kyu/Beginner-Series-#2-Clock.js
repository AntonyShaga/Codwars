// My solution
function past(h, m, s){
  return h * 3600000 + m * 60000 + s * 1000;
}

//Best Practices

function past(h, m, s){
  return ((h*3600)+(m*60)+s)*1000;
}