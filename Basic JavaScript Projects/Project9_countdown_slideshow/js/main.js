//Countdown timer function
function countdown() {

    //get the input from the user
    var seconds = document.getElementById("seconds").value;

    //function to perform the countdown
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        //var time = setTimeout(tick, 1000);
        // if (seconds == -1) {
        //     alert("Time is up!");
        //     clearTimeout(time);
        //     timer.innerHTML = "";
        // }

        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Time is up!");
        }
    }
    
    tick();
}