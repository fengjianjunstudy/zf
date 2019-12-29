@log
class Animal {
  constructor() {
    this.name = "xi";
  }
  @readonly a = 1;
  @before say() {
    console.log("say");
  }
}
function log(target) {
  //target 指向类
  console.log(target);
}
function readonly(prototype, key, descriptor) {
  //修饰属性
  descriptor.writable = false;
}
function before(prototype, key, descriptor) {
  //修饰方法
  let old = descriptor.value;
  descriptor.value = function() {
    console.log("xxx");
    old();
  };
}
