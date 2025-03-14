

// for navbar on small screen
const list = document.getElementById("list")

list.style.maxHeight = "0px";

function toggleList () {
    list.classList.toggle = ('show')
    if(list.style.maxHeight === "0px"){
        list.style.maxHeight = "300px"
    }else{
        list.style.maxHeight = "0px"
    }
}

// for display Form
document.getElementById("startBtn").addEventListener("click", function() {
    let form = document.getElementById("myForm");
    
    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
        setTimeout(() => {
            form.classList.add("show");
        }, 10);
    } else {
        form.classList.remove("show");
        setTimeout(() => {
            form.style.display = "none";
        }, 500);
    }
});
const  submit = document.querySelector(".close")

submit.addEventListener("click",() => {
    form.classList.remove("show")
})