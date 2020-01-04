//模版字符串
let name = 'fjj',age=18;
let str = "${name}今年${age}岁"
str = str.replace(/\$\{([\s\S]+?)\}/g,(...args) =>{
    return eval(args[1]);
})
console.log(str);