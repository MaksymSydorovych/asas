
export function clearButton() {
	const clearBtn = document.querySelector(".clear-button");
 
	clearBtn.addEventListener("click", clearList);
 
	function clearList() {
	  localStorage.clear();
 
	  const favContainer = document.querySelector(".fav-container");
	  favContainer.innerHTML = "Your list is empty";
 
	}
 }