$(document).ready(function(){
    $('#profile__ripple').ripples({
        resolution: 512, 
        dropRadious: 10
    });
    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach(function(bar){
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerHTML = percentage + '%';
        bar.style.width = percentage + '%';
    });

    // counter

    const counters = document.querySelectorAll('.counter');
    function reunCounter(){
        counters.forEach(counter =>{
            counter.innerHTML = 0;
          
            let target = +counter.dataset.count;
            let divideCounter = target /50;
           let countIt = function(){
               let displayed = +counter.innerText;
               if(displayed <target){
                   counter.innerText = Math.ceil(displayed +divideCounter);
                   setTimeout(countIt, 1);
               }else{
                   counter.innerText = target;
               }
           }
           countIt();
        });
    }
   
    // when scroll down counter would run

    let counterSection = document.querySelector('.counter__wrapper');
    let option = {
        rootMargin : "0px 0px -100px 0px"
    }
    let finish =0;//this well only allow counter to count once 
    const sectionObserver = new IntersectionObserver(function(e){
        if(e[0].isIntersecting && finish !==1){
            finish = 1;
            reunCounter();
        }
    },option)

    sectionObserver.observe(counterSection);


    // image filter
    let $Swrrper = $('.portfilio__wrapper');
    $Swrrper.isotope({
        filter :'*',
        layoutMode: 'masonry',
        animationOptions:{
            duration: 750, 
            easing: 'linear'
        }
    });
    let links = document.querySelectorAll('.tabs a');
    links.forEach(link =>{
        let selector = link.dataset.filter;
        link.addEventListener('click', function(e){
            e.preventDefault();
            $Swrrper.isotope({
                filter :selector,
                layoutMode: 'masonry',
                animationOptions:{
                    duration: 750, 
                    easing: 'linear'
                }
            });
           
            links.forEach(link=>{
                link.classList.remove('active');
            })
            e.target.classList.add('active');
        });
    });
    // magnify 
    $('manify').magnificPopup({
        type: 'image', 
        closeOnContentClick: true,
        closeBtnInside: false,
        
        gallery :{
            enabled :true, 
        }, 
        zoom :{
            enabled : true,
            
        }
    })
});
