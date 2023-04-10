const cards = [
	{
		front:
			"url(https://images.pexels.com/photos/4109111/pexels-photo-4109111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-1"
	},
	{
		front:
			"url(https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-2"
	},
	{
		front:
			"url(https://images.pexels.com/photos/13642133/pexels-photo-13642133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-3"
	},
	{
		front:
			"url(https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-4"
	},
	{
		front:
			"url(https://images.pexels.com/photos/6072095/pexels-photo-6072095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-5"
	},
	{
		front:
			"url(https://images.pexels.com/photos/9844834/pexels-photo-9844834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-6"
	},
	{
		front:
			"url(https://images.pexels.com/photos/4841736/pexels-photo-4841736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
		back: "pizza-7"
	}
];

cards.map((card) => {
	const container = document.getElementById("container-card");
	const newCard = document.createElement("div");
	newCard.classList.add("card");
	container.appendChild(newCard);

	const newText = document.createElement("p");
	newText.classList.add("text-card");
	newText.innerText = card.back;
	newCard.appendChild(newText);

	newCard.style.backgroundImage = card.front;
	var isFront = true;

	newCard.addEventListener("click", () => {
		if (isFront == true) {
			newCard.style.transform = "rotateY(180deg)";
			newCard.style.backgroundImage = "none";
			newText.style.opacity = "1";

			isFront = false;
		} else {
			newCard.style.transform = "rotateY(360deg)";
			newCard.style.backgroundImage = card.front;
			newText.style.opacity = "0";

			isFront = true;
		}
	});
});
