function search() {
    const searchBox = document.getElementById('searchBox');
    const searchText = searchBox.value.toLowerCase();
    const content = document.getElementById('content');
    const items = content.getElementsByTagName('p');

    for (let item of items) {
        item.classList.remove('highlight');
        if (item.textContent.toLowerCase().includes(searchText)) {
            item.classList.add('highlight');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product, price, image) {
    cart.push({ product, price, image });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} added to cart!`);
}

function displayCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '<h2>Cart</h2>';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<img src="${item.image}" alt="${item.product}" width="200px">
         ${item.product} - $${item.price}`;
        cartDiv.appendChild(itemDiv);
    });
}
