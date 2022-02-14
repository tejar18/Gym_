document.querySelector('#send-message').onclick = function() {
    if(document.querySelector('#name').value.length == 0) {
        alert("Please enter your name")
    } else if(document.querySelector('#email').value.length == 0) {
        alert("Please enter a valid email")
    } else if(document.querySelector('#subject').value.length == 0) {
        alert("Please enter subject")
    } else if(document.querySelector('#message').value.length == 0) {
        alert("Please enter some message")
    } else alert("message send successfully!..Thank You")
}

