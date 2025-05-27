function canGetCount(n) {
    let count = 0
    return() =>{
        count += 1
        return count <= n ? 'yes' : 'no'
    }
}

const getOne = canGetCount(2);
getOne() === 'yes'
getOne() === 'yes'
getOne() === 'no'

// console.log(getOne() === 'yes')
// console.log(getOne() === 'yes')
// console.log(getOne() === 'no')


