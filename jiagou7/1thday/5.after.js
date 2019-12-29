//调用n次后执行函数
const after = (n,fn)=>{
    return ()=>{
        if(--n === 0){
            fn();
        }
    }
}
const fn = ()=>{
    console.log('3次之后执行')
}
const fn1 = after(3,fn);
fn1();
fn1();
fn1();