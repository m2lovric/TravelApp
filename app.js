let slideIndex = 1;

slideShow(slideIndex);

function slideControl(n){
    slideShow(slideIndex += n);
}

function slideShow (n){
    let i;
    const slides = document.getElementsByTagName("article");
    console.log(slides);
    if(n > slides.length){
        slideIndex = 1;
    } 
    if (n < 1){
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
};























showPrague = () => {
    document.querySelector("#tokyo").style.display = "none";
    document.querySelector("#prague").style.display = "block";
    console.log("triggered");
}

showTokyo = () => {
    document.querySelector("#prague").style.display = "none";
    document.querySelector("#tokyo").style.display = "block";
    
    console.log("triggered")
}