function* read(){
    console.log('a');
    let a = yield 'aa';
    console.log('aaa====',a);
    let b = yield 'bb';
    console.log('bb====',b);
    return 'ccc';
}
let it = read();
console.log(it.next('aaa').value);
console.log(it.next('bbbb').value);
console.log(it.next('cccc').value);
console.log(it.next('ddd'));
