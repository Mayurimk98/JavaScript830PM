
let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let addMebtn = document.querySelector('#btn')
console.log(ulList)
console.log(inputBox)
console.log(addMebtn)

//Step 1
addMebtn.addEventListener('click', function () {
    let inputText = inputBox.value //orange
    let newLiEle = document.createElement('li')//<li></li>
    newLiEle.textContent = inputText//<li>orange</li>

    //Step 3
    createButton(newLiEle)
    ulList.appendChild(newLiEle)
    inputBox.value = ""

})

//Step 4
ulList.addEventListener('click', function (event) {
    //console.log(event.target.tagName)
    if (event.target.tagName == "BUTTON") {
        if (event.target.className == 'remove') {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            ulEle.removeChild(liEle)//remove target Li element from ullist
        }
        else if (event.target.className == 'up') {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            let prevLiEle = liEle.previousElementSibling
            if (prevLiEle) {
                ulEle.insertBefore(liEle, prevLiEle)
            }
        }
        else if (event.target.className == 'down') {
            let liEle = event.target.parentElement
            let ulEle = liEle.parentElement
            let nextLiEle = liEle.nextElementSibling
            if(nextLiEle){
                ulEle.insertBefore(nextLiEle, liEle)
            }

        }
    }
})



//Step 2
function createButton(newLi) {
    // <button class="remove">REMOVE</button>
    // <button class="up">UP</button>
    // <button class="down">DOWN</button>

    let removeBtn = document.createElement('button') //<button></button>
    removeBtn.textContent = 'REMOVE' //<button>REMOVE</button>
    removeBtn.className = "remove" //<button class="remove">REMOVE</button>
    newLi.appendChild(removeBtn)

    let upBtn = document.createElement('button')
    upBtn.textContent = 'UP'
    upBtn.className = 'up'
    newLi.appendChild(upBtn)

    let downBtn = document.createElement('button')
    downBtn.textContent = "DOWN"
    downBtn.className = 'down'
    newLi.appendChild(downBtn)
}
