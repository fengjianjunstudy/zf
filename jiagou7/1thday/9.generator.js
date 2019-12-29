function* read() {
  yield 1;
  yield 2;
  yield 3;
}
let it = read();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
let obj = {
  0: 0,
  1: 1,
  length: 2,
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        return { value: this[i++], done: i === this.length + 1 };
      }
    };
  }
};
console.log([...obj]);
let obj1 = {
  0: 0,
  1: 1,
  length: 2,
  [Symbol.iterator]: function*() {
    let i = 0;
    while (i !== this.length) {
      yield this[i++];
    }
  }
};
console.log([...obj1]);

let fs = require("fs").promises;
function* r() {
  let content = yield fs.readFile("./1.js", "utf8");
  let content1 = yield fs.readFile("./3.curry.js", "utf8");
  return content1;
}
let it1 = r();
// it1.next().value.then(data => {
//   it1.next().value.then(d => {
//     console.log(d);
//   });
// });

function co(it) {
  return new Promise((resolve, reject) => {
    function next(data) {
      let { value, done } = it.next(data);
      if (!done) {
        Promise.resolve(value).then(data => {
          next(data);
        });
      } else {
        resolve(value);
      }
    }
    next();
  });
}
co(it1).then(data => {
  console.log("data", data);
});
