let count = [1, 2, 3].reduce((prev, next, index, arr) => {
  console.log(prev, next, index, arr);
  return prev + next;
}, 0);

console.log(count);

let arr = [1, [2, [3]]];
//方法一： 缺点 其中所有值都会被转化为字符串
console.log(arr.toString().split(","));

//方法二：
console.log(arr.flat(Infinity));

//方法三：
function flat(arr) {
  let newArr = arr.reduce((prev, cur) => {
    let array = [];
    if (Array.isArray(cur)) {
      array = flat(cur);
    } else {
      array.push(cur);
    }
    return [...prev, ...array];
  }, []);
  return newArr;
}
console.log(flat(arr));
