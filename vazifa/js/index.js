document.querySelector(".country-search-dropdown").onclick = function () {
    document.querySelector(".dropdown").classList.toggle("block");
}

document.querySelector(".header-menu-logo").onclick = function () {
    document.querySelector("#header").style.border = "none";
    document.querySelector(".header-menu-logo").style.display = "none";
    document.querySelector(".light").style.display = "block";
    document.querySelector(".country-search-input").style.background = "#2B3844";
    document.querySelector(".country-search-input").classList.add("noShadow");
    document.querySelector("#country").style.background = "#202C36";
    document.querySelector(".country-content").style.background = "#202C36";
    document.querySelector(".h1").style.color = "#fff";
    let h3 = document.querySelectorAll(".h3");
    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = "#D3D4D6";
    }
    let p1 = document.querySelectorAll(".p1");
    for (let i = 0; i < p1.length; i++) {
        p1[i].style.color = "#fff";
    }
    document.querySelector("#header").style.background = "#2B3844";
    document.querySelector(".input").style.background = "#2B3844";
    let box = document.querySelectorAll(".country-content-box");
    for (let i = 0; i < 8; i++) {
        box[i].style.background = "#2B3844";
        box[i].classList.add("noShadow");
    }
    document.querySelector(".country-search-dropdown").style.background = "#2B3844";
    document.querySelector(".dropDark").src = "img/Group 2DropdownWhite.png";
    document.querySelector(".country-search-dropdown").classList.add("noShadow");
    document.querySelector(".dropdown").style.background = "#2B3844";
    let h2 = document.querySelectorAll(".h2");
    for (let i = 0; i < 8; i++) {
        h2[i].style.color = "#fff";
    }
    let span = document.querySelectorAll(".span");
    for (let i = 0; i < span.length; i++) {
        span[i].style.color = "#888F95";
    }
}

document.querySelector(".light").onclick = function () {
    window.location.reload()
}