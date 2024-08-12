
//syntax

//for loop

// for(initialization;conditionCheck;increament/decreamet){
//     //statemenets
// }

//while loop
// initialization
// while(condition){
//     //stamenets

//     //increament/decremenet
// }

// //Program1

// //1-3 numbers
// for (let i = 1; i <= 3; i++) {
//     console.log(i)
// }

// for (let i = 1; i < 4; i++) {
//     console.log(i)
// }

// //=======================================

// let i = 1//i=1
// while (i <= 3) { //1<=3 2<=3 3<=3 4<=3
//     console.log(i) //1 2 3

//     i++ //2 3 4
// }

//======================================

//welcome => 5 times
// for (let i = 0; i < 5; i++) {
//     console.log("Welcome")
// }

// //while loop
// let j = 1
// while (j <= 5) {
//     console.log('WELCOME')
//     j++
// }

//=================================

//5 -1 print

// let k = 5
// while (k >= 1) {
//     console.log(k)
//     k = k - 1 //k--
// }


// for (let k = 5; k >= 1; k--) {
//     console.log(k)
// }

//============================

//5 table

//while 

// let i = 50
// while (i >= 5) {
//     console.log(i)
//     i = i - 5
// }

//=================================

//even number

// for(let i=0;i<=20;i++){
//     if(i%2==0){
//         console.log('Even number ' + i)
//     }
//     else{
//         console.log('Odd number '+i)
//     }
// }

//==========================================

//Break  => to came out from loop after perticular condition

//1-5
//3 break ==> 1 and 2

// for (let i = 1; i <= 5; i++) { //1<=5 2<=5 3<=5
//     if (i == 3) {//1==3 2==3 3==3
//         break
//     }
//     console.log(i) //1 2
// }

//2 3

// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i == 3) {
//         break
//     }
// }

//==========================================

// let i = 1
// while (i <= 5) { //1<=5 2<=5 3<=5
//     if (i == 3) { //1==3 2==3 3==3
//         break
//     }
//     console.log(i) //1 2

//     i++ //2 3
// }

// let j = 1
// while (j <= 5) {
//     console.log(j)
//     if (j == 3) {
//         break
//     }

//     j++
// }

//=====================================================
//continue  => to skip perticular condition

// for (let i = 1; i <= 5; i++) { //1<=5 2<=5 3<=5 4<=5 5<=5 6<=5
//     if (i == 3) { //1==3 2==3 3==3 4==3 5==3
//         continue
//     }
//     console.log(i)//1 2 4 5
// }


// for (let i = 1; i <= 5; i++) {
//     console.log(i)
//     if (i == 3) {
//         continue
//     }
// }