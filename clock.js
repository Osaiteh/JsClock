function showTimee() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
    // first 2 -6 lines are right and okay
    if(hour == 0){
        hour = 12
    }
    if(hour > 12) {
        hour = hour - 12;
        midday = "PM";
    }
    // short for if else statement (forgotten d name also)
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    var time = hour + ":" + min + ":" + sec + " " + midday;
    // replace the inner text of the elemt id 
    document.getElementById("clock").innerText = time;
    // have forgotten d name they call it function in a function. 
    setTimeout(showTimee, 1000); 

}
showTimee()
