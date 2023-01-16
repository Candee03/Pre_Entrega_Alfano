//GET
const mainComprar = document.getElementById("main-Comprar")
const sectionComprar = document.getElementById("section-resumen-compra")
const sectionForm = document.getElementById("section-form")
const siguiente = document.getElementById("siguiente")
const carrito= JSON.parse(localStorage.getItem('carrito'));


const totalDeCompra = () => {
    let precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    return precioTotal
}

const crearLista = () => {
    const lista = document.createElement("ul")
    lista.classList.add("ul-listaResumen")
    carrito.forEach(producto => {
        const li = document.createElement("li")
        li.classList.add("li-listaResumen")
        li.innerHTML= `
        <p class="li-nombre">${producto.nombre}</p>
        <p class="li-cant">Cant. ${producto.cantidad}</p>
        <p class="li-precio">$${producto.precio}</p>
        `
        lista.append(li)
    });
    sectionComprar.appendChild(lista)

    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const cantTotal= document.createElement("div")
    cantTotal.classList.add("div-cantTotal")
    cantTotal.innerHTML=`
    <p class="p-cantTotal">Cantidad Total: ${cantidadTotal}</p>
    `
    sectionComprar.appendChild(cantTotal)

    const total= document.createElement("div")
    total.classList.add("div-precioTotal")
    total.innerHTML=`
    <p class="p-Total">Total: $${totalDeCompra()}</p>
    `

    sectionComprar.appendChild(total)
}

siguiente.addEventListener("click", (e) => {
    let datoNombre = document.getElementsByName("nombreYApellido")[0].value.toString()
    let datoDireccion = document.getElementsByName("direccion")[0].value.toString()
    e.preventDefault();
    sectionForm.style.display="none"
    const options = { month: "long" };
    const date = new Date;
    const mes = new Intl.DateTimeFormat("es-US", options).format(date)
    const contResumen = document.createElement("div")
    contResumen.classList.add("div-resumen")

    mainComprar.appendChild(contResumen)
    contResumen.innerHTML= `
    <h2 class="subtitulo-resumen">Informacion de tu orden:</h2>
    <p class="p-resumen-fecha">Fecha: ${date.getDate()}/${mes}/${date.getFullYear()}</p>
    <p class="p-resumen">A nombre de: ${datoNombre}</p>
    <p class="p-resumen">Direccion: ${datoDireccion}</p>
    <p class="p-resumen">Detalle de su compra:</p>
    `
    sectionComprar.appendChild(contResumen)
    crearLista()
    const btnConfirmar=document.createElement("button")
    btnConfirmar.innerHTML="<a class='link-confirmarYVolver'>Confirmar Compra</a>"
    sectionComprar.appendChild(btnConfirmar)
    btnConfirmar.addEventListener("click", () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡¡¡Gracias por tu compra!!!',
            text:'Pronto te enviaremos más información del envío a tu correo electrónico',
            showConfirmButton: false,
            timer: 5000
        })
        setTimeout(()=> {
            window.location.href = '../index.html';
            localStorage.removeItem('carrito')
        }, 2000)
    })
})