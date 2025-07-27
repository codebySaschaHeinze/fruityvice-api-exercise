function init() {
  renderAllFruits();
}

function renderAllFruits() {
  getAllFruits();
}

async function getAllFruits() {
  let fruitsRef = document.getElementById("main-content-container");
  fruitsRef.innerHTML = "";
  try {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://www.fruityvice.com/api/fruit/all";
    const response = await fetch(proxy + url);
    const fruits = await response.json();

    for (let i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
      fruitsRef.innerHTML += fruitTemplate(fruit);
      console.log(fruit);
    }
  } catch (error) {
    fruitsRef.innerHTML = errorTemplate();
  }
}
