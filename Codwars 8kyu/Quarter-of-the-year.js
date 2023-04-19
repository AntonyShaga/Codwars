//My solution
const quarterOf = (month) => {
  // Your code here
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}

//Best Practices

const quarterOf1 = m => Math.ceil(m/3);