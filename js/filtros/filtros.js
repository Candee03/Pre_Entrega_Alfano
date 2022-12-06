//FILTROS
//ordenar de menor a mayor
const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio)
    mostrarEnListaOrdenada()
}

//ordenar de mayor a menor
const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio)
    mostrarEnListaOrdenada()
}
