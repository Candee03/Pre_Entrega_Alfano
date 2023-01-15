const ordenador = document.getElementById("ordenador")
const categDC = document.getElementById("dc")
const categMarvel = document.getElementById("marvel")
const categSW = document.getElementById("starWars")

let result = []
let ordenadorMayorFirst = false
//FILTROS
const ordenarproductos = (productos) => {
    tienda.innerHTML = ""
    result.length=0
    ordenadorMayorFirst===true? ordenarMayorMenor(productos):ordenarMenorMayor(productos)
}
//ordenar de menor a mayor
const ordenarMenorMayor = (productos) => {
    if (result.length>1) {
        result.sort((a,b) => a.precio - b.precio)
        mostrarProductos(result)
    } else { 
        productos.sort((a,b) => a.precio - b.precio)
        mostrarProductos(productos)
    }
    ordenadorMayorFirst = false
}
//ordenar de mayor a menor
const ordenarMayorMenor = (productos) => {
    if (result.length>1) {
        result.sort((a,b) => b.precio - a.precio)
        mostrarProductos(result)
    } else { 
        productos.sort((a,b) => b.precio - a.precio)
        mostrarProductos(productos)
    }
    ordenadorMayorFirst= true
}

//ordenar por categoria
const traerDC = (productos) => {
    tienda.innerHTML = ""
    result = productos.filter(producto => producto.categoria === "DC")
    ordenadorMayorFirst===true? ordenarMayorMenor(result):ordenarMenorMayor(result)
}
const traerSW = (productos) => {
    tienda.innerHTML = ""
    result = productos.filter(producto => producto.categoria === "starWars")
    ordenadorMayorFirst===true? ordenarMayorMenor(result):ordenarMenorMayor(result)
}
const traerMarvel = (productos) => {
    tienda.innerHTML = ""
    result = productos.filter(producto => producto.categoria === "Marvel")
    ordenadorMayorFirst===true? ordenarMayorMenor(result):ordenarMenorMayor(result)
}

//FILTROS LISTENER
categSW.addEventListener ("click", async() => {
    traerSW(await traerStock())
    categSW.classList.add("select")
    categMarvel.classList.remove("select")
    categDC.classList.remove("select")
})
categMarvel.addEventListener ("click", async() => {
    traerMarvel(await traerStock())
    categMarvel.classList.add("select")
    categDC.classList.remove("select")
    categSW.classList.remove("select")
})
categDC.addEventListener ("click", async() => {
    traerDC(await traerStock())
    categDC.classList.add("select")
    categMarvel.classList.remove("select")
    categSW.classList.remove("select")
})
quitarFiltros.addEventListener ("click", async() => {
    categMarvel.classList.remove("select")
    categDC.classList.remove("select")
    categSW.classList.remove("select")
    ordenarproductos(await traerStock())
})
ordenador.addEventListener("change", async(e) => {
    switch (e.target.value) {
        case "mayorAMenor":
            tienda.innerHTML = ""
            ordenarMayorMenor(await traerStock())
            break;
        case "menorAMayor":
            tienda.innerHTML = ""
            ordenarMenorMayor(await traerStock())
            break;
        default:
            tienda.innerHTML = ""
            ordenarMenorMayor(await traerStock())
            break;
    }
})