var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    })
}

asyncAdd(10, '7').then(
    (result) => {
        console.log(result);
        return asyncAdd(result, 33);
    }).then((result) => {
    console.log('Should be 53', result);
    }).catch((errorMessage) => {
    console.log(errorMessage);
});



// var somePromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         //resolve('Hey. It worked');
//         reject('Unable to fufill promise');
//     },2500);
// });

// somePromise.then((msg)=>{
//     console.log('Success:',msg);
// },(error)=>{
//     console.log(error);
// });