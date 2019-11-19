/**
 * 默认参数：
 *     在参数声明后面用等号来指定参数的默认值
 * 
 */

 var uName: string = "zhai liang";
 
 function test3(a: string, b: string, c: string = "jojo") {
     console.log(a);
     console.log(b);
     console.log(c);    
 }

 test3("xxx", "yyy", "zzz");
 test3("xxx", "yyy");