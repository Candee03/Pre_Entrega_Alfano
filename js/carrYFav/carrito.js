const carrito = [];


const agregarAlCarrito = (producto, idProducto) => {
    const productoRepetido = carrito.find(producto => producto.id === idProducto);
    if (productoRepetido) {
        productoRepetido.cantidad += 1;
    }else {
        producto.cantidad += 1;
        carrito.push(producto)
    }
}








// const eliminarProductoCarrito = (productoAEliminar) => {
//     carrito.forEach((producto, index)=> {
//         if(producto.nombre.toLowerCase() === productoAEliminar.toLowerCase()) {
//             if (producto.cantidad >1) {
//                 producto.cantidad--
//             }else {
//                 carrito.splice(index, 1)
//             }
//         }
//     })
//     confirmarCompra()
// }
