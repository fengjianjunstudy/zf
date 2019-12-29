//发布订阅模式
const fs = require("fs");
let files = {};
let filePaths = ["1.js", "2.transaction.js"];
const e = {
  arr: [],
  on(fn) {
    this.arr.push(fn);
  },
  emit() {
    this.arr.forEach(fn => {
      fn();
    });
  }
};
e.on(() => {
  if (Object.keys(files).length === filePaths.length) {
    console.log(files);
  }
});
function read(path, files) {
  fs.readFile(path, "utf8", (err, data) => {
    if (!err) {
      files[path] = data;
      e.emit();
    }
  });
}
filePaths.forEach(path => {
  read(path, files);
});
