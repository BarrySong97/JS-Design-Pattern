class SingleDog {
  show() {
    console.log('我是一个单例对象');
  }
}
SingleDog.getInstance = (function () {
  // 定义自由变量instance，模拟私有变量
  let instance = null;
  return function () {
    // 判断自由变量是否为null
    if (!instance) {
      // 如果为null则new出唯一实例
      instance = new SingleDog();
    }
    return instance;
  };
})();

function Singleton() {
  this.instance = null;
}

Singleton.getInstance = function() {
  if (this.instance) {
    return this.instance;
  }
  this.instance = new Singleton();
  return this.instance;
}



let s1 = SingleDog.getInstance();
let s2 = SingleDog.getInstance();
console.log(s1 === s2);

let s3 = Singleton.getInstance();
let s4 = Singleton.getInstance();


console.log(s3 === s4);


function Test() {
  this.b = 1;
}

Test.a = 1;
Test.print = function() {
  console.log(this.a);
}

Test.print()

Test.prototype.type = function() {
  console.log(this.b);
}
let t = new Test();
t.type();