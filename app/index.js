"use strict";

require("!style!css!./style.css") // 载入 style.css
require("file-loader!./dog.png");
// document.write(require('./ask.js')) // 添加模块
document.write(require('./runLoad.js')) // 添加模块
document.write(require('./testRun.js')) // 添加模块
document.write('It works.')

window.btnClickEvent = require('./ask.js');//要放在全域變數內
window.testRun = require('./testRun.js');

function clock(){
    var d = new Date();
    var clock = d.getHours() + ":" + ('0'+d.getMinutes()).slice(-2) + ":" + ('0'+d.getSeconds()).slice(-2);
    document.getElementById("clockTime").innerHTML = clock;
}

setInterval(clock , 1000);
