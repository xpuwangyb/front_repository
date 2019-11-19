/**
 * 参数类型：
 *     在参数名称后面使用冒号来指定参数的类型
 * 
 */
//string
var myname: string = 'zhai liang';
//any
var alias: any = 'xixi';
alias = 13;
//number
var age: number = 13;
//boolean
var man: boolean = true;

function test(): void {
    
}

function test2(name: string): string {
    return 'wyb';
}

class Person {
    name: string;
    age: number;
}

var zhangsan: Person = new Person();
zhangsan.name =  'zhangsan';
zhangsan.age = 1;
console.log(zhangsan);
