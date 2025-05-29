function invert(obj) {
    var invertedObj = {};
    for (var key in obj)
        invertedObj[obj[key]] = key;
    return invertedObj;
}
console.log(invert({ a: 1 })); // {1: 'a'}
console.log(invert({ a: { b: 2 } })); // {'[object Object]': 'a'}
