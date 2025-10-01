// Se conecta JS con la pantalla y se establece máximo de dígitos
const pantalla = document.getElementById("pantalla");
const MAX_DIGITOS = 8;

// FUNCIONES DE LA CALCULADORA

function agregar(valor) {
    const operadores = "+-*/%";

    // Verifica si es número o punto decimal
    if ("0123456789.".includes(valor)) {
        // Divide la expresión en pantalla en partes separadas por operadores
        const partes = pantalla.value.split(/[\+\-\*\/%]/);
        const ultimoNumero = partes[partes.length -1];

        // Permite agregar un último número si no excede el máximo permitido
        if (ultimoNumero.length < MAX_DIGITOS) {
            pantalla.value += valor;
        }
    } else {
        // No permite dos operadores a la vez
        const ultimo = pantalla.value.slice(-1);
        if (operadores.includes(valor) && !operadores.includes(ultimo) && pantalla.value !== "") {

        }
    }
}

// Vacea completamente la pantalla
function limpiar() {
    pantalla.value = "";
}

// Elimina el último carácter escrito en pantalla
function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}

// Define la expresión con lo que haya en pantalla si está vacía, no hace nada
function calcular() {
    try {
        let expresión = pantalla.value;

        if (!expresión) return;

        // Revisa que sólo contenga dígitos y operadores
        if (/[^0-9+\-*/().% ]/.test(expresión)) {
            alert("La expresión contiene carácteres no permitidos.");
            return;
        }

        // Evitamos la división por cero
        if (/\/0(?![\d\.])/.test(expresión)) {
            alert("Error: División por cero");
            return;
        }

        // Reemplaza cantidades por porcentajes
        expresión = expresión.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        expresión = expresión.replace(/\)%/g, ")/100");

        // Evalua la expresión y guarda el resultado
        const resultado = eval(expresión);

        //Muestra el resultado en pantalla
        pantalla.value = resultado.toString();
    } catch (e) {
        console.error(e);
        alert("Operación no válida";)
    }
}
