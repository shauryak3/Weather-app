var somePromise = new Promise((resolve , reject) => {
    //asynchronous work
    setTimeout(() => {

    }, 5000); 
    // resolve('It worked');
    reject('promise failed');
});

somePromise.then((msg) => {
    // if resolved
    console.log(msg);
},(errorMsg) => {
    console.log('error :',errorMsg );
});