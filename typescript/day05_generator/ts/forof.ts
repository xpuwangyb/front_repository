var myArray = [1,2,3,4];
myArray.desc = "This is my array";
myArray.forEach(val => console.log(val));

/**
 * 
 * for***in
 */
console.log("****for in*******");

for (const key in myArray) {
    if (myArray.hasOwnProperty(key)) {
        const element = myArray[key];
        console.log(`**key:${key}******val:${element}`);        
    }
}

console.log("****for of*******");
for (const iterator of myArray) {
    if(iterator >2){
        break;
    }
    console.log(`**iterator:${iterator}****`);    
}

var sayHelloString = "Hello World";
for (const ele of sayHelloString) {
    console.log(`*****ele:${ele}****`);    
}