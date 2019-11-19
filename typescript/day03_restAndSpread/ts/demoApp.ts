/**
 * Rest and Spread 操作符：
 *  用来声明任意数量的方法参数 
 */

 //Rest
 function func1(name: string, ...args: any) {
   args.forEach(function (arg: any){
       console.log(arg);
   }); 
   console.log(name);
}

func1('wyb', 1, 2, 3);
func1('wyb', 7, 8, 9);

function func2(name: string, age: number, sex: string) {
    console.log(name);
    console.log(age);
    console.log(sex);
}

var person: Array<any> = ['wyb', 30];
//spread表达式
func2(...person);




var userNames: Array<string> = ["wyb","hhj","wzc"];
