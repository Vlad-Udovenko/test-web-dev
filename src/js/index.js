
let img = document.querySelectorAll(".congruts__main_photo-img");
img[0].addEventListener("click", (el) => {
    el.target.classList.toggle('congruts__main_photo-img-active')
});


let wrapper = document.getElementsByClassName("congruts__main_photo-list");
let count = 1;
let prevImg = 0;


function slider() {
    let indez = 0;
    wrapper[0].children[prevImg].style.display = "inline-block";
    let interval = setInterval(() => {
        wrapper[0].children[prevImg].style.display = "none";
        wrapper[0].children[count].style.display = "inline-block";
        prevImg = count;
        ++count;
        if (count >= wrapper[0].children.length) {
            count = 0;
        }
    }, 2000);

img[1 || 2].addEventListener("click", () => {
    if (indez == 0) {
        clearInterval(interval);
        return indez = 1;
    } 
    else {
        slider()
        return indez = 0;
    };
});
};
slider();