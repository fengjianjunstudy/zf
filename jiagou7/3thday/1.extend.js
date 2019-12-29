function Animal(name) {
  this.name = name;
}
Animal.prototype.say = function() {
  console.log(this.name);
};
function Tiger(name) {
  Animal.call(this, name);
}
Tiger.prototype.__proto__ = Animal.prototype;
let tiger = new Tiger("tiger");
tiger.say();

console.log(tiger.__proto__ === Tiger.prototype);
console.log(tiger.__proto__.__proto__ === Animal.prototype);
console.log(Animal.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.__proto__ === Function.prototype);
console.log((Function.prototype.__proto__ === Object.prototype));
console.log(Function.__proto__ == Object.__proto__);
