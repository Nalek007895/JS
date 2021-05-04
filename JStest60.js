function isValidIP(ipaddress) {
    var a = ipaddress.split('.')
    var number = parseFloat(a[1])
    var b = a[0].split('')

    for (var i = 0; i < a.length ; i++) {
        return a[i]

            /*if(a[i] < 1 || a[i] > 255){
                return false
            }else{
                return true
            }
        return number*/
    }
    //return a.length

}
//console.log(isValidIP("1.2.3.4"));
//console.log(isValidIP("1.2.3"));
//console.log(isValidIP("1.2.3.4.5"));
//console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
//console.log(isValidIP("123.045.067.089"));

