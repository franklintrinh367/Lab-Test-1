
const multiplyNumbers = (mixedArray) => {
    let res = [];
    for(var val of mixedArray) {
        if(Number.isInteger(val)) {
            val *= 5;
            res.push(val);
        }
    }
    return new Promise(
        (resolve, reject) => {
            if(res && res.length <= 0 ) reject("There is no integer in this array");
            else resolve(res)
        }
    ).catch(err => console.log(err))
}

multiplyNumbers([1, 'as']).then(
    (res) => {
        console.log(res)
    }
)
;