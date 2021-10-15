import {
	baseUrl
 } from "./setting/api.js";
 const url = baseUrl + "articles";
 import {
	displayMessage
 } from "./components/displayMessage.js";
 import {
	createList
 } from "./components/createList.js";
import { filterSearch } from "./components/filter.js";

(async function () {

  try {
    const response = await fetch(url);
    const json = await response.json();
	 createList(json);
	filterSearch(json);
  } catch (error) {
    displayMessage("error", error, ".home-container");
  }
})();