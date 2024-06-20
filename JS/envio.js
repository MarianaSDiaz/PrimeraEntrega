const muestraDeCompra = document.createElement('div')
const divDeCompra = document.getElementById('compra');

document.addEventListener('DOMContentLoaded', function() {
    showCartAndTotal();
});

// Cargar el carrito y calcular el total al cargar la página
function showCartAndTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = calcularTotal(cart);

    let cartHTML = '';
    cart.forEach(item => {
        cartHTML += `<p>${item.nombre} - ${item.precio}</p>`;
        console.log(cartHTML);
    });

    muestraDeCompra.innerHTML = cartHTML;
    divDeCompra.appendChild(muestraDeCompra);
    document.getElementById('total-carrito').textContent = `Total: $${total.toFixed(2)}`;
}

function calcularTotal(cart) {
    let total = 0;
    cart.forEach(item => {
        total += item.precio;
    });
    return total;
}


function cambiarProvincia() {
    let provincia = document.getElementById("provincia").value;
    let ciudad;
    console.log(ciudad);
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
    console.log(provincia);
    console.log(ciudad);
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