function promiseTimeout(ms) {
    return new Promise((resolve, reject) =>{
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Start!!");
    await promiseTimeout(10000);
    console.log("Stop!!");
    await promiseTimeout(10000);
    console.log("KEEHEEE!!");
}
console.log("KUY!!");
run();
console.log("HEE!!");