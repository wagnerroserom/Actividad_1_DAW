const pantalla = document.getElementById("pantalla");

//------------- FUNCIONES DE LA CALCULADORA -------------//

// Función que agrega un número a la pantalla
function agregar(valor) {
    pantalla.value += valor;
}

// Función que limpia toda la pantalla
function limpiar() {
    pantalla.value = "";
}

// Función que borra el último carácter o número ingresado
function borrarUltimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}

// Función que permite realizar el respectivo cálculo
function calcular() {
    try {

        // Verifica y evita la división por cero
        if (pantalla.value.includes("/0")) {
            alert("Error: No se puede dividir para cero");
            return;
        }
        pantalla.value = eval(pantalla.value);
    } catch {

        // Si hay dos signos muestra un error
        alert("Operación no válida");
    }
}

// Se almacena la tecla ingresada y acepta solo números y los operadores mas, menos, multiplicar, dividir
document.addEventListener("keydown", (event) => {
    const key = event.key;
    if ("0123456789+-*/.".includes(key)) {
        agregar(key);
    }

    // Al presionar Enter se calcula la operación
    else if (key === "Enter") {
        event.preventDefault();
        calcular();
    }

    // Al presionar backspace, se borra el último carácter ingresado
    else if (key === "Backspace") {
        event.preventDefault();
        borrarUltimo();
    }

    // Al presionar "c" limpia la pantalla
    else if (key.toLocaleLowerCase() === "c") {
        limpiar();
    }
})