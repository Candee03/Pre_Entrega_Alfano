let carrito = [];

const traerCarrito = () => {
    if (localStorage.getItem("carrito")) {
        carrito = getCarritoStorage();
        mostrarCarrito()
    }
}
const getCarritoStorage = () => {
const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage;
};

const agregarAlCarrito = (producto, idProducto) => {
    const productoRepetido = carrito.find(producto => producto.id === idProducto);
    if (productoRepetido) {
        productoRepetido.cantidad ++;
        mostrarCarrito()
        //AGREGANDO AL LOCAL STORAGE
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }else {
        producto.cantidad ++;
        carrito.push(producto)
        mostrarCarrito()
        //AGREGANDO AL LOCAL STORAGE
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
}