const productos = [
    {
        nombre: "Alimento para perro Dog Chow",
        descripcion: "Alimento premium para cachorros.",
        precio: 25000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Collar reflectante para perros",
        descripcion: "Collar seguro y visible para paseos nocturnos.",
        precio: 15000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Juguete interactivo para perros",
        descripcion: "Juguete que estimula la mente de tu perro.",
        precio: 30000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Transportadora para perros",
        descripcion: "Transportadora segura y cómoda para viajes.",
        precio: 50000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Cama ortopédica para perros",
        descripcion: "Cama diseñada para el confort de tu mascota.",
        precio: 70000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Champú para perros anti-pulgas",
        descripcion: "Champú eficaz contra pulgas y garrapatas.",
        precio: 12000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Snacks para perros",
        descripcion: "Deliciosos snacks para premiar a tu perro.",
        precio: 15000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Arnés ajustable para perros",
        descripcion: "Arnés cómodo y ajustable para paseos.",
        precio: 25000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Pelota para perros",
        descripcion: "Pelota resistente para jugar al aire libre.",
        precio: 20000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Cuencos de comida para perros",
        descripcion: "Set de cuencos para la comida y el agua.",
        precio: 18000,
        clasificacion: "Perros",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Rascador para gatos",
        descripcion: "Juguete y rascador para mantener entretenido a tu gato.",
        precio: 18000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Comedero para gatos",
        descripcion: "Comedero automático para gatos.",
        precio: 22000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Arena para gatos",
        descripcion: "Arena absorbente y controladora de olores.",
        precio: 12000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Transportadora para gatos",
        descripcion: "Transportadora segura y cómoda para viajes.",
        precio: 50000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Cama para gatos",
        descripcion: "Cama suave y cómoda para tu gato.",
        precio: 25000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Juguete para gatos con plumas",
        descripcion: "Juguete interactivo con plumas para jugar.",
        precio: 15000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Comida para gatos premium",
        descripcion: "Alimento balanceado para gatos adultos.",
        precio: 30000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Bandeja de arena para gatos",
        descripcion: "Bandeja de arena con tapa y filtro.",
        precio: 35000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Catnip para gatos",
        descripcion: "Hierba que atrae a los gatos de manera natural.",
        precio: 10000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Pelota de juguete para gatos",
        descripcion: "Pelota suave y ligera para jugar.",
        precio: 8000,
        clasificacion: "Gatos",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Jaula para aves",
        descripcion: "Jaula espaciosa para pájaros pequeños.",
        precio: 35000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Comida para aves de canto",
        descripcion: "Alimento especial para canarios y jilgueros.",
        precio: 28000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Pajarera exterior",
        descripcion: "Pajarera amplia para aves en exteriores.",
        precio: 80000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Perchas de madera para aves",
        descripcion: "Perchas naturales y resistentes para jaulas.",
        precio: 15000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Juguete para aves",
        descripcion: "Juguete colorido y resistente para entretenimiento.",
        precio: 12000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Comedero para aves",
        descripcion: "Comedero ajustable y fácil de limpiar.",
        precio: 18000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Bebedero para aves",
        descripcion: "Bebedero práctico y de fácil acceso.",
        precio: 15000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Suplemento vitamínico para aves",
        descripcion: "Vitamínico para mejorar la salud de tus aves.",
        precio: 22000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Alimento para loros",
        descripcion: "Comida especial para loros y aves grandes.",
        precio: 35000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    },
    {
        nombre: "Decoración para jaulas",
        descripcion: "Elementos decorativos para enriquecer el hábitat.",
        precio: 12000,
        clasificacion: "Aves",
        image: "img/produc.jpeg"
    }
];

const lista_Productos = document.getElementById("product-list");
const clasificacionBar = document.querySelectorAll("#list-clasifiacion-bar li");

let currentIndex = 0;
const productsPerPage = 10;
let productosFiltrados = productos;

function agregarProducto(productos) {
    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.setAttribute("data-class", producto.clasificacion);

        productoDiv.innerHTML = `
            <img src="${producto.image}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>Precio:</strong> $${producto.precio}</p>
        `;

        lista_Productos.appendChild(productoDiv);
    });
}

function cargarProductos() {
    const productosAAgregar = productosFiltrados.slice(currentIndex, currentIndex + productsPerPage);
    agregarProducto(productosAAgregar);
    currentIndex += productsPerPage;
}

function scrollInfinito() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        cargarProductos();
    }
}

clasificacionBar.forEach(li => {
    li.addEventListener("click", function () {
        const clasificacionSeleccionada = this.getAttribute("data-class");

        currentIndex = 0;
        lista_Productos.innerHTML = "";

        if (clasificacionSeleccionada === "todos") {
            productosFiltrados = productos;
        } else {
            productosFiltrados = productos.filter(producto => producto.clasificacion === clasificacionSeleccionada);
        }

        cargarProductos();
    });
});

window.addEventListener("scroll", scrollInfinito);

function cargarTodosLosProductos() {
    currentIndex = 0;
    lista_Productos.innerHTML = "";
    productosFiltrados = productos;
    cargarProductos();
}

cargarTodosLosProductos();