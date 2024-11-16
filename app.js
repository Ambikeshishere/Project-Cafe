let cart = [];

function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cart.push(item);
    updateCart();  

    var card = event.target.closest('.card');
    
    if (!card.classList.contains('added')) {
        card.classList.add('added');
    }

    updateCartDisplay();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalCostElement = document.getElementById('totalCost');
    
    cartItemsContainer.innerHTML = '';  
    
    let totalCost = 0;
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button>`;
        cartItemsContainer.appendChild(itemElement);
        totalCost += item.price;
    });
    
    totalCostElement.innerHTML = `Total: $${totalCost.toFixed(2)}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();  
    updateCartDisplay();  
}

function toggleCart() {
    const cartSection = document.getElementById('cartSection');
    cartSection.classList.toggle('visible');
}

function checkout(event) {
    if (event) {
        event.preventDefault();
    }

    const customerName = prompt("Please enter your name to proceed with the checkout:");

    if (customerName && customerName.trim() !== "") {
        alert(`Thank you, ${customerName}! Your order has been successfully placed.`);
        cart = [];
        updateCart();  
        toggleCart();  
    } else {
        alert("Name is required to proceed with checkout.");
    }
}

function updateCartDisplay() {
    var cartCount = document.getElementById('cart-count');
    var totalPrice = 0;
    
    cart.forEach(item => totalPrice += item.price);
    
    cartCount.textContent = cart.length;
    
    document.getElementById('totalPrice').textContent = `$${totalPrice.toFixed(2)}`;
}

function filterItems() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const menuItems = document.querySelectorAll('#menuItems .grid-item');
    const bookItems = document.querySelectorAll('#bookItems .grid-item');
    
    menuItems.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        item.style.display = itemName.includes(searchQuery) ? 'block' : 'none';
    });
    
    bookItems.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        item.style.display = itemName.includes(searchQuery) ? 'block' : 'none';
    });
}
