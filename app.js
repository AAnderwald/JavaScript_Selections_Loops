console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 //odd
for (let x = 1; x <=100; x++) { //x is equal to one; it's less then or equal to 100, add one to the number then go to the next number
    if (x % 2 ==1) // if divided by two with a remainder
    console.log (x) // print out the numbers if there is a remainder
    else {} // this can be blank because you are only printing out the odd number
}


//even
for (let z = 1; z <=100; z++) { // varialbe ot z and ++ is increment it
    if (z % 2 ==0) // remainder of zero
    console.log (z) //pring out the number if there is not a remainder
    else {}
} 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let a = 1; a <=100; a++) {
    if (a % 3 ==0)
    console.log ("FIZZ")
    else {continue;}    
}

for (let b = 1; b <=100; b++) {
    if (b % 5 ==0)
    console.log ("BUZZ")
    else {continue;}    
}

for (let c = 1; c <=100; c++) {
    if (c % 3 && c % 5 ==0)
    console.log ("FIZZBUZZ")
    else {continue;}    
}