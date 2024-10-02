/* <h1 data="tst">Student</h1>
<button id="btn">ClickMe</button> */

let heading = document.querySelector('h1[data="tst"]')
console.log(heading)

let button = document.querySelector('#btn')
console.log(button)

button.addEventListener('click', function () {
    heading.textContent = "Mayuri"
    heading.style.color = "red"
})