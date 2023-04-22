// My solution
function validateHello(greetings) {
  res = /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings) 
  return res
}

//Best Practices

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd"const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
}