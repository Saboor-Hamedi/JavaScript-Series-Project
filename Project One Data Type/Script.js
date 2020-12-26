var FirstNumber = 0;
var SecondNumber = 0;
var thirdNumber = 0;

function calculator() {
    FirstNumber = parseFloat(document.getElementById('FirstNumber').value);
    SecondNumber = parseFloat(document.getElementById('SecondNumber').value);
    thirdNumber = FirstNumber + SecondNumber;
    if (!isNaN(thirdNumber)) {

        document.getElementById('thirdNumber').value = thirdNumber;
    }
}

function Erase() {
    document.getElementById('FirstNumber').value = '';
    document.getElementById('SecondNumber').value = '';
    document.getElementById('thirdNumber').value = '';
}

function press() {

    var name = 'saboor';
    var lastname = 'hamedi';
    var age = 27;

    document.getElementById('inside').value = name + "\n" + lastname + "\n" + age;



}