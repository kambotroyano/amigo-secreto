const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");

const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    // Validar si el campo de entrada está vacío
    if (inputAmigo.value.trim() === "") {
        // Si está vacío, mostrar un mensaje de error
        alert("Por favor, inserte un nombre.");
    } else {
        // Si no está vacío, agregar el nombre a la lista
        listaAmigos.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        // Limpiar el campo de entrada
        inputAmigo.value = "";
    }
}

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}


