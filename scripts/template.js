function fruitTemplate(fruit) {
  return `
            <div class="fruit_container">
                <h2>${fruit.name}</h2>
                <table>
                    <tr>
                        <td>Gattung:</td>
                        <td>${fruit.genus}</td>
                    </tr>
                    <tr>
                        <td>Familie:</td>
                        <td>${fruit.family}</td>
                    </tr>
                    <tr>
                        <td>Protein:</td>
                        <td>${fruit.nutritions.protein}g</td>
                    </tr>
                    <tr>
                        <td>Kohlenhydrate:</td>
                        <td>${fruit.nutritions.carbohydrates}g</td>
                    </tr>
                    <tr>
                        <td>Kalorien:</td>
                        <td>${fruit.nutritions.calories}Kcal</td>
                    </tr>
                    <tr>
                        <td>Zucker:</td>
                        <td>${fruit.nutritions.sugar}g</td>
                    </tr>
                </table>
            </div>
         `;
}

function errorTemplate() {
  return `
            <p>Fehler bei laden der Früchte!`;
}
