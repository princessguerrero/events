document.addEventListener('click', function(event) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var topLeft = document.querySelector("#topLeft")
    
    var body = document.querySelector('body')
    if ((w / 2) > event.clientX ) {
        body.style.backgroundColor = "blue"
    } else if ((w / 2) < event.clientX) {
        body.style.backgroundColor = "red"
    } else if ((h / 2) > event.clientY) {
        body.style.backgroundColor = "black"
    } else {
        body.style.backgroundColor = "white"
    }
    
}) 