//1-多行字符串
var userName = 'Jim';
var hobby = `
Swimming
Hiking
PingPang
`;
var descHobby =  `My name is ${userName} and my hobby is ${hobby}`;
console.log(descHobby);

//2-字符串模板
console.log(`<div>
<span>${userName}</span>
</div>
`);

//3-模板自动拆分
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
    return 
}

var myName = 'WangYibo';
var getAge = function (){
    return 30;
};

test `hello my name is ${myName}, i'm ${getAge()} years old.`;