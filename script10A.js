// console.log(Math.floor(12.34))//12
// console.log(Math.ceil(12.34))//13
// console.log(Math.round(12.54))//12  //13

// //integer

// //12.34

// //                      0   1   2       12   12.34  13 

//1-5
// console.log(Math.floor(Math.random()*5)+1 )//0.0-0.99   //0.0-4.99 //0-4 //1-5


//Guess number

//system input ==> 1-5
//user input => 1-5

//system input ==user input ==> your guess is correct
//your guess is incorrect

//==========================================================

//Problem 1

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// let userInput = prompt("Enter any number btw 1-5")
// console.log(userInput)

// // if (randomNumber == userInput) {
// //     console.log('Your guess is correct')
// // }
// // else {
// //     console.log('Your guess is incorrect')
// // }

// //problem 2(ternary opeartor)
// randomNumber == userInput ? console.log('Your guess is correct') : console.log('Your guess is incorrect')

//problem 3

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)
// console.log(typeof randomNumber)

// let userInput = Number(prompt("Enter any number btw 1-5"))
// console.log(userInput)
// console.log(typeof userInput)

// if (randomNumber === userInput) {
//     console.log('Your guess is correct')
// }
// else {
//     console.log('Your guess is incorrect')
// }

//==============================================================

//problem 3 (3 chance)  => duration

//for loop
// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// for (let i = 0; i < 3; i++) {
//     let userInput = Number(prompt("Enter any number btw 1-5"))
//     console.log(userInput)

//     if (randomNumber === userInput) {
//         console.log('Your guess is correct')
//     }
//     else {
//         console.log('Your guess is incorrect')
//     }
// }

//problem 4

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// for (let i = 0; i < 3; i++) {
//     let userInput = Number(prompt("Enter any number btw 1-5"))
//     console.log(userInput)

//     if (randomNumber === userInput) {
//         console.log('Your guess is correct')
//         break
//     }
//     else {
//         console.log('Your guess is incorrect')
//     }
// }

//==============================================================

//problem 5
//while()  => user inifite  =>

// let randomNumber = Math.floor(Math.random() * 5) + 1
// console.log(randomNumber)

// let userInput
// while (userInput !== randomNumber) {
//     userInput = Number(prompt("Enter any number btw 1-5"))
//     console.log(userInput)

//     if (randomNumber === userInput) {
//         console.log('Your guess is correct')
//         break
//     }
//     else {
//         console.log('Your guess is incorrect')
//     }
// }

//===================================================

//do while

//while

//1-5
// let i = 1
// while (i <= 5) {
//     console.log(i)
//     i++
// }


// //block code execute

// let j=1 //j=1
// do{
//     console.log(j) //1 2 3 4 5
//     j++//2 3 4 5 6
// }
// while(j<=5)//2<=5 3<=5 4<=5 5<=5 6<=5

//=========================================================

//problem 6

let randomNumber = Math.floor(Math.random() * 5) + 1
console.log(randomNumber)

let userInput
do {
    userInput = Number(prompt("Enter any number btw 1-5"))
    console.log(userInput)

    if (randomNumber === userInput) {
        console.log('Your guess is correct')
        break
    }
    else {
        console.log('Your guess is incorrect')
    }
}
while (userInput !== randomNumber)










