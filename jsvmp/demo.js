!function (_stack) {
    var register;
    var variable = {};
    for (let i = 0; i < _stack.length; i++) {
        instruct = _stack[i][0];
        left = _stack[i][1];
        right = _stack[i][2];
        if (instruct === 110) {
            variable[right] = ''
        }
        if (instruct === 66) {
            if (right === '?') {
                variable[left] = register
            } else {
                variable[left] = right
            }
        }
        if (instruct === 88) {
            register = variable[left] + variable[right]
        }
    }
    ;console.log(variable)
}([[110, 'var', 'a'], [66, 'a', 1000], [110, 'var', 'b'], [66, 'b', 1000], [110, 'var', 'c'], [66, 'c', 1000], [110, 'var', 'd'], [88, 'a', 'b'], [66, 'd', '?'], [110, 'var', 'e'], [88, 'd', 'c'], [66, 'e', '?']])