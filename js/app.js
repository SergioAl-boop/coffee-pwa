const cafes = [
    {
        imagen: "imagenes/coffe1.png",
        nombre: "Espresso",
        descripcion: "Café intenso y concentrado, ideal para comenzar el día.",
        precio: "$45",
        origen: "Italia",
        ingredientes: "Café molido y agua",
        sabor: "Intenso, fuerte y ligeramente amargo",
        preparacion: "Se prepara utilizando una máquina de espresso a alta presión.",
        tamano: "30 ml"
    },
    {
        imagen: "imagenes/coffe2.png",
        nombre: "Cappuccino",
        descripcion: "Café cremoso combinado con leche y espuma.",
        precio: "$60",
        origen: "Italia",
        ingredientes: "Espresso, leche y espuma de leche",
        sabor: "Suave, cremoso y ligeramente dulce",
        preparacion: "Se prepara mezclando espresso con leche vaporizada y espuma.",
        tamano: "240 ml"
    },
    {
        imagen: "imagenes/coffe3.png",
        nombre: "Latte",
        descripcion: "Una bebida suave y cremosa con un delicado sabor a café.",
        precio: "$65",
        origen: "Italia",
        ingredientes: "Espresso y leche vaporizada",
        sabor: "Suave, cremoso y equilibrado",
        preparacion: "Se combina un espresso con una mayor cantidad de leche vaporizada.",
        tamano: "300 ml"
    },
    {
        imagen: "imagenes/coffe4.png",
        nombre: "Americano",
        descripcion: "Café ligero y aromático preparado con espresso y agua.",
        precio: "$50",
        origen: "Estados Unidos",
        ingredientes: "Espresso y agua caliente",
        sabor: "Suave, aromático y ligeramente amargo",
        preparacion: "Se agrega agua caliente a uno o dos shots de espresso.",
        tamano: "250 ml"
    },
    {
        imagen: "imagenes/coffe5.png",
        nombre: "Mocha",
        descripcion: "Una combinación de café, chocolate y leche.",
        precio: "$70",
        origen: "Estados Unidos",
        ingredientes: "Espresso, chocolate, leche y espuma",
        sabor: "Dulce, cremoso y con sabor a chocolate",
        preparacion: "Se mezcla espresso con chocolate y leche vaporizada.",
        tamano: "300 ml"
    },
    {
        imagen: "imagenes/coffe6.png",
        nombre: "Macchiato",
        descripcion: "Espresso con una pequeña cantidad de espuma de leche.",
        precio: "$55",
        origen: "Italia",
        ingredientes: "Espresso y espuma de leche",
        sabor: "Intenso con un toque cremoso",
        preparacion: "Se agrega una pequeña cantidad de espuma de leche sobre el espresso.",
        tamano: "90 ml"
    },
    {
        imagen: "imagenes/coffe7.png",
        nombre: "Flat White",
        descripcion: "Café de textura suave con una fina capa de leche.",
        precio: "$65",
        origen: "Australia",
        ingredientes: "Espresso y leche vaporizada",
        sabor: "Intenso, cremoso y equilibrado",
        preparacion: "Se prepara con espresso y leche vaporizada con microespuma.",
        tamano: "180 ml"
    },
    {
        imagen: "imagenes/coffe8.png",
        nombre: "Cold Brew",
        descripcion: "Café frío preparado mediante una extracción lenta.",
        precio: "$70",
        origen: "Estados Unidos",
        ingredientes: "Café molido y agua fría",
        sabor: "Suave, refrescante y ligeramente dulce",
        preparacion: "El café se deja reposar en agua fría durante varias horas.",
        tamano: "350 ml"
    },
    {
        imagen: "imagenes/coffe9.png",
        nombre: "Affogato",
        descripcion: "Una combinación de helado de vainilla y espresso caliente.",
        precio: "$75",
        origen: "Italia",
        ingredientes: "Espresso y helado de vainilla",
        sabor: "Dulce, cremoso e intenso",
        preparacion: "Se sirve una bola de helado acompañada de un shot de espresso caliente.",
        tamano: "180 ml"
    },
    {
        imagen: "imagenes/coffe10.png",
        nombre: "Café con Leche",
        descripcion: "Café tradicional combinado con leche caliente.",
        precio: "$55",
        origen: "España",
        ingredientes: "Café espresso y leche caliente",
        sabor: "Suave, cremoso y equilibrado",
        preparacion: "Se mezcla café espresso con una cantidad similar de leche caliente.",
        tamano: "250 ml"
    }
];

const contenedor = document.querySelector(".contanier");

cafes.forEach((cafe, indice) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = cafe.imagen;
    img.alt = cafe.nombre;

    const contenido = document.createElement("div");
    contenido.classList.add("card-content");

    const titulo = document.createElement("h2");
    titulo.textContent = cafe.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = cafe.descripcion;

    const boton = document.createElement("button");
    boton.classList.add("card-button");
    boton.textContent = "Ver más";

    boton.addEventListener("click", () => {
        localStorage.setItem("cafeSeleccionado", JSON.stringify(cafe));
        window.location.href = "detalle.html";
    });

    contenido.appendChild(titulo);
    contenido.appendChild(descripcion);
    contenido.appendChild(boton);

    card.appendChild(img);
    card.appendChild(contenido);

    contenedor.appendChild(card);
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./serviceworked.js")
            .then(() => {
                console.log("Service Worker registrado correctamente");
            })
            .catch((error) => {
                console.error("Error al registrar el Service Worker:", error);
            });
    });
}