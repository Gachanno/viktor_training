"use strict";
function get(obj, path, defaultValue = undefined) {
    let currentLevel = obj;
    const pathsArray = path.split('.');
    for (const key of pathsArray) {
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
const obj = {
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
