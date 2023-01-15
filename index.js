document.addEventListener("DOMContentLoaded", () => {
    traerCarrito()
    traerFav()
    refresh()
})


const refresh = () => {
    traerStock().then(res => {
        ordenarMenorMayor(res)
    })
}