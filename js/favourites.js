import {
	getExistingFav
 } from "./components/getExistingFav.js";
 import {
	clearButton
 } from "./components/clearButton.js";
 
 
 const favourites = getExistingFav();
 clearButton();
 
 const favContainer = document.querySelector(".fav-container");
 
 favContainer.innerHTML = "";
 
 if (favourites.length === 0) {
	favContainer.innerHTML = "No favourites yet";
 }
 
 favourites.forEach((fav) => {
	favContainer.innerHTML += `
	<div class="articles">
	<h3>${fav.title}</h3>
	<h4>${fav.author}</h4>
	<p>${fav.summary}</p>
	
	`;
 });