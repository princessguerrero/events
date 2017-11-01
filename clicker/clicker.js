

document.addEventListener('click', function(event) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var content = document.querySelector('body')
    if ((w / 2) > event.clientX ) {
        content.style.backgroundColor = "mediumaquamarine"
    } else {
        content.style.backgroundColor = "peachpuff"
    }
    
}) 