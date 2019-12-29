let obj = { name: "abc", info: { a: [1, 2] } };
function update() {
  console.log("update");
}
let handles = {
  set(target, key, value) {
    if(key === 'length'){
        return true;
    }
    update();
    return Reflect.set(target, key, value); //set 需要有返回值 是否更新成功
  },
  get(target, key) {
    if (typeof target[key] === "object") {
      return new Proxy(target[key], handles);
    }
    return Reflect.get(target, key);
  }
};
let proxy = new Proxy(obj, handles);
proxy.name = "happy";
proxy.info.a.push(122)
console.log(proxy.info.a);
