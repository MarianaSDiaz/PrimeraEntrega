const products = [
    {id: 1, name: "Guerrero Trip", price: 74800},
    {id: 2, name: "Mondial 100", price: 77200},
    {id: 3, name: "Motomel ECO 70", price: 81200},
    {id: 4, name: "Onda Biz", price: 98000},
    {id: 5, name: "Onda Dax", price: 95500},
    {id: 6, name: "Yamaha Crypton", price: 109600},
]

let cart = loadCartFromLocalStorage();
const errorCarritoDiv = document.getElementById('error_carrito');
errorCarritoDiv.style.color = 'red';
function mandarMjeDeError(productId){
    errorCarritoDiv.innerHTML = `<p>Producto con ID: ${productId} no encontrado</p>`;    
}
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        mandarMjeDeError(productId)
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.quantity * product.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            totalPrice: quantity * product.price
        });
    }
    
    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id}, 1)" class="button_grey">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    let totalCartPrice = 0; // Inicializar precio total

    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>El carrito está vacío</p>';
        cartDiv.style.color = 'red';
    } else {
        cart.forEach(item => {
            cartDiv.style.color = 'black';
            const cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `
                <p>Cantidad: ${item.quantity}, Nombre: ${item.name}, Precio Total: $${item.totalPrice}</p>
            `;
            cartDiv.appendChild(cartItemDiv);

            totalCartPrice += item.totalPrice;
        });

        //Creador del div para total de compra
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<p><strong>Total del carrito:</strong> $${totalCartPrice}<p>`;
        cartDiv.appendChild(totalDiv);

    };
};

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
};

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
});



const buyButtonDiv = document.getElementById('buy-button-div');
const buyButtonNewDiv = document.createElement('div');

function buyButton(){
    //const buyButtonDiv = document.getElementById('buy-button-div');
    //const buyButtonNewDiv = document.createElement('div');
    if (cart.length === 0) {
        buyButtonNewDiv.innerHTML = '<p>Debes seleccionar los productos</p>';
        buyButtonNewDiv.style.color = 'red';
        buyButtonDiv.appendChild(buyButtonNewDiv);
    } else {
        document.getElementById('buy-button').addEventListener('click', function() {
            // Redirigir a la nueva página
            window.location.href = 'envio.html';
        });
    }
};