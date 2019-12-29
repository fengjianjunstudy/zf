const fs = require("fs");
const after = (n, fn) => {
  return () => {
    if (--n === 0) {
      fn();
    }
  };
};
let files = {};
let filePaths = ["1.js", "2.transaction.js"];
const fn = after(filePaths.length, () => {
  console.log(files);
});
function read(path, files) {
  fs.readFile(path, "utf8", (err, data) => {
    if (!err) {
      files[path] = data;
      fn();
    }
  });
}
filePaths.forEach(path => {
  read(path, files);
});
