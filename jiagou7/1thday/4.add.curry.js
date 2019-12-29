const add = (a, b, c) => {
  return a + b + c;
};
const currying = (fn, arr = []) => {
  return (...nums) => {
    arr.push(...nums);
    if (arr.length === fn.length) {
      return fn(...arr);
    } else {
      return currying(fn, arr);
    }
  };
};
const sum = currying(add)(1)(2)(3);
console.log(sum);

const checkType = (type, content) => {
  return Object.prototype.toString.call(content) === `[object ${type}]`;
};
console.log(currying(checkType)("String")('abc'));
