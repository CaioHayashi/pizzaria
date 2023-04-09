const card = document.getElementById("card");
const back = document.getElementById("back");

card.addEventListener("click", () => {
	card.style.transform = "rotateY(180deg)";
});
