
const delayedPromise = (num) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(()=>{ 
            if(!Number.isInteger(num)) reject("Not an integer");
            else
            resolve(num*num)}, 500);
    })
    return promise;
}

const delayedPromise2 = (num) => {
    return delayedPromise(num);
}

const resolveAll = () => {
    const result = new Promise(function (resolve, reject) {
        return Promise.all([delayedPromise(5), delayedPromise2(1)])
            .then((values) => console.log(values));
    })
    return result;
} 
resolveAll()
