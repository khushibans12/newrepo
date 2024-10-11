function CountDigit(num){
    let count = 0;
    while(num!=0){
        count++;
        num = parseInt(num/10);
    }
    return count;
}

function sumdigit(num){
    let sum = 0;
    while(num!=0){
        sum = sum + num%10;
        num = parseInt(num/10);
        
    }
    return sum;
}

function reverse(num){
    let rev =0;
    while(num!=0){
        let ld = num%10;
        rev = rev*10 + ld;
        num = parseInt(num / 10);
    }
    return rev;
}