function criticalCode(){
    throw "throwing an exception";
}

function logError(theException){
    console.log(theException);
}

console.log("\n******************************\n");

try{
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n********************************\n");

try {
    throw "An eeeeeee";
} catch (ex) {
    console.log("Got");
    logError(ex);
}

console.log("\n********************************\n");

try{
    criticalCode();   
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("Code that always");
}

function hello(){
    console.log("\n*************************\n");
}