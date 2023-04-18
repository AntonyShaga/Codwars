//My solution
function Hero (name) {
  this.name = name || "Hero";
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

//Best Practices

function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}