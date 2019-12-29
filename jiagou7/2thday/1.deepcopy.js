// 深拷贝方法一：
const obj = { a: { b: { c: 1 } } };
const obj1 = JSON.parse(JSON.stringify(obj));
obj1.a.b.c = 2;
console.log(obj);
console.log(obj1);
//不能拷贝值为函数的属性
obj.fn = () => {
  console.log("obj");
};
const obj2 = JSON.parse(JSON.stringify(obj));
console.log(obj);
console.log(obj2);

let o1, o2;
o1 = { a: o2 };
o2 = { b: o1 };
const obj3 = JSON.parse(JSON.stringify(o1));
console.log(obj3);
