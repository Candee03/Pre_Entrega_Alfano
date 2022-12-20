const favoritos = [];

const agregarAFav = (producto, idProducto) => {
    const productoRepetido = favoritos.find(producto => producto.id === idProducto);
    if (productoRepetido) {
        productoRepetido.cantidad += 1;
    }else {
        favoritos.push(producto)
    }
}
