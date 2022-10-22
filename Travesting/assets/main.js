let i1=document.querySelector(".i-1");
i1.addEventListener("click",function(){
    let i1=document.querySelector(".i-1");
    let imgSrc1 = i1.src;
    let img1=document.querySelector(".bgimg");
    img1.src=imgSrc1;
});
let i2=document.querySelector(".i-2");
i2.addEventListener("click",function(){
    let i2=document.querySelector(".i-2");
    let imgSrc2= i2.src;
    let img2=document.querySelector(".bgimg");
    img2.src=imgSrc2;
});
let i3=document.querySelector(".i-3");
i3.addEventListener("click",function(){
    let i3=document.querySelector(".i-3");
    let imgSrc3 = i3.src;
    let img3=document.querySelector(".bgimg");
    img3.src=imgSrc3;
});
let i4=document.querySelector(".i-4");
i4.addEventListener("click",function(){
    let i4=document.querySelector(".i-4");
    let imgSrc4 = i4.src;
    let img4=document.querySelector(".bgimg");
    img4.src=imgSrc4;
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mb-3");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

