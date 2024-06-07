let nombreUsuario = prompt("Ingrese el email de contacto:");
const parrafoEmail = document.getElementById("parrafoEmail");
parrafoEmail.innerText = "La factura de tu compra se enviará al mail " + nombreUsuario;


alert("Solo hacemos envíos a Santa Fe, Buenos Aires o Cordoba")


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


// ******** CODIGO PRIMERA PRE ENTREGA********
/*let permanecerLoopProvincia = true;

while (permanecerLoopProvincia) {
    let provincia = prompt("Ingrese su provincia para calcular el envío:");
    provincia = provincia.toLowerCase();

    switch (provincia) {
    case "santa fe":
        designarCostoEnvioStaFe();
        permanecerLoopProvincia = false;
        break;
    case "buenos aires":
        designarCostoEnvioBsAs();
        permanecerLoopProvincia = false
        break;
    case "cordoba":
        designarCostoEnvioCordoba();
        permanecerLoopProvincia = false
    break;
    case "salir":
        permanecerLoopProvincia = false
        break;

    default:
        alert("Escriba el nombre de la provincia o 'salir' para terminar.");
        break;
    };
}


function designarCostoEnvioStaFe() {
    let permanecerLoop = true;
    while (permanecerLoop) {
        
        let confirmacionCiudad = prompt("El envío es para Rosario? SI / NO");
        confirmacionCiudad = confirmacionCiudad.toLowerCase();

        if (confirmacionCiudad == "si") {
            alert("El envío es gratuito");
            permanecerLoop = false;
        } else if (confirmacionCiudad == "no"){
            alert("El envío cuesta $1500");
            permanecerLoop = false;
        } else {
            alert("Debe responder con si o no");
        };
    };
};

function designarCostoEnvioBsAs() {
    let permanecerLoop = true;
    while (permanecerLoop) {
        
        let confirmacionCiudad = prompt("El envío es para CABA? SI / NO");
        confirmacionCiudad = confirmacionCiudad.toLowerCase();

        if (confirmacionCiudad == "si") {
            alert("El envío cuesta $3000");
            permanecerLoop = false;
        } else if (confirmacionCiudad == "no"){
            alert("El envío cuesta $3600");
            permanecerLoop = false;
        } else {
            alert("Debe responder con si o no");
        };
    };
};

function designarCostoEnvioCordoba() {
    let permanecerLoop = true;
    while (permanecerLoop) {
        
        let confirmacionCiudad = prompt("El envío es para Cordoba ciudad? SI / NO");
        confirmacionCiudad = confirmacionCiudad.toLowerCase();

        if (confirmacionCiudad == "si") {
            alert("El envío cuesta $3500");
            permanecerLoop = false;
        } else if (confirmacionCiudad == "no"){
            alert("El envío cuesta $4000");
            permanecerLoop = false;
        } else {
            alert("Debe responder con si o no");
        };
    };
};*/