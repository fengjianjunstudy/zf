let obj = {name:122}
function fn(...args){
    console.log(this,...args);
}
Function.prototype.call = function(context,...agrs){
    context = context?Object(context):window;
    context.fn = fn;
    context.fn(...agrs);
    delete context.fn;
}
Function.prototype.apply = function(context,...agrs){
    context = context?Object(context):window;
    context.fn = fn;
    context.fn(agrs);
    delete context.fn;
}
fn.call(null,1,2)
fn.call('abc')

fn.call.call.call(obj)