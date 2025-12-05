const products = [
    { name: "Rice", price: 42 },
    { name: "Wheat Atta", price: 35 },
    { name: "Sugar", price: 46 },
    { name: "Salt", price: 22 },
    { name: "Potato", price: 26 },
    { name: "Onion", price: 27 },
    { name: "Milk 1L", price: 60 },
    { name: "Tur Dal", price: 118 },
    { name: "Moong Dal", price: 111 },
    { name: "Banana", price: 48 }
];

function loadProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = "";

    products.forEach(p => {
        list.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>₹${p.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
}

loadProducts();
