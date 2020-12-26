let bar_btn = document.getElementById('bar_btn');
let nav = document.getElementById('nav');
bar_btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    bar_btn.classList.toggle('active');

});





const text = 'Hello world';
let index = 0;

function animationtext() {
    let text_animation = document.getElementById('text_animation');
    text_animation.innerText = text.slice(0, index);
    text_animation.style.transition = '.5s';
    index++;
    if (index > text.length - 1) {
        index = 0;
    }
}
timer();

function timer() {
    setInterval(function () {
        animationtext();
    }, 200)
}

$(document).ready(function () {
    $('a').click(function (event) {
        let node = $(this);
        let target = node.attr('target');
        let href = node.attr('href');
        if (target === undefined && href !== undefined) {
            switch (true) {
                case href.indexOf('http://') !== -1:
                case href.indexOf('https://') !== -1:
                case href.indexOf('.pdf') !== -1: {
                    node.attr('target', '_blank').addClass('exampleLinkAutoTarget');
                    break;
                }


            }
        }
    })
})


$(function(){
    $('p').click(function(){
        $(this).toggleClass('highlight');
    },function(){
        $(this).removeClass('highlight');
    })
})


