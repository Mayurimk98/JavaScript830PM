let fruits = ["Mango", "banana", "apple"]

//object
//methods and property

//length

console.log(fruits.length)//3

//methods

//1.push()
// let y1=fruits.push('santra')
// console.log(y1)//4
// console.log(fruits)

//2. unshift()
// let y2=fruits.unshift('cherry')
// console.log(y2)
// console.log(fruits)

//3. shift()
// let y3=fruits.shift()
// console.log(y3)
// console.log(fruits)

//4. pop()
// let y4=fruits.pop()
// console.log(y4)
// console.log(fruits)

//5. includes()
// let y5=fruits.includes('Mango')
// console.log(y5)

//6. indexOf()
// let y6=fruits.indexOf('Apple')
// console.log(y6)

//7. join()
// let y7=fruits.join("--")
// console.log(y7)

//8. flat()
// let arr=[[2,3,4],[9,6,7]]
// let y8=arr.flat()
// console.log(y8)

// let marks = [20, 30, 40, 50, 60]
// //+2 
// //[22,32,42]
// let plus2 = []
// for (let i = 0; i < marks.length; i++) {
//     let aa = marks[i] + 2
//     plus2.push(aa)
// }
// console.log(plus2)

// //Map()
// let plusTwo = marks.map(function (ele, index, arr) {
//     return ele + 2
// })
// console.log(plusTwo)

//

let marks = [20, 30, 40, 50, 60, 25, 90, 88]
//>30
//[40,50,60,90,88]

// let greater30 = []
// for (let i = 0; i < marks.length; i++) {
//     if (marks[i] > 30) {
//         greater30.push(marks[i])
//     }
// }
// console.log(greater30)

//filter()
// let greater30 = marks.filter(function (ele, index, arr) {
//     return ele > 30
// })
// console.log(greater30)


// let scores = [2, 3, 4, 5]
// //addition

// let sum = 0
// for (let i = 0; i < scores.length; i++) {
//     sum = sum + scores[i]
// }
// console.log(sum)

// //reduce()
// let sum1 = scores.reduce(function (acc, ele, index, arr) {
//     return acc + ele
//     //10+2
//     //12+3
// },0)
// console.log(sum1)

//==============================================================

let student = ["Mayuri", "Ram", "sham", "sita"]
//Welcome Mayuri
//Welcome Ram

for (let i = 0; i < student.length; i++) {
    console.log('Welcome ' + student[i])
}

//forEach()
student.forEach(function (ele, index, arr) {
    console.log('Welcome ' + ele)
})

//map()
//filter()
//reduce()
//forEach()










// function sum(){
//     console.log(10+2)
// }

