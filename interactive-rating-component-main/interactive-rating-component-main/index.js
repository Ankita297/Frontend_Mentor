let ratings = document.querySelectorAll(".circle");

let rating = document.getElementById("rating");

let btn = document.getElementById("btn");

let card_1 = document.querySelector(".card-1");
let card_2 = document.querySelector(".card-2");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function () {
    let num = ratings[i].innerHTML;
   
    console.log(num);
    for (let i = 0; i < ratings.length; i++) {
      ratings[i].classList.contains("selected");
      ratings[i].classList.remove("selected");
    }

    ratings[i].classList.add("selected");

    btn.addEventListener("click", function () {
      card_1.style.display = "none";
      card_2.style.display = "block";

      rating.innerHTML = num;
    });
  });
}
