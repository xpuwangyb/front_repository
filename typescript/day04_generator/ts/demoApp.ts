//generator函数：控制函数的执行过程，手工暂停和恢复代码执行

function* doSomething(): any{
console.log("start");
yield;
console.log("finish");
}

var func1 = doSomething();
func1.next();
func1.next();

var startIndex:number = 0;
function* createIndex() { 
    while (startIndex < Number.MAX_VALUE) {
        yield ++startIndex;    
    }   
}

var generatorIndex = createIndex();

for(var i = 0; i<5; i++){
    var indexVal = generatorIndex.next();
    console.log(indexVal);
    
}