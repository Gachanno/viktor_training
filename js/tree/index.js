'use strict';

export const tree = (inputValue) =>{
    inputValue = parseInt(inputValue)

    if(3 > inputValue) return null
    let result = ''
    let i = 0
    let space = "";
    while (i < inputValue) {
        space = "";
        let star = "";
        if(i === inputValue - 1){
            for (let j = 0; j < inputValue - 2; j++) space += " ";
            result += `${space}|${space}\n`
            break
        }
        for (let j = 0; j < inputValue - i - 2; j++) space += " ";
        for (let j = 0; j < 2 * i + 1; j++) star += "*";
        result += `${space}${star}${space}\n`
        i++;
    }

    return result
}
