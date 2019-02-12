
function plusDivs(n) {
    showDivs(slideDepoIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider-item");
    if (n > x.length) {slideDepoIndex = 1}
    if (n < 1) {slideDepoIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideDepoIndex-1].style.display = "block";
    setNav();
}

function setNav(){
    var x = document.getElementsByClassName("nav-depoimentos");
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    x[slideDepoIndex-1].classList.add('active');
}

function currentDiv(n){
    slideDepoIndex = n;
    showDivs(n);
}