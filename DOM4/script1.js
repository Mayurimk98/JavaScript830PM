
//  <p class="one" id="unique" data="test">Paragraph</p>

let a = document.querySelector('p')
console.log(a)

let b = document.querySelector('#unique')
console.log(b)

let c = document.querySelector('.one')
console.log(c)

let d = document.querySelector("p[data='test']")
console.log(d)


b.addEventListener('click', function () {
    b.textContent = "I am learining Javascript"
    b.style.color = "yellow"
    b.style.backgroundColor = "green"
})


// let person={
// firstName:"Paragraph"
// }
