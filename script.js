let Index = 1;
showSlides(Index);

// Next/previous controls
function plusSlides(n) {
  showSlides((Index += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((Index = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  console.log(slides);

  if (n > slides.length) {
    Index = 1;
  }
  if (n < 1) {
    Index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[Index - 1].style.display = "block";
  dots[Index - 1].className += " active";
}
