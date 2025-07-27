function init() {
  renderAllFruits();
}

function renderAllFruits() {
  let fruitsRef = document.getElementById("main-content-container");
  fruitsRef.innerHTML = "";
}

async function getAllFruits() {
  const response = await fetch("https://www.fruityvice.com/api/fruit/all");
  const fruits = await response.json();
  for (let fruitIndex = 0; fruitIndex < fruits.length; fruitIndex++) {
    const fruit = fruits[fruitIndex];
  }
}
