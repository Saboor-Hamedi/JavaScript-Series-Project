

// make time 
let today = new Date();
let hour = today.getHours();
let greeting;
if (hour > 12) {
	greeting = "Good afternoon";
	document.body.style.backgroundColor = "black";

} else if (hour > 18) {
	greeting = "Good Evening";
	document.body.style.backgroundColor = "cyan";
} else if (hour > 0) {
	greeting = "Good moring";
	document.body.style.backgroundColor = "blue";
} else {
	greeting = "welcome";

}

let welcome = document.querySelector('#greeting').innerHTML = greeting;
welcome.value;

//  calcultor 
const culbnt = document.querySelector('#culbnt');

culbnt.addEventListener('click', function () {
	let number1 = parseFloat(document.querySelector('#number1').value);
	let number2 = parseFloat(document.querySelector('#number2').value);
	if (isNaN(number1) || isNaN(number2)) {
		document.getElementById('output').innerHTML = "It's not a number";
		return false;
	} else {
		document.getElementById('output').innerHTML = "Result: " + number1 + number2;

	}

})

// array 







// random number with 11 length
function LongNumber(len){
	let x = "";
	
	for(let i = 0; i <len;i++){
		x += Math.floor(Math.random() * len);
		document.querySelector('#shortnumberlength').innerHTML = "Length is: "+len;
	}
	return x;
}
document.querySelector('#loginnumberlength').innerHTML = LongNumber(11);

Contiuing(50);
function Contiuing(founds){
	
	for(let i =1;i<founds;i++){
	
		if(i % 2!=0){
			document.write(" " + i);
		}
	}
}


// prime number 
  function onlyNumber(){
	  let charCode = event.KeyCode
	  if(charCode<48 || charCode > 57){
		  alert('only numbers are allowed');
		  event.returnValue = false;
	  }
	  return charCode;
  }
  document.querySelector('#onlynumber').innerHTML = onlyNumber;

//   active item
let activeItem = document.querySelectorAll('.show_active a');
for(i =0; i<activeItem.length;i++){
	activeItem[i].addEventListener('click', function(){
		for(let i=0;i<activeItem;i++){
			activeItem[i].parentElement.className = '';

		}
		this.parentElement.className= 'active';
	}, false)
}
