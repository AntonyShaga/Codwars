// My solution
function hero(bullets, dragons){
  return bullets / 2 >= dragons; 
}

//Best Practices

function hero(bullets, dragons){
  return bullets >= dragons * 2
}