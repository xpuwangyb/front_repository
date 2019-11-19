/**
 * 参数类型：
 *     在参数名称后面使用冒号来指定参数的类型
 *
 */
//string
var myname = 'zhai liang';
//any
var alias = 'xixi';
alias = 13;
//number
var age = 13;
//boolean
var man = true;
function test() {
}
function test2(name) {
    return 'wyb';
}
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var zhangsan = new Person();
zhangsan.name = 'zhangsan';
zhangsan.age = 1;
console.log(zhangsan);
