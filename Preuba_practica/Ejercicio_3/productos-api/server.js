const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(cors()); // Habilita CORS para todas las rutas

// Simulando una base de datos de productos
const productos = [
    {
        buyPrice: 183520.78543714658,
        detail: null,
        erp: null,
        name: "ALIMENTO PARA PERRO DOG CHOW CACHORROS MINIS Y PEQUEÑOS BULTO (22.7 KG)",
        price: 210957.14286,
        priceRecomended: 266190.1704,
        priceType: "APP",
        bannerResponse: null,
        favoritos: true,
        clasificaciones: ["Perros", "dogourmet"],
        estado: "Activo"
    },
    {
        buyPrice: 150000.00,
        detail: null,
        erp: null,
        name: "ALIMENTO PARA PERRO RACION BALANCEADA (15 KG)",
        price: 200000.00,
        priceRecomended: 240000.00,
        priceType: "APP",
        bannerResponse: null,
        favoritos: false,
        clasificaciones: ["Perros", "balanceado"],
        estado: "Activo"
    },
    {
        buyPrice: 120000.00,
        detail: null,
        erp: null,
        name: "Galletas PARA PERRO MUNCHIES (1 KG)",
        price: 160000.00,
        priceRecomended: 180000.00,
        priceType: "APP",
        bannerResponse: null,
        favoritos: true,
        clasificaciones: ["Perros", "snacks"],
        estado: "Inactivo"
    },
    {
        buyPrice: 200000.00,
        detail: null,
        erp: null,
        name: "COMIDA HÚMEDA PARA PERRO ADULTO (400 GR)",
        price: 250000.00,
        priceRecomended: 290000.00,
        priceType: "APP",
        bannerResponse: null,
        favoritos: true,
        clasificaciones: ["Perros", "humedo"],
        estado: "Activo"
    }
];

// Servicio POST para filtrar productos
app.post('/api/productos', (req, res) => {
    const { favoritos, clasificaciones, estado } = req.body;

    // Filtrar los productos según la entrada
    const filteredProducts = productos.filter(product => {
        return (
            (favoritos === product.favoritos) && // Filtrar por favoritos
            clasificaciones.some(clasificacion => product.clasificaciones.includes(clasificacion)) && // Filtrar por clasificaciones
            estado === product.estado // Filtrar por estado
        );
    });

    // Retorna los productos filtrados
    res.json(filteredProducts);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
