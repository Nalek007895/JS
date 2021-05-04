
/*function sortDescending(num) { 
    const strReverse = num.toString().split('').sort().reverse().join('')
    const number =  parseFloat(strReverse)
    return number
}
console.log(sortDescending(458221)) */

/*const array1 = 'THee';
const map1 = array1.split('').map(x => x===x.toUpperCase()?x.toLowerCase():x.toUpperCase());
console.log(map1);*/
// expected output: Array [2, 8, 18, 32]

/*
const myString = 'Hello Nemo word Sentence number'
const ccc = 'Nemo'
const indexOfFirst = myString.split(' ') .indexOf(ccc);
if(indexOfFirst > -1){
    console.log(indexOfFirst + 1)
}else{
    "kuyyyyyyyy"
}*/
/*
function findNemo(sentence) {
    const ccc = 'Nemo'
    const indexOfFirst = sentence.split(' ') .indexOf(ccc);
    if(indexOfFirst > -1){
         return ( "I found Nemo at "+(indexOfFirst+1)+"!")
    }else{
         return ( "I can't find Nemo :(")
    }
}
console.log(findNemo("Nemo is me"))*/
/*
function reverseOdd(str) {
    return str.split(" ").map(w => w.length%2 ? [...w].reverse().join("") : w).join(" ");
  }*/
function getMiddle(str) {
    const x = str.length
    if ((x % 2) === 0) return str.substring(x / 2 - 1, x / 2 + 1)
    else return str.substring(x / 2, x / 2 + 1)
}
console.log(getMiddle("Nemoisme"))