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
          fn(this.state);
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
  then(onfulfilled = () => {}, onrejected = () => {}) {
    if (this.state === "pending") {
      this.fullfilledList.push(onfulfilled);
      this.rejectedList.push(onrejected);
    }
  }
}
module.export = { Promise };
