function deepCopy(obj, hash = new WeakMap()) {
  if (obj == undefined) {
    return obj;
  }
  if (typeof obj !== "object") {
    //数据类型 string number boolean symbol
    return obj;
  }
  // 正则 日期 Object
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (hash.has(obj)) {
    return hash.get(obj);
  }
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepCopy(obj[key], hash);
    }
  }
  return cloneObj;
}

let obj = { a: { b: { c: 1 } }, d: [1, [4]] };
const obj1 = deepCopy(obj);
console.log(obj.a.b === obj1.a.b, obj.d[1] === obj1.d[1]);
