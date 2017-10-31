var form = document.querySelector('#myform');

form.addEventListener('submit', function(event){
    event.preventDefault();
    var val = document.querySelector("#userinput").value
    var reversed = val.split('').reverse().join('');
    document.querySelector("p").innerText = reversed;
})