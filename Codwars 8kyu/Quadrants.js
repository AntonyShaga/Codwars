//My solution
function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x > 0 && y < 0) return 4;
  if (x < 0 && y < 0) return 3;
  if (x < 0 && y > 0) return 2;
}

//Best Practices

function quadrant(x, y) {
  return x > 0 ? y > 0 ? 1 : 4 : y > 0 ? 2 : 3;
}