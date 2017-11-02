btn = document.querySelector("button")
btn.style.display = "block"
btn.addEventListener("click", function(){
    img = document.createElement("img")
    img.style.width = "50px"
    img.src = "http://www.freeiconspng.com/uploads/bubbles-png-22.png"
    document.body.appendChild(img)
});