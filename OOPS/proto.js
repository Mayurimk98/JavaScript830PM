// //function
// // //1. function declaration
// // function add() {
// //     console.log(10 + 20)
// // }
// // //2. function expression
// // let add1 = function () {
// //     console.log(10 + 20)
// // }
// // //3. arrow function
// // let add2 =  ()=> {
// //     console.log(10 + 20)
// // }

// //Object

// //1. function constructor
// //2. ES6 class  ====> IMP
// //3. object.create()


// //1. function constructor

// // function human(firstName, lastName, age) {
// //     this.firstName = firstName
// //     this.lastName = lastName
// //     this.age = age
// // }

// // let mayuri = new human("Mayuri", "Pati", 26)
// // console.log(mayuri)



// // function human(firstName, lastName, age) {
// //     this.firstName = firstName
// //     this.lastName = lastName
// //     this.age = age
// //     this.display = function () {
// //         console.log('Hello all')
// //     }
// // }

// // let mayuri = new human("Mayuri", "Pati", 26)
// // console.log(mayuri)

// // mayuri.display()

// // let vaibhav=new human('vaibhav',"katwe",18)
// // console.log(vaibhav)

// //=======================================================
// //solution

// function human(firstName, lastName, age) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
// }

// human.prototype.display = function () {
//     console.log('Hello All')
// }

// let ram = new human('ram', 'sharma', 35)
// console.log(ram)

// ram.display()

// //javascript ==> object
// //human
// //ram

// //prototype 
// //__proto__

// //parent prototype=> child __proto__

// // console.log(human.prototype==ram.__proto__) //true


//2. Es6 class

class Person {
    constructor(firstName, age, city) {
        this.firstName = firstName
        this.age = age
        this.city = city
    }
    display() {
        console.log(this.firstName,this.city)
    }
}

let sitakumari=new Person("sita",34,"pune")
console.log(sitakumari)

sitakumari.display()


