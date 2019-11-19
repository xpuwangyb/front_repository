class Person {

    /**
     * case1:有访问控制符，则该属性会被扩展为类属性，可供类的实体操作
     * case2:如果没有访问控制符，则该属性不会给扩展为类属性，类的实体无法操作该属性
     * @param name 
     */
    constructor(public name : string) {
      console.log("**haha**");
    }

    //访问控制符：private,public,protected
    public age;

    private init (){
      console.log('*****init*****');
    }

    public eat(){
        console.log("i'm eating");        
    }

}
console.log("********p1**************");
var p1 = new Person("p_001");
p1.age = 30;
p1.eat();
console.log(p1.name);
console.log("********p2**************");
var p2 = new Person("p_002");
p2.age = 32;
p2.eat();
console.log(p2.name);


class Employee extends Person {
  constructor(name:string, code:string){
    super(name);
    this.code = code;
  }

  public code;

    private doWork() {
      console.log("******i am working*****");    
    }

    work(){
      super.eat();  
      this.doWork();
    }
}

var emp = new Employee("WYB", "0001");
emp.age = 31;
emp.work();
console.log(`****emp name:${emp.name}***emp age:${emp.age}******`);


//
var works : Array<Person> = [];
works.push(new Person("WYB"),new Employee("HHJ", "EMP_001"));
works.forEach(emp => console.log(emp));
console.log(`**works:${works}***`);



interface IPerson {
  name:string;
  age:number;
}

class PersonImpl {
  constructor(public config:IPerson){

  }
}

var personImpl = new PersonImpl({"name":"WYB","age":31});

interface Animal {
  eat();
}

class Sheep implements Animal {
  eat() {
    console.log("*****i eat grass***");
    
  }

}

class Tiger implements Animal {
  eat() {
   console.log("***i eat meat****");
   
  }
  
}