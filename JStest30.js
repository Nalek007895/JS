function equation(str) {
    const mannun = str.split('');
    let num1 = parseInt(mannun[0]);
    let num2 = parseInt(mannun[2]);
    let num3 = parseInt(mannun[4]);
    let num4 = parseInt(mannun[6]);
    let num5 = parseInt(mannun[8]);
    //5+
    if(mannun[1] == '+' && mannun[3] == '+' && mannun[5] == '+' && mannun[7] == '+'){
        return num1 + num2 + num3 + num4 + num5;
    }else if((mannun[1] == '+' && mannun[3] == '+') && (mannun[5] == '+' && mannun[7] == '-')){
        return num1 + num2 + num3 + num4 - num5;
    }else if((mannun[1] == '+' && mannun[3] == '+') && (mannun[5] == '-' && mannun[7] == '+')){
        return num1 + num2 + num3 - num4 + num5;
    }else if((mannun[1] == '+' && mannun[3] == '-') && (mannun[5] == '+' && mannun[7] == '+')){
        return num1 + num2 - num3 + num4 + num5;
    }else if((mannun[1] == '-' && mannun[3] == '+') && (mannun[5] == '+' && mannun[7] == '+')){
        return num1 - num2 + num3 + num4 + num5;
    }else if((mannun[1] == '-' && mannun[3] == '-') && (mannun[5] == '+' && mannun[7] == '+')){
        return num1 - num2 - num3 + num4 + num5;
    }else if((mannun[1] == '-' && mannun[3] == '+') && (mannun[5] == '-' && mannun[7] == '+')){
        return num1 - num2 + num3 - num4 + num5;
    }else if((mannun[1] == '-' && mannun[3] == '+') && (mannun[5] == '+' && mannun[7] == '-')){
        return num1 - num2 + num3 + num4 - num5;
    }else if((mannun[1] == '+' && mannun[3] == '-') && (mannun[5] == '-' && mannun[7] == '+')){
        return num1 + num2 - num3 - num4 + num5;
    }else if((mannun[1] == '+' && mannun[3] == '-') && (mannun[5] == '+' && mannun[7] == '-')){
        return num1 + num2 - num3 + num4 - num5;
    }else if((mannun[1] == '+' && mannun[3] == '+') && (mannun[5] == '-' && mannun[7] == '-')){
        return num1 + num2 + num3 - num4 - num5;
    }else if((mannun[1] == '-' && mannun[3] == '-') && (mannun[5] == '-' && mannun[7] == '+')){
        return num1 - num2 - num3 - num4 + num5;
    }else if((mannun[1] == '-' && mannun[3] == '+') && (mannun[5] == '-' && mannun[7] == '-')){
        return num1 - num2 + num3 - num4 - num5;
    }else if((mannun[1] == '-' && mannun[3] == '-') && (mannun[5] == '+' && mannun[7] == '-')){
        return num1 - num2 - num3 + num4 - num5;
    }else if((mannun[1] == '+' && mannun[3] == '-') && (mannun[5] == '-' && mannun[7] == '-')){
        return num1 + num2 - num3 - num4 - num5;
    }else if((mannun[1] == '-' && mannun[3] == '-') && (mannun[5] == '-' && mannun[7] == '-')){
        return num1 - num2 - num3 - num4 - num5;
    }else if(mannun[1] == '+' && mannun[3] == '+'){
        return num1 + num2 + num3;
    }else if(mannun[1] == '-' && mannun[3] == '-'){
        return num1 - num2 - num3;
    }else if(mannun[1] == '*' && mannun[3] == '*'){
        return num1 * num2 * num3;
    }else if(mannun[1] == '+' && mannun[3] == '-'){
        return num1 + num2 - num3;
    }else if(mannun[1] == '+' && mannun[3] == '*'){
        return num1 + num2 * num3;
    }else if(mannun[1] == '-' && mannun[3] == '+'){
        return num1 - num2 + num3;
    }else if(mannun[1] == '*' && mannun[3] == '+'){
        return num1 * num2 + num3;
    }else if(mannun[1] == '-' && mannun[3] == '*'){
        return num1 - num2 * num3;
    }else if(mannun[1] == '*' && mannun[3] == '-'){
        return num1 * num2 - num3;
    }else if(mannun[1] == '*'){
        return num1 * num2;
    }else if(mannun[1] == '-'){
        return num1 - num2;
    }else if(mannun[1] == '+'){
        return num1 + num2;
    }
} 
console.log(equation("1+1+1+1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1"));
