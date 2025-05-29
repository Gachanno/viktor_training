"use strict";
function getResult(promises) {
    return Promise.all(promises.map(promise => promise
        .then(value => ({ status: 'resolved', value }))
        .catch(reason => ({ status: 'rejected', reason }))));
}
const delay = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
};
const promises = [
    delay(50).then(() => 42),
    delay(75).then(() => { throw 'nope'; })
];
getResult(promises).then(result => console.log(result));
