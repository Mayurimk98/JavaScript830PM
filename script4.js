//Logical opeartors

//AND => multiplication => &&


//OR => Addition => ||
//true || true => true
//true || false => true
//false || true => true
//false || false => false

console.log(10 == 10 || 8 != 10)
//true || true => true

console.log(9 == '9' || 9 === '9')
//true || false  => true

console.log(9 != '9' || 10 !== '10')
//false || true => true

console.log(10 !== 10 || 9 != 9)
//false || false => false

//============================================
//NOT => !

//!true  => false
//!false => true

console.log(!(8 == '8'))//false

console.log(!(10 === '10'))//true

//==============================================

//arithamatic
//comaprison
//logical

//===============================================

//conditional statemenet

//one input => multiple output


//if 

// if(condition){
//     //statemenet
// }

// if (10 != 10) {
//     console.log('hello')
// }
// else{
//     console.log('bye')
// }

//if if 

//tickets 
//t 1-5 = 5% discount
//t 6-10 => 10 % discount
//t >10 => 20 % disccount

// let ticket = -10
// if (ticket <= 5) {
//     console.log('5 % discount')
// }
// if (ticket <= 10) {
//     console.log('10 % discount')
// }
// if (ticket > 10) {
//     console.log('20 % discount')
// }


let ticket = 0
if (ticket > 0 && ticket <= 5) {
    console.log('5 % discount')
}
if (ticket > 5 && ticket <= 10) {
    console.log('10 % discount')
}
if (ticket > 10) {
    console.log('20 % discount')
}
else {
    console.log('incorrect input')
}


//if followed by if => will check all condition
//if followed else if 

// let marks = 99
// if (marks > 90) {
//     console.log('Grade A')
// }
// if (marks > 70) {
//     console.log('Grade B')
// }
// if (marks > 40) {
//     console.log('Grade C')
// }

//grade A

let marks = 35
if (marks > 90) {
    console.log('Grade A')
}
else if (marks > 70) {
    console.log('Grade B')
}
else if (marks > 40) {
    console.log('Grade C')
}
else{
    console.log('Fail')
}






//if else
//if else if



