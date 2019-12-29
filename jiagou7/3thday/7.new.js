function Animal(name) {
  this.name = name;
}
Animal.prototype.say = function() {
  console.log("say");
};
function newAnimal(Fn, ...args) {
  let obj = new Object();
  Fn.call(obj, ...args);
  obj.__proto__ = Fn.prototype;
  return obj;
}
console.log(newAnimal(Animal, "happy"));
