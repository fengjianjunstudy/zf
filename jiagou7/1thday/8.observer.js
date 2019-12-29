class Subject {
  //被观察者
  constructor() {
    this.arr = [];
    this.state = "开心";
  }
  attach(o) {
    this.arr.push(o);
  }
  setState(state) {
    this.state = state;
    this.arr.forEach(o => {
      o.publish(this.state);
    });
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  //观察者
  publish(newState) {
    console.log(`${this.name}:state=${newState}`);
  }
}
let s = new Subject();
let o1 = new Observer("A");
let o2 = new Observer("B");
s.attach(o1);
s.attach(o2);
s.setState("非常开心");
