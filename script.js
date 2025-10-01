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
        // No permite dos operadores
        const ultimo = pantalla.value.slice(-1);
        if (operadores.includes(valor) && !operadores.includes(ultimo) && pantalla.value !== "") {

        }
    }
}



