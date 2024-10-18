// let ele1 = document.querySelector('li')
// console.log(ele1) //Single html Element

// let allEle = document.querySelectorAll('li')
// console.log(allEle) //nodeList

// //id tag class cf

// //<h1 id="fr" class="frt" name="fruit">Fruit list</h1>
// let ele2 = document.getElementsByClassName('frt')
// console.log(ele2) //html collection


// let ele3 = document.getElementById('fr')
// console.log(ele3)//htmlElemet

// let ele4 = document.getElementsByName('fruit')
// console.log(ele4)//nodelist

// let ele5=document.getElementsByTagName('h1')
// console.log(ele5)



{/* <ul>
<li>Apple</li>
<li>Banana</li>
<li>Pineapple</li>
<li>Grapes</li>
<li>Orange</li>
</ul> */}

// let nodeListEle=document.querySelectorAll('li')
// console.log(nodeListEle) //static

// let htmlCollectionEle=document.getElementsByTagName('li')
// console.log(htmlCollectionEle) //dynamic

//<h1 id="fr" class="frt ten" name="fruit">Fruit list</h1>

let h1Ele=document.querySelector('h1[class="frt ten"]')
console.log(h1Ele)

//className
//ClassList

// console.log(h1Ele.className)

// console.log(h1Ele.classList)

// //add remove toggle

// // h1Ele.classList.add('five')
// // console.log(h1Ele)

// // h1Ele.classList.remove('ten')
// // console.log(h1Ele)

// h1Ele.classList.toggle('two')
// console.log(h1Ele)

// h1Ele.classList.toggle('frt')
// console.log(h1Ele)


h1Ele.setAttribute('text','txt')
console.log(h1Ele)

console.log(h1Ele.getAttribute('id'))
