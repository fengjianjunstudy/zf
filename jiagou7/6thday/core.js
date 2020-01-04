// console.log(this === global)
let program = require('commander')
function myParseInt(value, dummyPrevious) {
    // parseInt takes a string and an optional radix
    return parseInt(value);
  }
   
  function increaseVerbosity(dummyValue, previous) {
    return previous + 1;
  }
   
  function collect(value, previous) {
    return previous.concat([value]);
  }
   
  function commaSeparatedList(value, dummyPrevious) {
    return value.split(',');
  }
program
  .option('-f, --float <number>', 'float argument', parseFloat)
  .option('-i, --integer <number>', 'integer argument', myParseInt)
  .option('-v, --verbose', 'verbosity that can be increased', increaseVerbosity, 0)
  .option('-c, --collect <value>', 'repeatable value', collect, [])
  .option('-l, --list <items>', 'comma separated list', commaSeparatedList)
;
console.log(program.parse(process.argv))
// console.dir(global,{showhidden:true})
// // console.log(Object.keys(process))
// // process 
// console.log(process.platform) // 平台
// console.log(process.argv.slice(2)) //执行node 传递的参数
// console.log(process.cwd()) //执行node 时所在的目录
//nextTick 下一队列 微任务
//env 环境变量
