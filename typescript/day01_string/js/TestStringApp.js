var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
//1-多行字符串
var userName = 'Jim';
var hobby = "\nSwimming\nHiking\nPingPang\n";
var descHobby = "My name is " + userName + " and my hobby is " + hobby;
console.log(descHobby);
//2-字符串模板
console.log("<div>\n<span>" + userName + "</span>\n</div>\n");
//3-模板自动拆分
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
    return;
}
var myName = 'WangYibo';
var getAge = function () {
    return 30;
};
test(__makeTemplateObject(["hello my name is ", ", i'm ", " years old."], ["hello my name is ", ", i'm ", " years old."]), myName, getAge());
