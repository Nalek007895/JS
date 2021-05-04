function promiseTimeout(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms);
    });
}

promiseTimeout(2000)
    .then(()=>{
        console.log("DDDDD");
        return promiseTimeout(1000);
    })
    .then(()=> {
        console.log("AAAAA");
        return Promise.resolve(42);
    })
    .then((result)=> {
        console.log(result);
    })
    .catch(()=> {
        console.log("Error!");   
    })