import { handleClick } from "./handleClick.js";
export function createList(json) {
	const container = document.querySelector(".home-container");
 
	container.innerHTML = "";
 
	json.forEach(function (article) {
	  container.innerHTML += `
		 <div class="articles">
		 <i class="far fa-heart" data-id="${article.id}"" data-title="${article.title}" data-author="${article.author}" data-summary="${article.summary}"></i>
			<h3>${article.title}</h3>
			<h4>${article.author}</h4>
			<p>${article.summary}</p>
			 </div> `;
				
	});
 
	const favButtons = document.querySelectorAll(".home-container i");
 
	favButtons.forEach((button) => {
	  button.addEventListener("click", handleClick);
	});
 }