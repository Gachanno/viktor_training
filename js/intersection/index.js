

function intersection(user1, user2) {
    const resultArray = []
    user1.map((timeInterval) =>{
        for(let i = timeInterval[0] + 1; i < timeInterval[1]; i++){
            timeInterval.push(i)
        }
    })
    user2.map((timeInterval) =>{
        for(let i = timeInterval[0] + 1; i <= timeInterval[1]; i++){
            timeInterval.push(i)
        }
    })
    
    user1.forEach((timeInterval) => {
        user2.forEach((timeInterval2) => { 
            const intersectionTime = [...new Set(
                timeInterval.filter(value => timeInterval2.includes(value))
            )];
            intersectionTime.length > 1 &&
                resultArray.push([Math.min(...intersectionTime), Math.max(...intersectionTime)])
        })
    })
    return resultArray
}

console.log(
    intersection(
        [[8, 12], [17, 22]],
        [[5, 11], [14, 18], [20, 23]]
    )) // [[8, 11], [17, 18], [20, 22]]
console.log(
    intersection(
        [[9, 15], [18, 21]],
        [[10, 14], [21, 22]]
    )) // [[10, 14]]