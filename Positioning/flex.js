let breakline = "<br>";


// Date object 

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;

    }
    return i;
}

function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = h % 12; //change it to 12 hours time
    document.body.style.backgroundColor = "#111111";
    if (h == 0) {

        h = 12;
    } else if (h >= 12) {
        document.body.style.backgroundColor = "#eee";
    }
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

    var t = setTimeout(startTime, 500);

}

function checkTime(i) {

    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}

// OOP



dispaly(12);
let dispaly = function greeting(hello) {
    let date = Date.getHours();

    if (hello >= 22 || hello <= 5) {

        alert('Hello world is night');
    } else {
        alert('Hello world is morning');
    }
}

// move div
// 



function toggleMenu() {

    if (document.getElementById("mobile").style.left == "10px") {
        document.getElementById("mobile").style.left = "100px"

    } else {
        document.getElementById("mobile").style.left = "10px"
    }
}