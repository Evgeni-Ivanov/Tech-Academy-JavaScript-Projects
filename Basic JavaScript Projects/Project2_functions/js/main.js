function My_First_Function () {
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str;
}
//a function that uses the += operator
function myFunction () {
    var sentence = "I am learning"; //creating the variable
    sentence += " a lot from this book!"; //using the += operator to add the variable
    document.getElementById("Concatenate").innerHTML = sentence; //using document.getElementById()
}