//GET
const mainComprar = document.getElementById("main-Comprar")
const sectionComprar = document.getElementById("section-resumen-compra")
const sectionForm = document.getElementById("section-form")

const siguiente = document.getElementById("siguiente")
const siguiente2 = document.getElementById("siguiente2")
const volverALaTienda = document.getElementById("volverALaTienda")
const atras = document.getElementById("atras")
const paso1 = document.getElementById("paso1")
const paso2 = document.getElementById("paso2")


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
volverALaTienda.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = '../index.html';
})
siguiente.addEventListener("click", () => {
    paso2.style.filter="grayscale(0)"
    paso1.style.filter="grayscale(1)"
})
atras.addEventListener("click", () => {
    paso1.style.filter="grayscale(0)"
    paso2.style.filter="grayscale(1)"
})

siguiente2.addEventListener("click", (e) => {
    document.body.style.overflowY = "scroll";
    let datoNombre = document.getElementsByName("nombreYApellido")[0].value.toString()
    let datoTarjeta = document.getElementsByName("datoTarjeta")[0].value.toString()
    let datoProvincia = document.getElementsByName("datoProvincia")[0].value.toString()
    let datoCiudad = document.getElementsByName("datoCiudad")[0].value.toString()
    let datoDomicilio = document.getElementsByName("datoDomicilio")[0].value.toString()
    let datoDireccionNum = document.getElementsByName("adressNum")[0].value.toString()
    let datoCP = document.getElementsByName("adressCP")[0].value.toString()
    let datoEmail = document.getElementsByName("datoEmail")[0].value.toString()
    e.preventDefault();
    sectionForm.style.display="none"

    const options = { month: "long" };
    const date = new Date;
    const mes = new Intl.DateTimeFormat("es-US", options).format(date)
    const contPaso3 = document.createElement("div")
    contPaso3.classList.add("cont-paso3")
    contPaso3.innerHTML =`
    <img id="paso3" src="../img/logos/tres.png" alt="">
    <h2 class="subtitulo-resumen">Informacion de tu orden:</h2>
    `
    sectionComprar.appendChild(contPaso3)

    const contResumen = document.createElement("div")
    contResumen.classList.add("div-resumen")

    mainComprar.appendChild(contResumen)
    contResumen.innerHTML= `
    <div id="cont-pResumen">
        <p class="p-resumen-fecha">Fecha: ${date.getDate()}/${mes}/${date.getFullYear()}</p>
        <p class="p-resumen">A nombre de: ${datoNombre}</p>
        <p class="p-resumen">Tarjeta: ${datoTarjeta}</p>
        <p class="p-resumen">Datos de envio: ${datoProvincia}, ${datoCiudad}, ${datoDomicilio} ${datoDireccionNum}, ${datoCP}</p>
        <p class="p-resumen">Correo Electrónico: ${datoEmail}</p>
    </div>
    `
    sectionComprar.appendChild(contResumen)
    crearLista()
    const atencion = document.createElement("p")
    atencion.innerText="Revisá con atención que todos los datos sean correctos."
    sectionComprar.appendChild(atencion)
    const contBtnResumen=document.createElement("div")
    const btnConfirmar=document.createElement("button")
    btnConfirmar.innerHTML="<a class='link-confirmarYVolver'>Confirmar Compra</a>"
    sectionComprar.appendChild(btnConfirmar)
    const btnVolverAtras=document.createElement("button")
    btnVolverAtras.innerHTML="<a href='#paso1' class='btn-atras-resumen'>Anterior</a>"
    contBtnResumen.appendChild(btnVolverAtras)
    contBtnResumen.appendChild(btnConfirmar)
    sectionComprar.appendChild(contBtnResumen)
    btnVolverAtras.addEventListener("click", () => {
        sectionForm.style.display="block"
        sectionComprar.innerHTML=" "
        document.body.style.overflowY = "hidden";
        paso1.style.filter="grayscale(0)"
        paso2.style.filter="grayscale(1)"
    })
    btnConfirmar.addEventListener("click", () => {
        Swal.fire({
            position: 'center',
            icon: "success",
            title: 'Gracias por tu compra',
            text:'Pronto te enviaremos más información del envío a tu correo electrónico',
            showConfirmButton: false,
            timer: 8000
        })
        setTimeout(()=> {
            window.location.href = '../index.html';
            localStorage.removeItem('carrito')
        }, 5000)
    })
})

