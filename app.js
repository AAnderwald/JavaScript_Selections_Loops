console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 //odd using foor loop
for (let x = 1; x <=100; x++) {     //x is equal to one; it's less then or equal to 100, add one to the number then go to the next number
    if (x % 2 ==1)                  // if divided by two with a remainder
    console.log (x)                 // print out the numbers if there is a remainder
    else {}                         // this can be blank because you are only printing out the odd number or just don't put it
}

/*
 // refractor the code to be more efficient; odd is very other
 for (let xx = 1; xx <=100; xx += 2) {  //let xx equal one, +=2 mean take the 1 and add two untill hit 100 this will skip all evens without looking at it
      console.log (xx) 
}

 // refractor even more the code to be more efficient; odd is very other
 for (let xx2 = 1; xx2 < 99; xx2 += 2) {  // need to go only to 100 but don't care about 100 so take to 99
    console.log (xx2) 
}
*/


//even using while loop
let z = 1;

while (z <=100) {
    if (z % 2 ==0) {                //print out the number if there is not a remainder
        console.log (z); 
    }
    z++;
}


/*
for (let zz = 0; zz <=100; zz +=2) {
    console.log(zz);
}

*/


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let a = 1; a <=100; a++) {
    if (a % 3 ==0)
    console.log ("FIZZ")   
}

for (let a = 1; a <=100; a++) {
    if (a % 5 ==0)
    console.log ("BUZZ")
}

for (let a = 1; a <=100; a++) {
    if (a % 3 && a % 5 ==0)
    console.log ("FIZZBUZZ")
}


//or this was given in class
/*
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) { console.log ('${i} FIZZBUZZ');}
    else if (i % 3 == 0) { console.log ('${i} FIZZ');} 
    else if (i % 5 == 0) { console.log ('${i} BUZZ');}
}
*/


