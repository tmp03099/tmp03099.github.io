// console.log('%c---Nested if ----', 'color:yellow')
// //Nested if
// const num = 20;

// if (num>0){
//     alert("your number is positive");

//     if (num > 100){
//         alert("your number greater than 100");
//     }

//     else{
//         alert("your number is less than 100");
//     }

// } else{
//     alert("your number is negative");
// }

// console.log('%c---Else if ----', 'color:yellow')
// //Else if
// const userInput = prompt("What is your grade?")

// if(userInput >= 90){
//     console.log("Grade A");
// }
// else if (userInput >= 80){
//     console.log("Grade B");
// }
// else if (userInput >= 70){
//     console.log("Grade C");
// }
// else if (userInput >= 55){
//     console.log("Grade D");
// } else if (userInput < 55) {
//     console.log("Grade F");
// } else{
//     alert("please enter the number");
// }

console.log('%c---Loop ----', 'color:yellow')
// Loop

var count = 0;

//iterator | condition | incrementor
// each instance starting at 0 until 10 each loop add 1

for( let i = 0 ; i < 10 ; i++){
    console.log(i);
}

for( let i = 10; i > 0 ; i--){
    count = i;
    console.log(count);
}

console.log('%c---Loop 2 ----', 'color:yellow')
//Write a for loop for the given output: 1, 3, 5, 7, 9, 2, 4, 6, 8, 10

for( let i = 1; i <= 10 ; i += 2){

    console.log(i)
    if (i == 9){
        i = 0;
    }

}


console.log('%c---Loop 3 ----', 'color:yellow')
// create a loop that outputs multiples of 3 starting at 6 ending at 60

for (let i = 6; i <= 60 ; i+=3){
        console.log(i);
    }
    
console.log('%c---Loop 3  Way 2----', 'color:yellow')
for (let i = 2; i <= 60 ; i++){
    let num = i * 3;
    if(num> 0 && num <=60){

        console.log(num);
    }
}

console.log('%c---Loop 4 ----', 'color:yellow')
// Write a for loop for the given output:

let hash = "";

for (let i = 0 ; i < 7 ; i++){

    hash += "#"  ; //hash = hash + #;

    console.log(hash);
}

console.log('%c---Loop 5 print even between 0 - 10----', 'color:yellow')

for( let i = 0; i <=10 ; i++){

    if( i % 2 == 0){
        console.log(i);
    }
}

console.log('%c---Loop 5 prime/even/odd ----', 'color:yellow')

// Prime number don't need to initialized 1 . 
// A whole number greater than 1 that cannot be exactly divided by any number other than itself

for (let i = 1 ; i <=20; i++ ){

    let isPrime = true;
    for( let j = i - 1; j > 1; j-- ){
        if(i%j === 0){
            isPrime = false;
        }
    }

    if(isPrime === true){
        console.log("prime" , i , isPrime);
    }
    
}

console.log('%c---Loop 5 prime Way2 ----', 'color:yellow')
for (let i = 1 ; i <=20; i++ ){

    let isPrime = true;

    for(let j = 2; j < i ; j ++){

        if(i%j === 0){
            isPrime = false;
        }
    }

    if(isPrime === true){
        console.log("prime" , i , isPrime);
    }
}


for (let i = 1 ; i <=20; i++ ){
    if(i%2 === 0){
        console.log("even number" , i);
    }else {
        console.log("odd number" , i);
    }
}

// console.log('%c---For Each ----', 'color:yellow')
// movies.forEach( function(movie, idx){
// });

// console.log('%c---For Each loop Array ----', 'color:yellow')
// for (let item of movies){}

// console.log('%c---For loop Array ----', 'color:yellow')
// for(let i = 0; i< movies. length; i++){
//     console.log(movies [i]);
// }


console.log('%c---while loop----', 'color:yellow')
let counter = 0;

while (counter <= 5){
    console.log(counter);

    if (counter === 3){
        counter ++;
    }

    if (counter === 4){
        break;
    }

    counter++;
}

console.log('%c---multiples 3 as long as integers are less than 35----', 'color:yellow')



let multiples = 3;

while (multiples < 35){
    console.log(multiples);
    multiples +=3

}

console.log('%c---multiples 5 as long as integers are less than 100----', 'color:yellow')

let multiple = 5;
while (multiple < 100){

    console.log(multiple);

    multiple += 5;
}


console.log('%c-while loop print integers between 0 and 20--All numbers divisible by 2 should be multiplied by 3 before they are output', 'color:yellow')
let countNumber = 0;
let number = 1;

while (countNumber <= 20){
    
    if (countNumber % 2 === 0){
        number = countNumber *3;
        console.log(number);
    }
    countNumber++;
}


console.log('%c---prime number between 0-20 ----', 'color:yellow')
let numbr = 2;

while (numbr <=20){

    let isPrime = true;

    for( let i = 2 ; i < numbr ; i++ ){
        if (numbr % i === 0){
            isPrime = false;
            break;
        }
    }

    if (isPrime){
        console.log(numbr);
    }

    numbr++;
}


console.log('%c---prime number between 0-20 ----', 'color:yellow')
let prime = 2;

while(prime <=20){
    let isPrime = true;
    let i = 2;

    //checks if num is divisive/divisible by any number from i-num
    while(i<prime){
        if(prime % i === 0){
            isPrime = false;
            break;
        }
        i++;
    }
    if (isPrime){
        console.log(prime);
    }
    prime++;
}






