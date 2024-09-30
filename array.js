
//array

// let a = []

// let no = [1, 2, 3, 4]
// //        0   1  2  3

// console.log(no[3])

// //Javascript
// //Object
// //property and methods

// //array object

// //array => length
// //number

// let student = ["mayuri", "ram", "sham", "sita"]
// console.log(student.length)

//Methods
//Action
//Return 

//1. push()
//add the ele at last ==> new length

// let marks = [12, 3, 40, 55, 88, 33, 21]
// //100
// let s1 = marks.push(100)
// console.log(s1)//8
// console.log(marks)

//2. unshift()
//add the ele at first => new lenegth

// let marks = [12, 3, 40, 33, 21]
// //100 
// let s2=marks.unshift(100)
// console.log(s2)//6
// console.log(marks)

//3. pop()
//remove ele from last => removed ele

// let marks = [12, 3, 40, 33, 21]
// let s3 = marks.pop()
// console.log(s3)
// console.log(marks)

//4. shift()
//remove ele from first ==> removed ele
// let marks = [12, 3, 40, 33, 21]
// let s4=marks.shift()
// console.log(s4)
// console.log(marks)

//5. indexOf()
//givethe index of given ele if found , if not found return -1  ==> number
// let marks = [12, 3, 40, 33, 21]
// //            0  1   2   3   4

// let s5=marks.indexOf(40)
// console.log(s5)

// let s6=marks.indexOf(401)
// console.log(s6)

//6. includes()
//check ele i present in array or not if present  true else false ==> boolean
// let marks = [12, 3, 40, 33, 21]
// let s6 = marks.includes(33)
// console.log(s6)

//7. flat()

// let ele = [[20, 90, 100], [77, 99, 44]]
// let s7 = ele.flat()
// console.log(s7)

// //8. join()  => string
// let student = ["mayuri", "prashant", "pati"]
// let a1 = student.join("--")
// console.log(a1)

//8. map()
//perform opeartion with each ele => new array
// let marks = [12, 3, 40, 33, 21]
//[17, 8,45,38,26]

// let a2 = marks.map(function (el, index, arr) {
//     return el + 5
// })
// console.log(a2)

//9. filter()
// let marks = [12, 3, 40, 33, 21]
// let a3 = marks.filter(function (ele, index, arr) {
//     return ele > 25
// })
// console.log(a3)

//10. reduce()
// let marks = [12, 3, 40, 33, 21]
// let a4 = marks.reduce(function (acc, ele, index, arr) {
//     return acc + ele
// }, 0)
// console.log(a4)

//11. forEach()
// let stu=["Mayuri","ram","sham"]
// stu.forEach(function(ele,index,arr){
//     console.log("Hello "+ele)
// })

//12. some()
// let marks = [12, 3, 40, 33, 21]
// let y1=marks.some(function(el,index,arr){
//     return el>25
// })
// console.log(y1)

//13. every()
// let marks = [12, 3, 40, 33, 21]
// let y2=marks.every(function(el,ind,arr){
//     return el>1
// })
// console.log(y2)

//14. find()

// let marks = [12, 3, 40, 33, 21]

// let u1=marks.find(function(el,index,arr){
//     return el>25
// })
// console.log(u1)

// //15. findIndex()

// let u2=marks.findIndex(function(el,index,arr){
//     return el>25
// })
// console.log(u2)

//16. slice()
//         -9   -8  -7  -6  -5  -4   -3  -2  -1                                        
let marks = [12, 3, 40, 33, 21, 11, 99, 99, 23]
//            0  1  2   3    4   5   6   7  8

//arrayName.slice(startostion, endposition)
//endposition => optional
//left right
//right left >[]

console.log(marks.slice(-3,2))







