//loops
let continueLoopWhileAbove0 = 10;

//while
// will loop 0 or more times; values the condition first 
while (continueLoopWhileAbove0 ) {
    console.log(continueLoopWhileAbove0);
    continueLoopWhileAbove0--;
}

// reads it as While (10 == True) then chagne while (9 == true) and will keep going unitl 0 == ture

//do/while
// will loop at least once, then as many times as the condition is true; so will loop 1 or more times
do {
    console.log(continueLoopWhileAbove0);
    continueLoopWhileAbove0--;
} while (continueLoopWhileAbove0);

//for
// the let here is only for this for statement and not effect anything else; 
//delcare variable at ten and evaluate until it gets to zero

for (let continueLoopWhileAbove0 = 10; 
        continueLoopWhileAbove0;    
        continueLoopWhileAbove0--)
        {
    console.log(continueLoopWhileAbove0)
    }


//functions:
let name1 = "Ben";
let name2 = "cruz";

printName(name1);
printName2(name2);

//assign functions to a variable where as name is the parameters
const printName = funciton (name3) {
    console.log(name3);
};

//declare a function
funciont printName2(name3) {
    console.log(name3);
}


let isEven = function (number) {
    return number % 2 ==0;
};
let answer = isEven(25); //false

/*
Types of JavaScript Loops:
for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - also loops through a block of code while a specified condition is true

We will also cover these keywords:
The break statement
The continue statement
*/*