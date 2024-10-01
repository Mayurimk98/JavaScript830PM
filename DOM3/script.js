

// <h1 id="one" class="two" name="nm">Students</h1>
//<h2>Mayuri</h2>

//1. By tagname => 4
let byTagname = document.querySelector('h1')
console.log(byTagname)

//2. By using ID (ID== #) ==> 1
let byId = document.querySelector('#one')
console.log(byId)

//3. Byusing class(Class= .) => 2
let byClass = document.querySelector('.two')
console.log(byClass)

//4.By using common formula
//Tagname[attribute='value'] => 3
let byCF = document.querySelector('h1[name="nm"]')
console.log(byCF)

