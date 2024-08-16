//Random number => system (Math.random())
//user => prompt()

//Problem 1

//random  number => 1-5

// let randomNumber = Math.floor(Math.random() * 5) + 1   //0.0-4.99 ==> 0-4
// console.log(randomNumber)

// let userInput = Number(prompt('Enter any number between 1-5'))
// console.log(userInput)
// console.log(typeof(userInput))

// if (randomNumber === userInput) {
//     console.log('Guess is correct')
// }
// else {
//     console.log('Guess is incorrect')
// }

//====================================================================

//Problem 2

//user 3 chance => duration

//for loop

// let randomNumber = Math.floor(Math.random() * 5) + 1   //0.0-4.99 ==> 0-4
// console.log(randomNumber)

// for (let i = 0; i < 3; i++) {
//     let userInput = Number(prompt('Enter any number between 1-5'))
//     console.log(userInput)
//     console.log(typeof (userInput))

//     if (randomNumber === userInput) {
//         console.log('Guess is correct')
//     }
//     else {
//         console.log('Guess is incorrect')
//     }
// }

//=====================================================

//Problem 3

// let randomNumber = Math.floor(Math.random() * 5) + 1   //0.0-4.99 ==> 0-4
// console.log(randomNumber)

// for (let i = 0; i < 3; i++) {
//     let userInput = Number(prompt('Enter any number between 1-5'))
//     console.log(userInput)
//     console.log(typeof (userInput))

//     if (randomNumber === userInput) {
//         console.log('Guess is correct')
//         break
//     }
//     else {
//         console.log('Guess is incorrect')
//     }
// }

//======================================================================

//Problem 4

//while loop => infinite chnace till guess is correct

let randomNumber = Math.floor(Math.random() * 5) + 1   //0.0-4.99 ==> 0-4
console.log(randomNumber)

let userInput

while (userInput !== randomNumber) {
    userInput = Number(prompt('Enter any number between 1-5'))
    console.log(userInput)
    if (randomNumber === userInput) {
        console.log('Guess is correct')
        break
    }
    else {
        console.log('Guess is incorrect')
    }
}

let a
a = 20//update

















