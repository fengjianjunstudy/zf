//事务
function perform(anymethod, warppers = []) {
  warppers.forEach(item => {
    item.init();
  });
  anymethod();
  warppers.forEach((item) => {
    item.close();
  });
}
perform(() => {
  console.log('perform');
}, [
  //warpper
  {
    init() {
      console.log("init warpper1");
    },
    close() {
      console.log("close warpper1");
    }
  },
  {
    init() {
      console.log("init warpper2");
    },
    close() {
      console.log("close warpper2");
    }
  }
]);
