let obj = { name: "" };
Object.freeze(obj); //用了此方法 这个对象不能添加get set 可以提高vue性能
let desc = Object.getOwnPropertyDescriptor(obj, "name");
if (desc && desc.configurable !== false) {
  let val = "123";
  Object.defineProperty(obj, "name", {
    configurable: false,
    enumerable: true,
    get() {
      return val;
    },
    set(newVal) {
        console.log('dfdf')
      val = newVal + val;
    }
  });
}
obj.name = "abc";

