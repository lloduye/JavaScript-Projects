//Countdown timer
function countdownFunction() { //Defining a function and assigning it a name
    var seconds=document.getElementById("seconds").value;

    function tick() { //Defining a function and assigning it a name
        seconds=seconds-1;
        timer.innerHTML=seconds;
        var time =setTimeout(tick,1000); //Defining a variable and assigning it a value
        if(seconds== -1) { //Conditional statement 
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML="";
        }
    }
    tick();
}

//Slideshow challenge
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}