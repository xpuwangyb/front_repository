var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    /**
     * case1:有访问控制符，则该属性会被扩展为类属性，可供类的实体操作
     * case2:如果没有访问控制符，则该属性不会给扩展为类属性，类的实体无法操作该属性
     * @param name
     */
    function Person(name) {
        this.name = name;
        console.log("**haha**");
    }
    Person.prototype.init = function () {
        console.log('*****init*****');
    };
    Person.prototype.eat = function () {
        console.log("i'm eating");
    };
    return Person;
}());
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Employee.prototype.doWork = function () {
        console.log("******i am working*****");
    };
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    return Employee;
}(Person));
var emp = new Employee("WYB", "0001");
emp.age = 31;
emp.work();
console.log("****emp name:" + emp.name + "***emp age:" + emp.age + "******");
//
var works = [];
works.push(new Person("WYB"), new Employee("HHJ", "EMP_001"));
works.forEach(function (emp) { return console.log(emp); });
console.log("**works:" + works + "***");
var PersonImpl = /** @class */ (function () {
    function PersonImpl(config) {
        this.config = config;
    }
    return PersonImpl;
}());
var personImpl = new PersonImpl({ "name": "WYB", "age": 31 });
var Sheep = /** @class */ (function () {
    function Sheep() {
    }
    Sheep.prototype.eat = function () {
        console.log("*****i eat grass***");
    };
    return Sheep;
}());
var Tiger = /** @class */ (function () {
    function Tiger() {
    }
    Tiger.prototype.eat = function () {
        console.log("***i eat meat****");
    };
    return Tiger;
}());
//# sourceMappingURL=Person.js.map