// JavaScript source code
var canvas2 = document.getElementById("canvas 2d - starfield - control");
var cc = canvas2.getContext("2d");

// Resize to the screen
// if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
//    canvas.width = window.innerWidth;
//    canvas.height = window.innerHeight;


// c.fillStyle = "yellow";
// c.fillRect(2, 2, canvas.width-2, canvas.height-2);
// c.fillStyle = "black";
// c.fillRect(4, 4, canvas.width - 4, canvas.height - 4);
// ExecuteFrame();

function drawInfo() {
    var pixelX, pixelY;

    //   // Resize to the screen
    //   if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
    //       canvas.width = window.innerWidth;
    //       canvas.height = window.innerHeight;
    //       initializeStars();
    //   }

    cc.fillStyle = "red";
    cc.font = '50px serif';
    cc.fillText('Hello world', 50, 90);

}
DrawInfo();
