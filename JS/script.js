let permanecerLoopProvincia = true;

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