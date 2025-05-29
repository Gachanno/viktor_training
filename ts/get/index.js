function get(obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    var currentLevel = obj;
    var pathsArray = path.split('.');
    for (var _i = 0, pathsArray_1 = pathsArray; _i < pathsArray_1.length; _i++) {
        var key = pathsArray_1[_i];
        if (currentLevel.hasOwnProperty(key)) {
            currentLevel = currentLevel[key];
        }
        else {
            currentLevel = defaultValue;
            break;
        }
    }
    return currentLevel;
}
var obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f'
    }
};
console.log(get(obj, 'a.b')); // { c : 'd' }
console.log(get(obj, 'a.b.c')); // 'd'
console.log(get(obj, 'a.e')); // 'f'
console.log(get(obj, 'a.x.e')); // undefined
console.log(get(obj, 'a.x.e', true)); // true
console.log(get(obj, 'a.x.e', 'My default value')); // My default value
