var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Button Choices

// Box-Object

function drawObject() {
    var getObjX = document.getElementById('inputObjX').value;
    var getObjY = document.getElementById('inputObjY').value;
    var getObjH = document.getElementById('inputObjH').value;
    var getObjW = document.getElementById('inputObjW').value;
    ctx.strokeRect(getObjX, getObjY, getObjH, getObjW);
}

// Circle-Object
function drawCircleObject() {
    var getCObjX = document.getElementById('inputCObjX').value;
    var getCObjY = document.getElementById('inputCObjY').value;
    var getCObjR = document.getElementById('inputCObjR').value;
    var getCObjSA = document.getElementById('inputCObjSA').value;
    var getCObjEA = document.getElementById('inputCObjEA').value;
    var getCObjCC = document.getElementById('inputCObjCC').value;
    if (getCObjCC == true) {
        ctx.beginPath();
        ctx.arc(getCObjX, getCObjY, getCObjR, getCObjSA, getCObjEA, getCObjCC);
        ctx.stroke();
    }
    else {
        ctx.beginPath();
        ctx.arc(getCObjX, getCObjY, getCObjR, getCObjSA, getCObjEA);
        ctx.stroke();
    }
}

function drawLineObject() {
    var getLObjX = document.getElementById('inputLObjX').value;
    var getLObjY = document.getElementById('inputLObjY').value;
    var getLObjM1X = document.getElementById('inputLObjM1X').value;
    var getLObjM1Y = document.getElementById('inputLObjM1Y').value;
    var getLObjM2X = document.getElementById('inputLObjM2X').value;
    var getLObjM2Y = document.getElementById('inputLObjM2Y').value;
    var checkLObjM = [
        getLObjM1X,
        getLObjM1Y,
        getLObjM2X,
        getLObjM2Y
    ];
    if (checkLObjM !== null) {
        ctx.lineTo(getLObjX, getLObjY);
        ctx.moveTo(getLObjM1X, getLObjM1Y);
        ctx.moveTo(getLObjM2X, getLObjM2Y);
        ctx.stroke();
    }
    else {
        ctx.lineTo(getLObjX, getLObjY);
        ctx.stroke();
    }
}

// Canvas Reset

function clearCanvas() {
    var print;
    if (confirm('Are you sure you want to clear your canvas?')) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        print = 'Canvas cleared by user.';
    }
    else {
        print = 'Canvas clear canceled by user.';
    }
    document.getElementById('functionOutput').innerHTML = print;
}

// Canvas Key Input

document.addEventListener("keydown", keyStrokeListener);

function keyStrokeListener(e) {
    if (e.keyCode === 67) {
        clearCanvas();
    }
    if (e.keyCode === 68) {
        if (drawObject !== undefined) {
            drawObject();
        }
        if (drawCircleObject !== undefined) {
            drawCircleObject();
        }
        if (drawLineObject !== undefined) {
            drawLineObject();
        }
    }
}
