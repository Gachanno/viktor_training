const namespace = (inputString) =>{
    const arrayName = inputString.split('.')
    const result = {}
    let currentLevel = result
    for(const item of arrayName){
        currentLevel[item] = {}
        currentLevel = currentLevel[item]
    }
    return result
}

console.log(namespace('a.b.c.d.e')); // {"a":{"b":{"c":{"d":{"e":{}}}}}}
