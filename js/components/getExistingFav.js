


export function getExistingFav() {
  const fav = localStorage.getItem("favourites");
 
  if (!fav) {
    return [];
  } else {
    return JSON.parse(fav);
    
  }
  
}
