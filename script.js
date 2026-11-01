const products = [
    {
        name: "Boxing Gloves",
        price: 4500,
        category: "Boxing"
    },
    {
        name: "Punching Bag",
        price: 12000,
        category: "Training"
    },
    {
        name: "MMA Gloves",
        price: 3500,
        category: "MMA"
    }
];
const productList = document.getElementById("productList");

products.forEach(function(product) {

    productList.innerHTML += `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p>${product.price} DA</p>
            <button>أضف إلى السلة</button>
        </div>
    `;

});
