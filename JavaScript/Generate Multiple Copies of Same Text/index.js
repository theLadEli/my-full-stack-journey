var count = [];
var countValue = 1;

function repeatNumbers(number,times){
    
    while (countValue <= times) {
    count.push(number);
    countValue++;
    }
    
    console.log(count);
}

repeatNumbers(90,20);
