const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const ingredientEl = ingredients.map((element) => {
  const listEl = document.createElement("li");
  listEl.textContent = element;
  listEl.classList.add("item");

  return listEl;
});

ulEl.append(...ingredientEl);
