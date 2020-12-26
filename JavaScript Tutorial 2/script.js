



function myFunction() {
  var elmnt = document.getElementById("container");
  document.body.style.transition = ".5s";
  elmnt.scrollTop = "100%";
}




// save color

if (typeof (localStorage) == 'undefined') {
  alert('Your browser does not support HTML5 localStorage. Try upgrading.');
} else {
  if (localStorage.getItem("background") != null) {
    getColour = localStorage.background;
    $('#container').css('background', getColour);
  }
}

$("#color").click(function () {
  setColour = 'yellow';/*to more test color can change and retest*/
  if (setColour == "") {
    return;
  } else {
    localStorage.removeItem('background');
    $('#container').css('background', setColour);
    localStorage.setItem("background", setColour);
  }

});
$("#color1").click(function () {
  setColour = 'blue';/*to more test color can change and retest*/
  if (setColour == "") {
    return;
  } else {
    localStorage.removeItem('background');
    $('#container').css('background', setColour);
    localStorage.setItem("background", setColour);
  }



});


