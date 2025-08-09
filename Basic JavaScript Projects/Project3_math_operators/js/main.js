function addition() { //Defining and naming the addition function
    var add = 1 + 2;
    document.getElementById("Add").innerHTML = "1 + 2 = " + add; //Print the result in HTML
}

function subtraction() {
    var sub = 9 - 7;
    document.getElementById("Sub").innerHTML = "9 - 7 = " + sub;
}

function multiplication() {
    var mult = 12 * 5;
    document.getElementById("Mlt").innerHTML = "12 * 5 = " + mult;
}

function division() {
    var divide = 39 / 3;
    document.getElementById("Div").innerHTML = "39 / 3 = " + divide;
}

function random() {
    document.getElementById("Ran").innerHTML = Math.random() * 10;
}

function modulus_operator() {
    var modulus =38 % 4;
    document.getElementById("Mod").innerHTML = "When you divide 38 by 4 you have a remainder of: " + modulus;
}

function increment(){
    var value = document.getElementById("IncrementText").innerHTML;

    value++;

    document.getElementById("IncrementText").innerHTML = value;
}

function decrement(){
    var value = document.getElementById("DecrementText").innerHTML;

    value--;

    document.getElementById("DecrementText").innerHTML = value;
}