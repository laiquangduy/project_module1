function myFunction() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = `<div id="round-btn">
    <i class="fa-solid fa-angle-down"></i>
  </div>
  <span>See more</span>
  </div>
`;
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = `<div id="round-btn">
    <i class="fa-solid fa-angle-up"></i>
  </div>
  <span>See less</span>
  `;
    moreText.style.display = "inline";
  }
}

// round = document.getElementById("round-btn");
// console.log(round);
// round.onmouseover = function (event) {
//   round.style.backgroundcolor = "#D8DADF";
// };

// function changecolor() {
//   round = document.getElementById("round-btn");
//   round.style.backgrounColor = "#D8DADF";
// }

var btnText1 = document.getElementById("myBtn");
var see = document.getElementById("s");
var ic = document.getElementById("c");

btnText1.onmouseover = function (event) {
  event.target.children[0].style.backgroundColor = "#D8DADF";

  console.log(event.target.children);
  console.log(event.target.children.children);
};

btnText1.onmouseout = function (event) {
  event.target.children[0].style.backgroundColor = "#E4E6EB";

  console.log(event.target.children);
};
