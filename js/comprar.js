//GET
const mainComprar = document.getElementById("main-Comprar")
const sectionComprar = document.getElementById("section-resumen-compra")
const btnConfirmar = document.getElementById("confirmarCompra")
const siguiente = document.getElementById("siguiente")
const ulResumen = document.getElementById("ul-resumen")
const carrito= JSON.parse(localStorage.getItem('carrito'))


const totalDeCompra = () => {
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    return precioTotal;
}

const crearLista = () => {
    carrito.forEach(producto => {
        const li = document.createElement("li")
        li.innerHTML= `
        <p>${producto.nombre}</p>
        <p>$${producto.precio}</p>
        <p>Cant.${producto.cantidad}</p>
        `
    })
    
    // carrito.forEach(producto => {
    //     const li = document.createElement("li")
    //     li.innerHTML= `
    //     <li>
    //     <p>${producto.nombre}</p>
    //     <p>$${producto.precio}</p>
    //     <p>Cant.${producto.cantidad}</p>
    //     </li>
    // `})
}
console.log(crearLista());

siguiente.addEventListener("click", () => {
    const options = { month: "long" };
    const date = new Date;
    const mes = new Intl.DateTimeFormat("es-US", options).format(date)
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const contResumen = document.createElement("div")
    mainComprar.appendChild(contResumen)
    contResumen.innerHTML= `
    <h1 class="titulo-resumen">Gracias por su compra!!!</h1>
    <h2 class="subtitulo-resumen">Informacion de tu orden:</h2>
    <p class="p-resumen">Fecha del despacho:${date.getDate()}/${mes}/${date.getFullYear()}</p>
    <p class="p-resumen">A nombre de:</p>
    <p class="p-resumen">Direccion:</p>
    <p class="p-resumen">detalle de su compra:</p>
    <ul id="ul-resumen">${crearLista()}</ul>
    <p class="p-resumen">Cantidad de productos: ${cantidadTotal}</p>
    <p class="montoTotal-resumen">Monto total: $${totalDeCompra()}</p>
    `
    sectionComprar.appendChild(contResumen)
})


// btnConfirmar.addEventListener("click", () => {
    //     const listaProductos = carrito.map(producto => producto.nombre +" | Cantidad: "+ producto.cantidad)
//     localStorage.removeItem('carrito');
//     finalizarCompra(listaProductos)
// })

//FUNCIONES DE COMPRA
// const finalizarCompra = (listaProductos) => {
//     const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
//     Swal.fire({
//         title: '¡Su compra se realizó con éxito!',
//         text: 'Le enviaremos a su Mail los detalles del envio',
//         icon: 'success',
//         confirmButtonText: 'Ok!'
//     })
// }