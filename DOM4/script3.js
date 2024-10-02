
/* <h1>HeadingOne</h1>
<input type="text">
<button>ChangeMe</button> */

let headingEle = document.querySelector('h1')
console.log(headingEle)

let inputBox = document.querySelector('input')
console.log(inputBox)

let btn = document.querySelector('button')
console.log(btn)

btn.addEventListener('click', function () {
    let text = inputBox.value
    headingEle.textContent = text
    headingEle.style.color = text
    inputBox.value = " "
})