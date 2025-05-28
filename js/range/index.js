function rangeRight(start=0, end, step=1) {
    return range(start, end, step, true);
}

function range(start=0, end, step=1, isRight=false) {
    let array = []

    if(end === undefined){
        end = start
        start = 0
    }

    if(step === 0) return Array(end - 1).fill(start)

    if(end < 0){
        for(let i = start; i > end; i -= Math.abs(step)) array.push(i)
    }
    else{
        for(let i = start; i < end; i += step) array.push(i)
    }

    if(isRight) return array.reverse()

    return array
}

console.log(
    range(4),
    range(-4),
    range(1, 5),
    range(0, 20, 5),
    range(0, -4, -1),
    range(1, 4, 0),
    range(0))

console.log(
    rangeRight(4),
    rangeRight(-4),
    rangeRight(1, 5),
    rangeRight(0, 20, 5),
    rangeRight(0, -4, -1),
    rangeRight(1, 4, 0),
    rangeRight(0))