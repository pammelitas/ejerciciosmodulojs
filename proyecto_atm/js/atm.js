let savings = 0.0;
function deposit(){
    let quantity = document.getElementById("input-atm").value;
    let quantityToNumber = parseFloat(quantity);
    savings = savings + quantityToNumber;
    // alert("I'm depositing $" + quantityToNumber);
    // alert("My current savings are: $" + savings + "USD")

    let currentSavings = document.getElementById("currentSavings");
    currentSavings.innerHTML = "Your balance is: $" + savings + " USD";
}

function withdraw(){
    let quantity = document.getElementById("input-atm").value;
    let quantityToNumber = parseFloat(quantity);
    savings = savings - quantityToNumber;
    // alert("I'm taking out $"  + quantityToNumber);
    // alert("My current savings are: $" + savings + "USD");

    let currentSavings = document.getElementById("currentSavings");
    currentSavings.innerHTML = "Your balance is: $" + savings + " USD";
}



let btn1 = document.getElementById("deposit");
btn1.addEventListener('click', function handleClick(event){
    event.preventDefault();
    const inputAtm = document.getElementById("input-atm");

    console.log(inputAtm.value)
    inputAtm.value = " ";
});

let btn2 = document.getElementById("withdraw");
btn2.addEventListener('click', function handleClick(event){
    event.preventDefault();
    const inputAtm = document.getElementById("input-atm");

    console.log(inputAtm.value)
    inputAtm.value = " ";
});

function logout(){
        window.location = "index.html"
}



