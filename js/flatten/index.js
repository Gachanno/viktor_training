const flattenObj = (obj) =>{
    resultObj = {}
    for(const key in obj){
        if(typeof obj[key] !== 'object'){
            resultObj[key] = obj[key]
        }
        else{
            resultObj = {...resultObj, ...flattenObj(obj[key])} 
        }
    }
    return resultObj
}

function flatten(list) {
    list = list
    .flat(Infinity)
    .map((element) => {
        if(typeof element === 'object' && !Array.isArray(element) && element !== null) return flattenObj(element)
        else return element
    })
    
    return list
}

console.log(flatten([1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]))
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

