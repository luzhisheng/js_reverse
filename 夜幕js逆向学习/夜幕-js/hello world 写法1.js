function test(){
    var input_str = [103, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
    input_str[0] = input_str[0] + 1;
    output_str = [];
    for(var index=0;index<input_str.length;index++){
        output_str.push(String.fromCharCode(input_str[index]))
    }
    return output_str
}
var s = test();
console.log(s.join(''));