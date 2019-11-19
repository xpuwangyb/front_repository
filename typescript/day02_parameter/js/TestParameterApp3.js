/**
 * 可选参数：
 *     在方法的参数声明后面用问号来标明此参数为可选参数
 *
 */
function test4(a, c, b) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test4("wyb");
