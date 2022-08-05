const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const precentages = document.getElementById("precentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("fill")
  ) {
    index--;
  }

  smallCups.forEach((cup, indexCup) => {
    if (indexCup <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
