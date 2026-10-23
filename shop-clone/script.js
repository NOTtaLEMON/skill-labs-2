const items = [
  { name: "Headphones", price: 49, icon: "🎧" },
  { name: "Backpack", price: 35, icon: "🎒" },
  { name: "Watch", price: 89, icon: "⌚" },
  { name: "Sneakers", price: 65, icon: "👟" },
  { name: "Camera", price: 220, icon: "📷" },
  { name: "Book", price: 12, icon: "📘" },
];

let cart = 0;
const list = document.getElementById("products");
const count = document.getElementById("count");

function render(filter = "") {
  list.innerHTML = "";
  items
    .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((p) => {
      const card = document.createElement("article");
      card.className = "product";
      card.innerHTML = `<div class="icon">${p.icon}</div><h3>${p.name}</h3><p>$${p.price}</p><button>Add to cart</button>`;
      card.querySelector("button").onclick = () => {
        count.textContent = ++cart;
      };
      list.appendChild(card);
    });
}

document.getElementById("search").oninput = (e) => render(e.target.value);
render();
