/**
 * Rest and Spread 操作符：
 *  用来声明任意数量的方法参数
 */
//Rest
function func1(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
    console.log(name);
}
func1('wyb', 1, 2, 3);
func1('wyb', 7, 8, 9);
function func2(name, age, sex) {
    console.log(name);
    console.log(age);
    console.log(sex);
}
var person = ['wyb', 30];
//spread表达式
func2.apply(void 0, person);
var userNames = ["wyb", "hhj", "wzc"];
