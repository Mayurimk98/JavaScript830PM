//to create object 3 methods
//1. Function constructor
//2. ES6 class
//3. Object.create

//1. Function constructor without method


function human(fullName, age, language) {
    this.fullName = fullName
    this.age = age
    this.language = language
}

let mayuri = new human("mayuriPati", 26, "hindi")
console.log(mayuri)


//2. Function constructor with method

// function person(fn, ag, lan) {
//     this.firstName = fn
//     this.ag = ag
//     this.lan = lan
//     this.disaply = function () {
//         console.log('Hello All')
//     }
// }

// let ram=new person("Ram",30,"marathi")
// console.log(ram)
// ram.disaply()

// let sham=new person('Sham',50,"english")
// console.log(sham)
// sham.disaply()

//solution

function person1(fn, ln, ag) {
    this.fn = fn
    this.ln = ln
    this.ag = ag
}
person1.prototype.display = function () {
    console.log('hello All')
}

let mk = new person1('maya', "surve", 34)
console.log(mk)

let vk = new person1('vicky', "shamal", 78)
console.log(vk)

//person1  object
//mk object

//prototype and _proto_

console.log(person1.prototype==mk.__proto__)


class PersonOne{
    constructor(firstName,age,language){
        this.firstName=firstName
        this.age=age
        this.language=language
    }
    display(){
        console.log(this.firstName,this.age)
    }
}

let nayan=new PersonOne('nayan',21,'hindi')
console.log(nayan)