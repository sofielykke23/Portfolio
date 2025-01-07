window.addEventListener("load", start);

function start() {
    const stregkodeForside = document.querySelector("#stregkode_forside");
    const sortStregkoder = document.querySelectorAll(".sortstregkode");

    if (stregkodeForside) {
        stregkodeForside.addEventListener("mouseover", hoverEffect);
        stregkodeForside.addEventListener("mouseleave", removeEffect);
    }

    sortStregkoder.forEach((element) => {
        element.addEventListener("mouseover", hoverEffect);
        element.addEventListener("mouseleave", removeEffect);
    });
}

function hoverEffect(event) {
    
    event.target.classList.add("stregkode_effekt");
}

function removeEffect(event) {
   
    event.target.classList.remove("stregkode_effekt");
}

