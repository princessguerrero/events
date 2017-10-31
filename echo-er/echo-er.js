document.addEventListener('keypress', function (event) {
    var elem = document.querySelector("h1");
    elem.innerText = elem.innerText + event.key;
    var character = event.key;

    if (character === "."
        || character === "?"
        || character === "!") {
        elem.classList.remove("textdecor")
    } else if (event.charCode <= 90 && event.charCode >= 65) {
        elem.classList.add("textdecor")
    } else {
        elem.classList.remove("textdecor")
    }

})