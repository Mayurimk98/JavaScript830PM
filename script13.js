
//Array Methods

// let marks = [12, 56, 30, 90, 57]

// //23 first

// let s1 = marks.unshift(23)
// console.log(s1)//6
// console.log(marks)

// //100 last

// let s2 = marks.push(100)
// console.log(s2)//7
// console.log(marks)

//57 remove

// let s3=marks.pop()
// console.log(s3)
// console.log(marks)

// //12 remove
// let s4=marks.shift()
// console.log(s4)//12
// console.log(marks)

//=======================================================================

let marks = [12, 56, 30, 90, 57]
//            0   1   2   3  4

//5. indexOf()
// action=> give the index of given element if found,if not found -1
// return =>index==>  number

// let y1=marks.indexOf(90)
// console.log(y1)//3

// let y2=marks.indexOf(58)
// console.log(y2)//-1

//6. includes()
//action => check whether ele present in array or not , if present return true if not return false
//return  => boolean

// let flowers=["rose","mogra","jasmin","lily"]

// let d1=flowers.includes('Lily')
// console.log(d1)//false

// let d2=flowers.includes('jasmin')
// console.log(d2)

//================================================================

let scores = [12, 34, 45, 67]

//              0  1   2   0  1  2     0    1    2              
let scores1 = [[1, 2, 3], [7, 9, 4], [100, 200, 300]]
//                 0          1           2  

//[1,2,3,7,9,4,100,200,300]
//200
// console.log(scores1[2][1])

// console.log(scores1[1][2])

// //7. flat()
// //action => convert all element / multi diamentioanl arry into single diamnetional
// //return => array

// let f1=scores1.flat()
// console.log(f1)

//8. join()
//action => to connect all element of array
//return  => string

let student = ["mayuri", "prashant"]
let a1 = student.join()
console.log(a1)
console.log(typeof a1)




