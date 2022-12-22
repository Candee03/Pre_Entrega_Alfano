let favoritos = [];

const traerFav = () => {
    if (localStorage.getItem("favoritos")) {
        favoritos = getFavStorage();
    }
}
const getFavStorage = () => {
const favStorage = JSON.parse(localStorage.getItem('favoritos'));
    return favStorage;
};


const agregarAFav = (producto, idProducto) => {
    const productoRepetido = favoritos.find(producto => producto.id === idProducto);
    if (productoRepetido) {
        productoRepetido.cantidad += 1;
        mostrarFavoritos()
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }else {
        favoritos.push(producto)
        mostrarFavoritos()
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
}
