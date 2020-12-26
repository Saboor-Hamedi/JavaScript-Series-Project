let submite_messgebtn = document.querySelector('#submite_messgebtn');
let input_message = document.querySelector('#input_message');
let messageoutput = document.querySelector('#setMessage');
submite_messgebtn.addEventListener('click', DisplayMessage);

function DisplayMessage() {
    let content = input_message.value;
    if (content === '') {
        alert('Fill the input');
    } else {
        messageoutput.innerHTML = content;
        input_message.value = "";
       

    }
}

// counter
let counter = document.querySelector('#count');
let increase = document.querySelector('#increase');
let descrease = document.querySelector('#decrease');
let count = 0;
increase.addEventListener('click', increaseCounter);
descrease.addEventListener('click', decreaseCounter);

function increaseCounter() {
    count++;
    counter.innerHTML = count;
    if (count >0) {
        counter.style.color = "yellow";
    } else if(count === 0){
        counter.style.color = "black";
    } 
    counter.animate([{opacity: '0.2'},{opacity: '1.0'}]
                      ,{duration: 500, fill: 'forwards'});

}

function decreaseCounter() {
    count--;
    counter.innerHTML = count;
 if (count < 0) {
        counter.style.color = "red";
    } else if(count === 0){
        counter.style.color = "black";
    } 
    counter.animate([{opacity: '0.2'},{opacity: '1.0'}]
                      ,{duration: 1000, fill: 'forwards'});
}


// this is for timer

// set the date we are counting down 
var countDownDate = new Date("Jan 5, 2029 15:37:25").getTime();
function Display(text, value,color){
    return `<h1 class="timer-script" style="color:${color};">${value}<div>${text}</div></h1>`
}

//update the count down every 1 second
var updateEverySecond = setInterval(function(){
// get todays date and time
var now= new Date().getTime();

// find the disntance between now and end the cound down date
 var distance = countDownDate -now;
 // Time calculations for days, hours, minute, second
 var days =Math.floor(distance /(1000 * 60 * 60 * 24));
 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
 var second = Math.floor((distance % (1000 * 60)) / (1000));
//   let result =   document.getElementById('timer').innerHTML = "Days : " + days;
    let result = Display (days,'days') + Display(hours,'Hours') + Display(minute,'Minutes') + Display(second,'Seconds','red');
    document.getElementById("timer").innerHTML = result;
    
 if(distance <0){
     document.getElementById('timer').innerHTML ="Expired";
 }


},1000);

// time counter

window.onload = function () {
    var sec = 00;
    var min =00;
    var appmin = document.getElementById('min');
    var appsec = document.getElementById('sec');
    var starts = document.getElementById('starts');
    var stops = document.getElementById('stops');
    var clear = document.getElementById('clear');
    var Interval ;
    
    starts.onclick = function(){
        clearInterval(Interval);
        Interval= setInterval(startTimer, 10);
    }
  

   function startTimer(){
        sec++;
       if(sec < 9){
        sec.innerHTML = "0" + sec;
       }
       if(sec >9){
        appsec.innerHTML = sec;
 
    } 
    if (sec > 99) {
       
        min++;
        appmin.innerHTML = "0" + min;
        sec = 0;
        appsec.innerHTML = "0" + 0;
      }
      
      if (min > 9){
        appmin.innerHTML = min;
      }
   }
    stops.onclick = function(){
        clearInterval(Interval);
    }
    clear.onclick = function(){
        clearInterval(Interval);
        sec = "00";
        min = "00";
        appsec.innerHTML =sec;
        appmin.innerHTML =min;
        
    }
}


let btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function(){
   let height = null;
   let width = null;
   let area = (height ??  100) * (width ?? 50);
   alert(area);
   
});

// this is arraw function

var person = {
    name: 'saboor',
   
    age:function(age){
       let x = Math.floor(Math.random() *  age);
        if(x > 17){
            console.log('You are allowed: ' + x);
        }else{
            console.log('Your are not allowd: ' + x);
        }

    }
   
}
console.log(person.name);

console.log(person.age(50));
