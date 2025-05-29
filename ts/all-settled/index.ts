type TPromiseResult =   |{ status: 'resolved'; value: any }
                        | { status: 'rejected'; reason: any }

function getResult(promises:Promise<any>[]) {
    return Promise.all(
        promises.map(promise =>
            promise
            .then(value => ({ status: 'resolved', value }))
            .catch(reason => ({ status: 'rejected', reason }))
        )
    )
}

const delay = (timeout:number):Promise<void>=>{
    return new Promise((resolve) => setTimeout(resolve, timeout))
}

const promises = [
    delay(50).then(() => 42),
    delay(75).then(() => { throw 'nope'; })
];

getResult(promises).then(result => console.log(result))
