/**
 * Paste this solution into https://stanford.edu/~cpiech/karel/ide.html
 **/

function main(){
   odd();
   even();
   recalibrate();
   odd();
   even();
   recalibrate();
   odd();
   recalibrate();
}

function odd() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   turnLeft();
}

function even() {
   move();
   turnLeft();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   turnLeft();
   turnLeft();
   turnLeft();
   move();
}

function recalibrate() {
   turnLeft();
   turnLeft();
   turnLeft();
}
