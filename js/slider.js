function addCountImage(n) {
    if(slideIndex===0 && n< 0 ){
        slideIndex = slider.length;
    }
    if(n > slider.length){
        slideIndex =0 ;
    }
    showImageSlider(slideIndex += n );
}

function showImageSlider(n) {
    var x = document.getElementsByClassName("slide");
    if(n > slider.length|| n < 0 ){
        slideIndex=0;
    }

    x[0].style.backgroundImage = slider[slideIndex];
}

function carousel() {
    var x = document.getElementsByClassName("slide");
    if(slideIndex > slider.length)slideIndex=0;

    x[0].style.backgroundImage = slider[slideIndex];
    slideIndex++;
    setTimeout(carousel, 2000); // Change image every 2 seconds
}