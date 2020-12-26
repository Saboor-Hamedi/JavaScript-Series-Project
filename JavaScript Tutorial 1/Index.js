
function over(){
    document.body.style.backgroundColor = "red";
    document.body.style.transition = "all .5s";
}
function move(){
    document.body.style.backgroundColor = "white";
}
function sizeDiv(){
 document.getElementById('hello').setAttribute("style","width:500px");
}
// expand the data
function hideSide(){
document.getElementById('article').style.width = "0px"; 
   
}

function ShowSide(){
    if(this.checked =true){
        document.getElementById('article').style.width = "200px";

    }
}

// query
$("#edge").click(function () {
    var div = $("#image-panel");
    div.height(div.height()== 300 ? 10 : 300);
})


// scroll

$('.up-scroll').click(function () {
    $("html, body").animate({
      
        
    }, 100);
    return false;
},1000);
































