const linkNav = document.querySelectorAll('[href^="#"]');

let speed = 0.5;

for (let i = 0; i < linkNav.length; i++) {
linkNav[i].addEventListener('click',slowScroll , false);
}

function slowScroll(e){ 
    e.preventDefault(); 
    let scroll = window.pageYOffset; 
    let hash = this.href.replace(/[^#]*(.*)/, '$1');  
    let dist = document.querySelector(hash).getBoundingClientRect().top;
    let start = null;
    requestAnimationFrame(step);
    function step(time) {
        if (start === null) start = time;
        let progress = time - start;
        let result = (dist < 0 ? Math.max(scroll - progress/speed, scroll + dist) : Math.min(scroll + progress/speed, scroll + dist));
        window.scrollTo(0,result);
        if (result != scroll + dist) {
            requestAnimationFrame(step)
        } else {
            location.hash = hash;
        }
    }
}



