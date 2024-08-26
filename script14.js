
//array

// let y = []
// let x = ""

//Problem 1
let birthYear = [1995, 1998, 1990, 1890]

//currenyYear-bithYear= age

//age =[28,25,30,34]

// let allAge = []
// for (let i = 0; i < birthYear.length; i++) {
//     //console.log(birthYear[i])
//     //console.log(2024 - birthYear[i])
//     let ag = 2024 - birthYear[i]
//     allAge.push(ag)
// }
// console.log(allAge)


//Problem 2

let scores = [23, 67, 90, 45, 77, 98]
//+2
//[25,69,92...]
let newScore = []
for (let i = 0; i < scores.length; i++) {
    //console.log(scores[i]+2)
    let s1 = scores[i] + 2
    newScore.push(s1)
}

console.log(newScore)


//Problem 3
let numbers = [20, 45, 89, 33, 12, 10, 77, 35, 31]

//>35 
//[45,89,77]

let greater35 = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 35) {
        greater35.push(numbers[i])
    }
}

console.log(greater35)


//Problem 4

let marks = [2, 3, 4]
//9
let sum = 0//2 //5
for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i] //0+2 => 2
    //                    2+3 => 5
    //                    5+4=>9
}

console.log(sum)








