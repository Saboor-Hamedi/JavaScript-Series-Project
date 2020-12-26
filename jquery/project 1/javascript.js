function showdiv() {
    var x = document.getElementById("show_div");
    x.style.transition = '.5s';
    if (!x.style.display || x.style.width === "0px") {
        x.style.width = '300px';
        x.style.display = 'block';
    } else {
        x.style.width = "0px";
    }
}
// =======

function side_bar() {
    var close = document.getElementById('links');
    close.style.transition = ".5s";
    if (!close.style.display || close.style.width === "0px") {
        close.style.display = "block";
        close.style.width = "200px";
        document.getElementById("section_one").style.marginLeft = "200px";
        
    } else {
        close.style.width = "0px";
        document.getElementById("section_one").style.marginLeft = "0px";
    }
}

function dropDown(){
    let drop = document.getElementById('drop-content');
    if(!drop.style.display || drop.style.display === "none"){
        drop.style.display = 'block';
      
        document.getElementById('drop-content').className ='drop-content';
      
    }else{
        drop.style.display ="none";
    }
}


// accordion


$(".panel .panel-collapse").on('shown.bs.collapse', function() {
    var active = $(this).attr('id');
    var panels = localStorage.panels === undefined ? new Array() : JSON.parse(localStorage.panels);
    if ($.inArray(active, panels) == -1) //check that the element is not in the array
        panels.push(active);
          localStorage.panels = JSON.stringify(panels);
});

$(".panel .panel-collapse").on('hidden.bs.collapse', function() {
    var active = $(this).attr('id');
    var panels = localStorage.panels === undefined ? new Array() : JSON.parse(localStorage.panels);
    var elementIndex = $.inArray(active, panels);
    if (elementIndex !== -1) //check the array
    {
        panels.splice(elementIndex, 1); //remove item from array
    }
    localStorage.panels = JSON.stringify(panels); //save array on localStorage
});

var panels = localStorage.panels === undefined ? new Array() : JSON.parse(localStorage.panels); //get all panels
for (var i in panels) { //<-- panel is the name of the cookie
    if ($("#" + panels[i]).hasClass('panel-collapse')) // check if this is a panel
    {
        $("#" + panels[i]).collapse("show");
    }
}