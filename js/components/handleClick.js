import {
	getExistingFav
 } from "./getExistingFav.js";

 
 export function handleClick() {
	this.classList.toggle("far");
	this.classList.toggle("fas");
 
	const id = this.dataset.id;
	const title = this.dataset.title;
	const author = this.dataset.author;
	const summary = this.dataset.summary;
	const currentFav = getExistingFav();
 
	const favArticle = currentFav.find(function (favs) {
	  return favs.id === id;
	});
 
	if (favArticle === undefined) {
	  const article = {
		id: id,
		title: title,
		author: author,
		summary: summary,
	  };
	  currentFav.push(article);
	  saveFav(currentFav);
	} else {
	  const newFav = currentFav.filter(function (article) {
			  return favs.id !== id;
			  
		  });
	  saveFav(newFav);
	}
 
 }
 
 function saveFav(fav) {
	localStorage.setItem("favourites", JSON.stringify(fav));
 }