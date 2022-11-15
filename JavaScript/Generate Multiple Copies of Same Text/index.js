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
// When calling the function add whatever number or even text you want to be repeated and edit the amount of times
