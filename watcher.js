class Publisher {

    constructor() {
        this.observers = [];
        this.message = "我是群主";
    }

    add(observer) {
        this.observers.push(observer)
    }

    notify() {

        this.observers.forEach(observer => {
            observer.update(this);
        })
    }
}


class Observer {
    constructor(name) {
        this.name = name
    }

    update(publisher) {
        console.log(`${this.name} 接受到群主发的消息了: ${publisher.message}`);
    }
}

let member1 = new Observer("1");
let member2 = new Observer("2");
let member3 = new Observer("3");
let leader = new Publisher();
leader.add(member1)
leader.add(member2)
leader.add(member3)
// leader.notify();


function cb() {
    console.log("更新视图！");
}

function defineReactive(obj, key, val) {

    const dep = new Dep();
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        set: (value) => {
            if (val === value) return;
            dep.notify();
        },
        get: () => {
            dep.add(Dep.target);
            return val;
        }
    })
}


function observer(value) {
    if (!value || (typeof value !== 'object')) {
        return;
    }

    // 如果是object类型就要使用递归来给各个属性设置
    Object.keys(value).forEach((key) => {
        defineReactive(value, key, value[key]);
    });
}



class Dep {
    constructor() {
        this.subs = [];
    }

    add(sub) {
        this.subs.push(sub);
    }

    notify() {
        this.subs.forEach(sub => {
            sub.update();
        })
    }
}

Dep.target = null;

class Watcher {
    constructor() {
        /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
        Dep.target = this;
    }

    /* 更新视图的方法 */
    update() {
        console.log("视图更新啦～");
    }
}


class Vue {
    constructor(options) {
        this._data = options.data;
        observer(this._data);
        /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
        new Watcher();
        /* 在这里模拟render的过程，为了触发test属性的get函数 */
        console.log('render~', this._data.test);
    }
}

let o = new Vue({
    data: {
        test: "I am test."
    }
});
o._data.test = "hello,world."; 