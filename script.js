const card = document.getElementById("card");
var isFront = true;
card.addEventListener("click", () => {
	const textCard = document.getElementById("text-card");

	if (isFront == true) {
		card.style.transform = "rotateY(180deg)";
		card.style.backgroundImage = "none";
		card.style.backgroundColor = "#eee";
		textCard.style.opacity = "1";
		isFront = false;
	} else {
		textCard.style.opacity = "0";
		card.style.transform = "rotateY(360deg)";
		card.style.backgroundImage =
			"url(https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
		isFront = true;
	}
});
