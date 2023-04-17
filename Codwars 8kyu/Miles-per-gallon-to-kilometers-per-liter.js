//My solution
function converter (mpg) {
  return +(mpg*(1.609344/4.54609188)).toFixed(2)
}

//Best Practices

var LITRES_PER_GALLON = 4.54609188;
var KILOMETERS_PER_MILE = 1.609344;
function converter (mpg) {
  return Math.round(100 * mpg * KILOMETERS_PER_MILE / LITRES_PER_GALLON) / 100;
}