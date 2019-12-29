Function.prototype.before = function(beforeFn) {
    return (...args) => {
        beforeFn();
        this(...args);
    }
}
//Aop 切片编程
const afterfn = ()=>{
    console.log('after')
}
const beforeFn =  afterfn.before(()=>{
    console.log('before');
})
beforeFn();

