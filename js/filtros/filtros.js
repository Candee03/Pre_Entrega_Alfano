//FILTROS
//ordenar de menor a mayor
const ordenarproductos = () => {
    productos.sort((a,b) => a.id - b.id)
    mostrarProductos()
}
const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio)
    mostrarProductos()
}

//ordenar de mayor a menor
const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio)
    mostrarProductos()
}
