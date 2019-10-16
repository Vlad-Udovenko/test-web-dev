let items = document.querySelectorAll(".modal-item");
let open = document.querySelectorAll(".modal-open")
index=0;

items.forEach(element => {
    element.style.display = "none";
});

for(let i=0; i<open.length; i++){
    open[i].addEventListener("click",(el)=>{
        items[index].style.display = "none";
        items[i].style.display = "block";
        index=i;
    })
}