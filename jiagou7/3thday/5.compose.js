// function compose(...fns){
//     return function(...args){
//         let lastFn = fns.pop();
//         return fns.reduce((prev,next)=>{
//             return next(prev);
//         },lastFn(...args))
//     }
// }
function compose(...fns) {
  return fns.reduce((a, b) => {
    return function(...args) {
      return a(b(...args));
    };
  });
}
function sum(a, b) {
  return a + b;
}
function len(val) {
  return val + " " + val.length;
}
console.log(
  compose(
    len,
    sum
  )("abc", "ef")
);
