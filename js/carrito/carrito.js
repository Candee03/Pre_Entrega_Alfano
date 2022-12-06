const carrito = [];

const agregarAlCarrito = (producto, idProducto, cantidad) => {
    const productoRepetido = carrito.find(producto => producto.id === idProducto);
    if (productoRepetido) {
        productoRepetido.cantidad += cantidad;
    }else {
        producto.cantidad += cantidad;
        carrito.push(producto)
    }
}
const eliminarProductoCarrito = (productoAEliminar) => {
    carrito.forEach((producto, index)=> {
        if(producto.nombre.toLowerCase() === productoAEliminar.toLowerCase()) {
            if (producto.cantidad >1) {
                producto.cantidad--
            }else {
                carrito.splice(index, 1)
            }
        }
    })
    confirmarCompra()
}
