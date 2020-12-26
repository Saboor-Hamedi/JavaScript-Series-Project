const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B","C", "D","E","F"];

const btn = document.getElementById('btn');
const color  = document.querySelector('.color');
btn.addEventListener('click', function(){
    const randomNumber = 6;
    let hexColor = "#";
    for(let i=0; i<6;i++){
        hexColor +=hex[getRandomColor()];
    }
    color.textContent= hexColor;
    document.body.style.backgroundColor = hexColor;
})
function getRandomColor(){
    return Math.floor(Math.random() * hex.length);
}

// counter number 

let count = 0; //set initail count

//  select value and buttons;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
      const styles = e.currentTarget.classList;
      if(styles.contains('btn-decrease')){
         count--;
      }else if(styles.contains('btn-increase')){
        count++;
    }else {
        count =0;
    }
    if(count > 0){
        value.style.color = "yellow";
    }else if(count<0){
        value.style.color = 'red';
    }else{
        value.style.color = "black";
    }

    value.textContent= count;
    })
   
});



var verbs, nouns, adjectives, adverbs, preposition;
nouns = ["bird", "clock", "boy", "plastic", "duck", "teacher", "old lady", "professor", "hamster", "dog"];
verbs = ["kicked", "ran", "flew", "dodged", "sliced", "rolled", "died", "breathed", "slept", "killed"];
adjectives = ["beautiful", "lazy", "professional", "lovely", "dumb", "rough", "soft", "hot", "vibrating", "slimy"];
adverbs = ["slowly", "elegantly", "precisely", "quickly", "sadly", "humbly", "proudly", "shockingly", "calmly", "passionately"];
preposition = ["down", "into", "up", "on", "upon", "below", "above", "through", "across", "towards"];

function randomWord(){
    return Math.floor(Math.random() * 5);

}
randomWord();
function sentence(){

    var rand1=Math.floor(Math.random() * 10);
    var rand2=Math.floor(Math.random() * 10);
    var rand3=Math.floor(Math.random() * 10);
    var rand4=Math.floor(Math.random() * 10);
    var rand5=Math.floor(Math.random() * 10);
    var rand6=Math.floor(Math.random() * 10);

    var content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " because some " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + preposition[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " which, became a " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";
    document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
   
}






sentence();



