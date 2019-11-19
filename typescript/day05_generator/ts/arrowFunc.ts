//箭头表达式：用来声明匿名函数，消除传统匿名函数的this指针问题
//case1: 无参数
var sysDate = () => new Date().toString();
console.log(`>>>>arrow function---have no param>>>>sysDate:${sysDate()}`);

//case2: 只有一个参数

var totalNum = numVal => numVal;

//case3: 连个参数,函数执行只有一行，不需要外围{}
var sum = (arg1, arg2) => arg1+arg2;
var total = sum(1,2);
console.log(total);

//case4:特定函数的执行需要传递匿名参数
var myArray = [1,2,3,4,5];
console.log(myArray.filter(value => value%2 == 0));

/**
 * 返回数组ages中所有元素都大于18的元素
 */
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

function myFunction() {
    var result = ages.filter(checkAdult);
    console.log(`****the result ages bigger than 18 is:${result}`);
}
myFunction();

console.log("===========================");
var arrowFilterResult = ages.filter((age) => age >= 18);
console.log(`****the arrow filter result ages bigger than 18 is:${arrowFilterResult}`);

ages.forEach(age => console.log(`******new age:${age+1}****`));

var arrowAddAgeResult = ages.map(age => age+1);
console.log(`***********arrowAddAgeResult:${arrowAddAgeResult}`);


var calTotalNumByReduce = ages.reduce((total,val) => total + val);
console.log(`*****calTotalNumByReduce:${calTotalNumByReduce}*******`);

//case5:箭头表达式与外围函数共享this

(function testThis() {
    this.myName = "WYB";
    setTimeout(() => {
        console.log(`********this.name:${this.myName}******`);
    }, 5000);
})();

(function testThis() {
    this.myName = "WYB";
    setTimeout(function(){
        console.log(`********this.name:${this.myName}******`);
    }, 5000);
})();