let i = 0;
let span = ["graduation", "anniversary", "wedding", "birthday"];

function changespan() {
  document.getElementById("obj").innerHTML = span[i];

  if (i < span.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
setInterval(changespan, 5000);
console.log(changespan);

const Right = document.getElementById("next");
Right.addEventListener("click", moveRight);

function moveRight() {
  document.getElementById("scroll").scrollLeft += 20;
}
console.log("Pressed");

// // const prev = document.getElementById("prev");
// function right() {
//   const next = document.getElementById("next");

//   next.onclick = console.log("next button clicked");
// }
// // prev.onclick = function () {
// //   document.getElementById("scroll").scrollLeft += -20;
// //   console.log();
// // };
