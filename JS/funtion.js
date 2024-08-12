const productos = document.getElementsByClassName("producto");
const btnAgregar = document.getElementsByClassName("btnAgregar");
const carrito = document.getElementById("carrito");


document.addEventListener("DOMContentLoaded", function () {
    const carritoGuardado  = JSON.parse(localStorage.getItem("carrito")) || [];

    carritoGuardado.forEach(function(contenido) {
    const newElemento = document.createElement("div");
    newElemento.innerHTML = contenido;
    carrito.appendChild(newElemento);
    const btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "Eliminar"
    carrito.appendChild(btnEliminar);
    
    } );
    
})

for (let index = 0; index < btnAgregar.length; index++) {
   btnAgregar[index].addEventListener("click", function () {
   if (btnAgregar[index]) {
    alert("Añadido al carrito")
    agregarAlCarrito(index);
   }
   
   })
    
}
function agregarAlCarrito(index) {
    const producto = productos[index];
    const contenido = producto.getElementsByClassName("contedido")[0].innerHTML;

    const newElemento = document.createElement("div");
    const btnEliminar = document.createElement("button");
   
    btnEliminar.innerHTML="Eliminar"
    btnEliminar.id= "btnEliminar"
    newElemento.innerHTML = contenido;
   
    carrito.appendChild(newElemento);
    carrito.appendChild(btnEliminar);
    guardarCarrito();

    btnEliminar.addEventListener("click")
}

function guardarCarrito() {
    const carritoContenido = [];
    const items = carrito.getElementsByTagName("div");

    for (let i = 0; i < items.length; i++) {
       carritoContenido.push(items[i].innerHTML);
    }

    

    localStorage.setItem("carrito", JSON.stringify(carritoContenido));
}

function Eliminar() {
    
}

