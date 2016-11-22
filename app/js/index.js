"use strict";

function clock(){
    var d = new Date();
    var clock = d.getHours() + ":" + ('0'+d.getMinutes()).slice(-2) + ":" + ('0'+d.getSeconds()).slice(-2);
    document.getElementById("clockTime").innerHTML = clock;
}

setInterval(clock , 1000);


function btnClickEvent(){
    document.getElementById("clockTime").style.color = "#f00";
}
