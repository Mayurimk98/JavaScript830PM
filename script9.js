// console.log(Math.floor(31.55))//31

// console.log(Math.floor(17.37)) //17

// console.log(Math.floor(-23.99))//-24

// //         -24  -23.99 -23  -22    -1    0     17   17.37   18

// console.log(Math.ceil(17.37))//18

// console.log(Math.ceil(-23.99))//-23



// // console.log(Math.ceil(89.11))//90

// //0.5 or >0.5 ==> 
// console.log(Math.round(13.50))//14
// console.log(Math.round(12.33))//12


// console.log(Math.random())//0.0-0.99

//1-5 

//console.log(Math.floor(Math.random()*5)+1) //0.0-4.99 //0-4//1-5

// console.log(Math.ceil(Math.random()*5)) //0.0-4.99 //0-5

// console.log(Math.ceil(0.0)) //0

//====================================================

//userInput ==> 1-5   => number

//random => system => number

//guess correct

//guress incorrect


let randomNumber = Math.floor(Math.random() * 5) + 1
console.log('randomNumber ' + randomNumber)

let userInput = prompt('Enter any number between 1-5')
console.log('userInput ' + userInput)

if (randomNumber == userInput) {
    console.log('You have guess correct number')
}
else {
    console.log('Sorry! you have guess incorrect number...please try another')
}

//for loop
//while loop
//do while







//to write script9.html file

//shift+1  => !



