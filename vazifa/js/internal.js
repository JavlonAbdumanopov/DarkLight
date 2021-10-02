document.querySelector(".logoDark").onclick = function () {
    document.querySelector("#header").style.border = "none";
    document.querySelector(".logoDark").style.display = "none";
    document.querySelector(".light").style.display = "block";
    document.querySelector("body").style.background = "#202C36";
    document.querySelector("#header").style.background = "#2B3844";
    document.querySelector(".backDark").src = "img/call-madebackkkkk.svg";
    document.querySelector(".internal_about-back").classList.add("noShadow");
    let h3 = document.querySelectorAll(".h3");
    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = "#D3D4D6";
    }
    let p1 = document.querySelectorAll(".p1");
    for (let i = 0; i < p1.length; i++) {
        p1[i].style.color = "#fff";
    }
    let f = document.querySelectorAll(".f");
    for (let i = 0; i < f.length; i++) {
        f[i].style.color = "#fff";
    }
    let b = document.querySelectorAll(".b");
    for (let i = 0; i < b.length; i++) {
        b[i].style.color = "#fff";
        b[i].style.background = "#2B3844";
        b[i].style.border = "none";
    }
    let span = document.querySelectorAll(".span");
    for (let i = 0; i < span.length; i++) {
        span[i].style.color = "#888F95";
    }
}
document.querySelector(".logoLight").onclick = function () {
    window.location.reload()
}