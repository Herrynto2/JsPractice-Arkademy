const validate = function(username, password) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (username.value.match(letters)) {
        console.log("data validate")
    } else {
        console.log("data fail")
    }
}