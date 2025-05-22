


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

