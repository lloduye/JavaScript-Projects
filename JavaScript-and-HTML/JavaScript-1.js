function clickme() {
    var Stmt= document.getElementsByClassName("clickme");
    Stmt[0].innerHTML="This statement is as a result of getElementByClassName method";
}


var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

