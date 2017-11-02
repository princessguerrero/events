document.addEventListener('click', function (event) {
    var quad = event.target.style

    quad.backgroundColor === "purple" ? quad.backgroundColor = "white" :
        quad.backgroundColor = "purple"
});

