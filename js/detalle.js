const cafeGuardado = localStorage.getItem("cafeSeleccionado");

if (cafeGuardado) {

    const cafe = JSON.parse(cafeGuardado);

    document.getElementById("cafe-imagen").src = cafe.imagen;
    document.getElementById("cafe-imagen").alt = cafe.nombre;

    document.getElementById("cafe-nombre").textContent = cafe.nombre;
    document.getElementById("cafe-descripcion").textContent = cafe.descripcion;
    document.getElementById("cafe-precio").textContent = cafe.precio;
    document.getElementById("cafe-origen").textContent = cafe.origen;
    document.getElementById("cafe-ingredientes").textContent = cafe.ingredientes;
    document.getElementById("cafe-sabor").textContent = cafe.sabor;
    document.getElementById("cafe-preparacion").textContent = cafe.preparacion;
    document.getElementById("cafe-tamano").textContent = cafe.tamano;

} else {

    window.location.href = "index.html";

}