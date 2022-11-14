var bottles = 100;

function lyrics() {

    while (bottles  >= 0){
        
        bottles--;
        
        if (bottles <= 99 && bottles > 1){
            console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer. Take 1 down, pass it around, " + bottles + " of beer on the wall.")
        } else if (bottles === 1){
            console.log(bottles + " bottle of beer on the wall, " + bottles + " bottle of beer. Take 1 down, pass it around, no more bottles of beer on the wall.")
        } else if (bottles === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
        }

    }
    
}

lyrics();
