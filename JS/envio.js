let cart = loadCartFromLocalStorage();
function renderCart() {
    const totalCart = document.getElementById('total-carrito');
    totalCart.innerHTML = '';

    let totalCartPrice = 0; // Inicializar precio total

    if (cart.length !== 0) {
            cart.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = `
                <p>Cantidad: ${item.quantity}, Nombre: ${item.name}, Precio Total: $${item.totalPrice}</p>
            `;
            totalCart.appendChild(cartItemDiv);

            totalCartPrice += item.totalPrice;
        });

        //Creador del div para total de compra
        const totalDiv = document.createElement('div');
        totalDiv.innerHTML = `<p><strong>Total del carrito:</strong> $${totalCartPrice}<p>`;
        totalCart.appendChild(totalDiv);

    };
};

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
};

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function cambiarProvincia() {
    let provincia = document.getElementById("provincia").value;
    let ciudad;
    switch (provincia) {
        case "santaFe":
            ciudad = "Rosario";
            break;
        case "cordoba":
            ciudad = "Cordoba";
            break;
        case "buenosAires":
            ciudad = "Capital";
            break;
        default:
            break;
    };
    document.getElementById("op0").value = ciudad.toLowerCase();
    document.getElementById("op0").innerText = ciudad;
    ciudad = document.getElementById("ciudad").value;
    calcularCosto(provincia, ciudad);
}

function cambiarCiudad(){
    let provincia = document.getElementById("provincia").value;
    let ciudad = document.getElementById("ciudad").value;
    calcularCosto(provincia, ciudad);
}

function calcularCosto(provincia, ciudad){
    let valor;
    switch (ciudad.toLowerCase()) {
        case "rosario":
            valor = 0;
            break;
        case "cordoba":
            valor = 3500;
            break;
        case "capital":
            valor = 3000;
            break;
        case "otros": 
            switch (provincia) {
                case "santaFe":
                    valor = 1500;
                    break;
                case "cordoba":
                    valor = 4000;
                    break;
                case "buenosAires":
                    valor = 3500;
                    break;
                default:
                    break;
            }
            break;
    }
    document.getElementById("totalEnvio").innerText = "El valor del envío es: $" + valor;
}