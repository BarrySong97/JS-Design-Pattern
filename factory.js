/**
 *
 *
 * simple factory
 *
 *
 *
 */

class People {
  work = null;
  name = null;
  position = null;
  code = null;
  constructor(name, code, position, work) {
    this.name = name;
    this.code = code;
    this.position = position;
    this.work = work;
  }
}

function factory(people, position) {
  let work;
  switch (position) {
    case 'programer':
      work = ['coding', 'rest'];
      break;
    case 'manager':
      work = ['manage', 'sleep'];
      break;
    default:
        work = ["rest"]
      break;
  }

  people.work = work;
}


/**
 * abstract factory
 */

 class Chief extends People {
    this(name, code, postion, work) {
        this.name = name;
        this.code = code;
        this.position = postion;
        this.work = work
    }
    
     
 }

 class Guard extends People {
    this(name, code, postion, work) {
        
    }
}


class PeopleFactory {
    createPeple () {

    }
}

class ChiefFactory extends People {
    createPeple() {
        return new Chief("12", "12", "12", "12")
    }
}
let c = new ChiefFactory();
console.log(c.createPeple());