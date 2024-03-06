let netflixCard = document.querySelectorAll(".card");
for (let i = 0; i < netflixCard.length; i++) {
  if (i === 0) {
    netflixCard[0].addEventListener("click", function () {
      this.style.cssText =
        "box-shadow:0.5px 0.5px 5px 0.5px rgb(98, 97, 97); border: 2px solid grey;";
    });
  } else if (i === 1) {
    netflixCard[1].addEventListener("click", function () {
      this.style.cssText =
        "box-shadow:0.5px 0.5px 5px 0.5px rgb(98, 97, 97); border: 2px solid grey;";
    });
  }
}

/*document.querySelector(".card").addEventListener("click", function () {
  this.style.boxShadow = "10px 20px 30px blue";
});*/
/*if ("class" === ".first-card") {
  document.querySelector(".first-card").addEventListener("click", function () {
    this.style.cssText =
      "box-shadow:0.5px 0.5px 5px 0.5px rgb(98, 97, 97); border: 2px solid grey;";
  });
}*/
