function addListItem() {
    var input = document.querySelector("#text")
    // document.querySelector('#todos li:nth-child(2)')
    console.log('adding input: ', input.value)
    window.localStorage.setItem('lastInput', input.value)

    if (input.value) {
        let list = document.querySelector("#todos");
        let newItem = document.createElement("li");
        newItem.innerText = input.value
        list.appendChild(newItem)
        input.value = "";
    }
}

var listItems = document.querySelector("#todos");
listItems.addEventListener("click", function (event) {
    let target = event.target
    if (target.tagName.toUpperCase() == 'LI') {
        target.style.textDecoration = target.style.textDecoration !== 'line-through' ? 'line-through' : 'none'
    }
})

let submit = document.querySelector("#addnew");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    //this is to prevent the page from refreshing when user press Submit button
    addListItem();
})

let btnRemDone = document.querySelector("#removedone");
btnRemDone.addEventListener("click", function (event) {
    var listItems = document.querySelectorAll('#todos li')
    //querySelector works like CSS in selecting (like parent-child)
    console.log(listItems)
    var list = document.querySelector('#todos')

    for (var i = 0; i < listItems.length; i++) {
        if (listItems[i].style.textDecoration === 'line-through') {
            list.removeChild(listItems[i])
        }
    }
})

// This code is executed When the page loads
var lastInput = window.localStorage.getItem('lastInput')
console.log('last Input: ', lastInput)




