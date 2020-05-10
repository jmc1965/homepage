
var canvas = document.getElementById("canvas 2d - starfield");
var c = canvas.getContext("2d");

var numStars = 1000;
var radius = 1;
var focalLength = canvas.width;

var centerX, centerY;
var rgbmax = 255;
var Krnd;
var rrnd;
var grnd;
var brnd;

var stars = [], star;
var i;

var animate = false;

initializeStars();

function executeFrame() {
    if (animate)
        requestAnimFrame(executeFrame);
    moveStars();
    drawStars();
}
function colorStars(Krnd, rrnd, grnd, brnd) {
    Krnd = Krnd / 100;

// Calculate Red:

    if (Krnd <= 66) {
        rrnd = 255;
    } else {
        rrnd = Krnd - 60;
        rrnd = 329.698727446 * (rrnd ^ -0.1332047592);
    }
    if (rrnd < 0) rrnd = 0;
    if (rrnd >= 255) rrnd = 255;

    return rrnd;

//    Calculate Green:
    if (Krnd <= 66) {
        grnd = Krnd;
        grnd = 99.4708025861 * Math.log(grnd) - 161.1195681661;
    } else {
        grnd = Krnd - 60;
        grnd = 288.1221695283 * (dgrnd ^ -0.0755148492);
    }
    if (grnd < 0) grnd = 0;
    if (grnd >= 255) grnd = 255;
    return grnd;   
    
//    Calculate Blue:
    if (Krnd >= 66) brnd = 255;
    else if (Krnd <= 19) brnd = 0;
    else {
        brnd = Krnd - 10;
        brnd = 138.5177312231 * Math.log(brnd) - 305.0447927307;
    }
    if (brnd < 0) brnd = 0;
    if (brnd >= 255) brnd = 255;
    return brnd;   
}

function initializeStars() {
    centerX = canvas.width / 2;
    centerY = canvas.height / 2;

    stars = [];
    for (i = 0; i < numStars; i++) {
        Krnd = 3000 + Math.random() * 25000;
        colorStars(Krnd, rrnd, grnd, brnd);
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            r: Math.random() * rgbmax,
            g: Math.random() * rgbmax,
            b: Math.random() * rgbmax
        }
        
        stars.push(star);

    }
}

function moveStars() {
    for (i = 0; i < numStars; i++) {
        star = stars[i];
        star.z--;

        if (star.z <= 0) {
            star.z = canvas.width;
        }
    }
}

function drawStars() {
    var pixelX, pixelY, pixelRadius;

    // Resize to the screen
    if (canvas.width != window.innerWidth || canvas.width != window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initializeStars();
    }

    c.fillStyle = "red";
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = "black";
    c.fillRect(2, 2, canvas.width-2, canvas.height-2);
   
    for (i = 0; i < numStars; i++) {
        star = stars[i];

        pixelX = (star.x - centerX) * (focalLength / star.z);
        pixelX += centerX;
        pixelY = (star.y - centerY) * (focalLength / star.z);
        pixelY += centerY;
        pixelRadius = radius * (focalLength / star.z);

        c.fillStyle = 'rgb(' + star.r + ', ' + star.g + ', ' + star.b + ', 1.0)'
        c.beginPath();
        c.arc(pixelX, pixelY, pixelRadius, 0, 2 * Math.PI);
        c.fill();
       // c.fillText(parseInt(star.r), pixelX, pixelY)
    }
}

canvas.addEventListener("mousemove", function (e) {
    focalLength = e.x;
});

// Kick off the animation when the mouse enters the canvas
canvas.addEventListener('mouseover', function (e) {
    animate = true;
    executeFrame();
});

// Pause animation when the mouse exits the canvas
canvas.addEventListener("mouseout", function (e) {
    mouseDown = false;
    animate = false;
});

// Draw the first frame to start animation
executeFrame();