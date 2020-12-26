let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
       target.scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}



const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 30);
    }
    };
    
    // side bar
    function openNav(){
        let opens = document.getElementById('side_bar');
        if(!opens.style.display || opens.style.width  === '0px'){
         opens.style.width = '150px';
         opens.style.display = 'block';
         document.getElementById('main').style.marginLeft = "150px";
        //  document.getElementById('header').style.marginLeft = "150px";

        }else{
           opens.style.width = '0px';
           document.getElementById('main').style.marginLeft = "0px";
        //    document.getElementById('header').style.marginLeft = "0px";

        }
       }