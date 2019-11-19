/**
 * 默认参数：
 *     在参数声明后面用等号来指定参数的默认值
 *
 */
var uName = "zhai liang";
function test3(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
test3("xxx", "yyy", "zzz");
test3("xxx", "yyy");
