let obj = {name:123}
function fn(...args) {
    console.log(this === obj)
}
Function.prototype.bind =function(context){
    context = context?Object(context):window;
    let that  = this;
    return function(...args){
        that.apply(context, args);
    }

}
let f = fn.bind(obj).bind(window);
f();
