function Animal(name) {
  if (!(this instanceof Animal)) {
    throw new Error("no new");
  }
  this.name = name;
}
let animal = Animal("熊猫");

class Animal {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
  static a() {
    //静态方法 es6支持
  }
  static b = 10; //静态属性 es7支持
  get c() {
    //属性访问
    return "c";
  }
  static get d() {
    //静态属性访问
  }
}
