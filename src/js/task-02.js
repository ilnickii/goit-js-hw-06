const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');

const markup = ingredients.map((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList.add('item');
  console.log(li);
  return li;
})

ul.append(...markup);