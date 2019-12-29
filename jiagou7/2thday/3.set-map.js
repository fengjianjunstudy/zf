let set = new Set([1, 2, 3, 4, 5, 6, 1, 2]);
console.log(set);
set.forEach(item => {
  console.log(item);
});
let obj = {
  a: 1,
  b: 2,
  [Symbol()]: 3
};
// Object.keys 只能获取普通属性
console.log(Object.keys(obj));
//Object.getOwnPropertySymbols 只能取symbol
console.log(Object.getOwnPropertySymbols(obj));
//Reflect.ownKeys 可以获取所有的key
console.log(Reflect.ownKeys(obj));

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
//并集
console.log(new Set([...arr1, ...arr2]));
//交集
let s1 = new Set(arr1);
let s2 = new Set(arr2);
const newArr = arr1.filter(item => {
  return s2.has(item);
});
console.log(newArr);
//差集
const newArr1 = arr1.filter(item => {
  return !s2.has(item);
});
console.log(newArr1);
