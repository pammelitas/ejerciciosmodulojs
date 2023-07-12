function save_username(){
    var password = "1234"
    
    var userInput = document.getElementById("user").value;
    var passwordInput = document.getElementById("password").value;

    if(password == passwordInput){
        window.localStorage.setItem("user", userInput)
        window.location = "atm.html"
    } else{
        alert("User or password does not match")
    }
}


let btnUser = document.getElementById("user");
btnUser.addEventListener('click', function handleClick(event){
    event.preventDefault();
    const inputUser = document.getElementById("user");

    console.log(inputUser.value)
    inputUser.value = "";
});

let btnPassword = document.getElementById("password");
btnPassword.addEventListener('click', function handleClick(event){
    event.preventDefault();
    const inputPassword = document.getElementById("password");

    console.log(inputPassword.value)
    inputPassword.value = "";
});