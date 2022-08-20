function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<i class="fa-solid fa-angle-down"></i>See more`;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `<i class="fa-solid fa-angle-up"></i>See less`;
    moreText.style.display = "inline";
  }
}
