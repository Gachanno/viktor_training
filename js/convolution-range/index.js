function compress(list) {
    if(list.length === 0 || !Array.isArray(list)) return ''

    list.sort((a, b) => a - b)

    let result = []
    let start = list[0];
    let end = list[0];

    for (let i = 1; i <= list.length; i++) {
        const numb = list[i];
        if (numb === end + 1) {
            end = numb;
        } 
        else {
            if (start === end) {
                result.push(`${start}`);
            } else {
                result.push(`${start}-${end}`);
            }
            start = numb;
            end = numb;
        }
    }
    
    return result.join(',')
}

console.log(compress([1, 4, 5, 2, 3, 9, 8, 11, 0]))
console.log(compress([1, 4, 3, 2]))
console.log(compress([1, 4]))