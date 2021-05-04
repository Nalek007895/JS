function who() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("1");
        }, 200);  
    });
}

function what() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("2");
        }, 300);
    });
}

function where() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("3");
        }, 500);
    });
}

async function msg(){
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}
console.log("we are looking for :")
msg();
console.log("Hello")