function currentTime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "AM";
}
function currentTime(){
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    midday = (hour>= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
}
function updateTime(k){
    if(k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec + midday;
function currentTime(){
    var t = setTimeout(function(){
        currentTime()
    }, 1000);
}
currentTime;