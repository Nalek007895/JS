function yay(){
    return new Promise((resolve, reject) =>{
        const val = Math.round(Math.random() * 1);
        val ? resolve("Lucky!!") : reject("Nope!!");
    });
}

async function msg(){
    try{
        const msg = await yay();
        console.log(msg);
    }catch(err){
        console.log(err);
    }
}

msg();
msg();
msg();
msg();
msg();
msg();