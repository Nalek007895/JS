//////////EX1//////////////
function numberSplit(x) {
    let a = [];
    if(x % 2 == 0){
        a = [x/2,x/2];
        return a
    }
    else{
        a = [x/2-0.5,x/2+0.5];
        return a
    }
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));

//////////EX2//////////////
function highestDigit(x){
    const strReverse = x.toString().split('').sort().reverse()
    const number =  parseFloat(strReverse)
    const num = number[0]
    return number

}
console.log(highestDigit(373));
console.log(highestDigit(15874639));
console.log(highestDigit(1));

//////////EX3//////////////
function capToFront(kk){
     var sp = kk.split("");
    var caps = []; 
    var lower = []
    for (var i = 0; i < sp.length; i++)
        {
            if (sp[i] == sp[i].toUpperCase()){
                caps.push(sp[i]);
           //How can i remove the capital letter in "sp" array as I've pushed them into the caps Array**

            }
            if (sp[i] == sp[i].toLowerCase()){
                lower.push(sp[i]);
            }
        }
    return caps.join("").concat(lower.join(""));
}
console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));

//////////EX4//////////////
function totalVolum (x){
    let num 
    let sum = 0
    for(let i = 0 ; i < x.length ; i++){  
        num = 1;
        for(let j = 0 ; j < 1 ; j++){
            num *= x[i][j] 
            //return nu
        }
        sum += num 
    }
    return sum
}
console.log(totalVolum([[4,2,4],[3,3,3],[1,1,2],[2,1,1]]));
console.log(totalVolum([[2,2,2],[2,1,1]]));
console.log(totalVolum([[1,1,1]]));

//////////EX5//////////////
function getBudget(x){
    let sum = 0;
    for(let i = 0 ; i < x.length ; i++){
        sum += x[i].budget
    }
    return sum
    /*let number = x.reduce(function (acc, current) {
        return acc + current.budget
    }, sum)
    return number;*/
}
console.log(getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));
console.log(getBudget([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]));

//////////EX6//////////////
function removeDups(x){
    let AA = Array.from(new Set(x))
    return AA
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Tayler","John"]));

//////////EX7//////////////
function sumTwoSmallestNums(arr) {
    arr.sort(function(a, b) {
        return a - b;
      });
    let num 
    let n = 1
    for(let i = 0 ; i < n; i++){
        if(arr[i] > -1){
            num = arr[i] + arr[i+1]
        }else{
            n += 1
        }    
    }
    return num
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]) );
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) );
console.log(sumTwoSmallestNums([2, 9, 6, -1]) );
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) );
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) );

//////////EX8//////////////
function simplePair(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j){
                if (arr[i] * arr[j] === n) {
                    return "["+arr[i]+","+arr[j]+"]"
                }
            }

        }
    }

}
console.log(simplePair([1, 2, 3], 3));
console.log(simplePair([1, 2, 3], 6));
console.log(simplePair([1, 2, 3], 9));

//////////////////ex9/////////////////////////
function digitalClock(secs){
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    if(hours > 23){
        hours %= 24
    }
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        //.filter((v,i) => v !== "00" || i > 0)
        .join(":")
}
//console.log(toHHMMSS(1025));
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));

/////////////////////////////////////////
function isValidIP(ipaddress) {
    /*if (/^(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)\.(25[0-5]|2[0-4][0-9]|[1]?[1-9][1-9]?)$/.test(ipaddress)) {
        return (true)
    }
    return (false)*/
    
    ///////////////////////////////
    function isValidIP(ipaddress) {
        var a = ipaddress.split('.')
        var number = parseFloat(a[1])
        
        if(a.length < 4 || a.length >4){
            return false
        }else{
        var b1 = a[0].split('')
        var b2 = a[1].split('')
        var b3 = a[2].split('')
        var b4 = a[3].split('')
    
        for (var i = 0; i < a.length; i++) {
            if(b1[0] == 0 || b2[0] == 0 || b3[0] == 0 || b4[0] == 0){
                return false
            }
    
            if (a[i] < 1 || a[i] > 255) {
                return false
            }
        }}
        return true


}
console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("103.45.67.89"));
console.log(isValidIP("123.045.67.89"));
console.log(isValidIP("123.45.256.89"));
console.log(isValidIP("123.45.67.90"));
