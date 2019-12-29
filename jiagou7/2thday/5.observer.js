//数据劫持 defineProperty 如果数据类型是数组的话是无法监测到数据变化的
let obj = {
  name: "abc",
  info: {
    a: "haha"
  }
};
function update() {
  console.log("update");
}
function observer(obj) {
  if (typeof obj !== "object") {
    return;
  }
  for (let key in obj) {
    defineReactive(obj, key, obj[key]);
  }
}
function defineReactive(obj, key, value) {
  observer(value);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(newVal) {
      update();
      value = newVal;
    }
  });
}
observer(obj);
obj.name = "123";
obj.info.a = 1;
console.log(obj.name);
