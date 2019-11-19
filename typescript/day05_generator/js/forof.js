var myArray = [1, 2, 3, 4];
myArray.desc = "This is my array";
myArray.forEach(function (val) { return console.log(val); });
/**
 *
 * for***in
 */
console.log("****for in*******");
for (var key in myArray) {
    if (myArray.hasOwnProperty(key)) {
        var element = myArray[key];
        console.log("**key:" + key + "******val:" + element);
    }
}
console.log("****for of*******");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var iterator = myArray_1[_i];
    if (iterator > 2) {
        break;
    }
    console.log("**iterator:" + iterator + "****");
}
var sayHelloString = "Hello World";
for (var _a = 0, sayHelloString_1 = sayHelloString; _a < sayHelloString_1.length; _a++) {
    var ele = sayHelloString_1[_a];
    console.log("*****ele:" + ele + "****");
}
//# sourceMappingURL=forof.js.map