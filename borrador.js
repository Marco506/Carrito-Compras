// Obtiene todos los elementos con la clase "producto"
const productos = document.getElementsByClassName("producto");
// Obtiene todos los botones con la clase "btnAgregar"
const btnAgregar = document.getElementsByClassName("btnAgregar");
// Obtiene el contenedor con el id "carrito" donde se mostrarán los productos añadidos
const carrito = document.getElementById("carrito");

// Se ejecuta cuando el contenido de la página ha sido completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el carrito guardado en localStorage o un array vacío si no existe
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    
    // Recorre el contenido guardado en localStorage y lo añade al carrito en la página
    carritoGuardado.forEach(function(contenido) {
        const newElemento = document.createElement("div"); // Crea un nuevo elemento <div>
        newElemento.innerHTML = contenido; // Establece el contenido HTML del nuevo div
        carrito.appendChild(newElemento); // Añade el nuevo div al contenedor del carrito
    });
});

// Añade un evento de clic a cada botón "Agregar al carrito"
for (let index = 0; index < btnAgregar.length; index++) {
    btnAgregar[index].addEventListener("click", function() {
        agregarAlCarrito(index); // Llama a la función para añadir el producto al carrito
    });
}

// Función para añadir un producto al carrito
function agregarAlCarrito(index) {
    const producto = productos[index]; // Obtiene el producto basado en el índice del botón clicado
    const contenido = producto.getElementsByClassName("contedido")[0].innerHTML; // Obtiene el contenido HTML del producto

    // Crea un nuevo elemento <div> y establece su contenido
    const newElemento = document.createElement("div");
    newElemento.innerHTML = contenido;
    carrito.appendChild(newElemento); // Añade el nuevo div al contenedor del carrito

    // Guarda el estado del carrito en localStorage
    guardarCarrito();
}

// Función para guardar el contenido del carrito en localStorage
function guardarCarrito() {
    const carritoContenido = []; // Array para almacenar el contenido HTML de cada producto en el carrito
    const items = carrito.getElementsByTagName("div"); // Obtiene todos los elementos <div> dentro del carrito
    
    // Recorre todos los elementos <div> en el carrito
    for (let i = 0; i < items.length; i++) {
        carritoContenido.push(items[i].innerHTML); // Agrega el contenido HTML de cada div al array
    }
    
    // Guarda el array de contenidos en localStorage como una cadena JSON
    localStorage.setItem("carrito", JSON.stringify(carritoContenido));
}
