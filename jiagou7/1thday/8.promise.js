const resolvePromise = (promise2, x, resolve, reject) => {
  //处理x的类型来决定是调用resolve 还是reject
  if (promise2 === x) {
    reject("promise2 === x ,type error");
  }
  if ((typeof x === "object" && x !== null) || typeof x === "function") {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          data => {
            resolve(data);
          },
          e => {
            reject(e);
          }
        );
      } else {
        resolve(x);
      }
    } catch (e) {
      reject(e);
    }
  } else {
    resolve(x);
  }
};
class Promise {
  constructor(executor) {
    this.value = "";
    this.reason = "";
    this.state = "pending";
    this.fullfilledList = [];
    this.rejectedList = [];
    const resolve = data => {
      if (this.state == "pending") {
        this.value = data;
        this.state = "fulfilled";
        this.fullfilledList.forEach(fn => {
          fn(this.value);
        });
      }
    };
    const reject = err => {
      if (this.state === "pending") {
        this.reason = err;
        this.state = "rejected";
        this.rejectedList.forEach(fn => {
          fn(this.state);
        });
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onfulfilled = val => val, onrejected = val => val) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === "fulfilled") {
        setTimeout(() => {
          try {
            let x = onfulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            let x = onrejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.state === "pending") {
        this.fullfilledList.push(() => {
          try {
            let x = onfulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        this.rejectedList.push(() => {
          try {
            let x = onrejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise2;
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  finally(fn) {
    return this.then((value)=>{
      return Promise.resolve(fn()).then(()=>{
        return value;
      })
    },(err)=>{
      return Promise.resolve(fn()).then(()=>{throw err})
    })
  }
  static resolve(){
    return new Promise(function(resolve,reject){
        resolve(value)
    })
  }
  static race(...promises){
    return new Promise(function(resolve,reject){
        for(let i = 0;i<promises.length;i++){
            let promise = promises[i];
            if(typeof promise.then === 'function'){
                promise.then(resolve,reject)
            } else{
                resolve(promise)
            }
        }
    })
  }
  static all(...promises){
    return new Promise(function(resolve,reject){
        let arr = [];
        let i = 0;
        function processData(index,data){
            arr[index] = data;
            /*
              Promise.all([promise1,promise2,100]).then(function(data){
                console.log(data);
            }) */
            //===promises.length
            //这⾥里里为什什么⽤用⼀一个记数的i，⽽而不不是直接⽤用arr.length判断呢?因为当执⾏行行all⽅方法的时候，如上所述数组⾥里里⾯面的100先执⾏行行 这时候索引为2arr的length 已经为3了了 直接满⾜足条件判断，⽽而此时其余的promise还没有执⾏行行完成。所以需要⼀一个计 数器器来进⾏行行判断
            if(++i === promises.length){
                resolve(arr)
            }
        }
        for(let i = 0;i<promises.length;i++){
            let promise = promises[i];
            if(typeof promise.then === 'function'){
                // 当前项为promise 
                promise.then(function(data){
                    processData(i,data);
                },reject)
            }else{
                // ⾮非promise 为原始值 
                processData(i,promise)
            } 
        }
    })
  }

  static reject(){
    return new Promise(function(resolve,reject){
        reject(value)
    })
  }
}

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("加油");
  }, 0);
});
p.then(
  data => {
    console.log(data);
    return data + "abc";
  },
  err => {}
).then(data => {
  console.log(data);
});
