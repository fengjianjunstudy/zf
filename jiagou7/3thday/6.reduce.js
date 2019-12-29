Array.prototype.reduce = function(callback, init) {
  let prev,
    cur,
    result,
    i = 0;
  let len = this.length;
  if (init !== undefined) {
    prev = init;
  } else {
    prev = this[0];
    i++;
  }
  while (i < len) {
    cur = this[i];
    result = callback(prev, cur, i++, this);
    prev = result;
  }
  return result;
};
let count = [1, 2, 3].reduce((prev, next, index, arr) => {
  console.log(prev, next, index, arr);
  return prev + next;
}, 0);
console.log(count);
