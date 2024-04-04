const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

const arr = ingredients.map((ingredient) => {
  const liIngredient = document.createElement("li");
  liIngredient.textContent = ingredient;
  liIngredient.classList.add("item");
  return liIngredient;
});

ulIngredients.append(...arr);
