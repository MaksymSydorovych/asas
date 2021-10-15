import {
	createList
 } from "./createList.js";
 import {
	displayMessage
 } from "./displayMessage.js";
 
 export function filterSearch(json) {
	const filter = document.querySelector(".search");
 
	filter.onkeyup = function () {
 
	  const filterValue = event.target.value.trim().toLowerCase();
 
	  const filterLists = json.filter(function (article) {
		 if (article.title.toLowerCase().startsWith(filterValue)) {
			return true;
		 }
	  });
 
	  createList(filterLists);
 
	};
 }