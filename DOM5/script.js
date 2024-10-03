/* <ul>
<li>Mayuri</li>
<li>Ram</li>
<li>Sham</li>
<li>Sita</li>
</ul>
<input type="text">
<button>AddMe</button> */

let ulList = document.querySelector('ul')
console.log(ulList)

let btn = document.querySelector('button')
console.log(btn)

let inputBox = document.querySelector('input')
console.log(inputBox)

btn.addEventListener('click', function () {
    let text = inputBox.value //Gita
    let newLiEle = document.createElement('li') //<li></li>
    newLiEle.textContent = text //<li>Gita</li>
    ulList.appendChild(newLiEle)
    inputBox.value = ""
})