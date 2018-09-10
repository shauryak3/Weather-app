var asyncAdd = (a , b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if( typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }else {
                reject('please input numbers only');
            }
        }, 2500);
    });
};

asyncAdd(5,7).then((result) => {
    console.log('result is', result);
    },(errorMsg) => {
    console.log('error :',errorMsg );
});

// var somePromise = new Promise((resolve , reject) => {
//     //asynchronous work
//     setTimeout(() => {

//     }, 5000); 
//     // resolve('It worked');
//     reject('promise failed');
// });

// somePromise.then((msg) => {
//     // if resolved
//     console.log(msg);
// },(errorMsg) => {
//     console.log('error :',errorMsg );
// });