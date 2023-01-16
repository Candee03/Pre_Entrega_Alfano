//GET
const verCarrito = document.getElementById("verCarrito")
const verfavoritos = document.getElementById("favoritos")
const cerrar = document.getElementById("cerrar")
const miCarrito = document.getElementById("miCarrito")
const blur = document.getElementById("blur")
const misFavoritos = document.getElementById("misFavoritos")
const tienda = document.getElementById("tienda")
const quitarFiltros = document.getElementById("quitarFiltros")
const sectionIndex = document.getElementById("section-index")

//ESTILOS RESET
miCarrito.style.display = "none";
misFavoritos.style.display = "none";
cerrar.style.display = "none";

quitarFiltros.innerHTML = `<p class ="p-quitar-filtros">limpiar filtros <img class="quitar-filtros" src="img/logos/cerrar.png" alt=""></p>`

const mostrarProductos = (stock) => {
    stock.forEach((producto) => {
        const card = document.createElement("div")
        card.classList.add('cont-card')
        card.innerHTML =`
        <img class="img-card" src="${producto.img}" alt="">
        <div class="description">
            <p class="card-nombre-producto" id="descripcion">${producto.nombre}</p>
            <p class="card-descripcion-producto" id="descripcion">${producto.descripcion}</p>
        </div>
        <div id="contCard">
            <h2 class="precio">$${producto.precio}</h2>
            <div id="contAdds">
                <button id="boton-addCarrito${producto.nombre}" class="btn-card">
                    <img class="add-carrito" src="img/logos/carrito.png" alt="">
                </button>
                <button id="boton-addfavoritos${producto.nombre}" class="btn-card">
                    <img class="add-favoritos" src="img/logos/favorito.png" alt="">
                </button>
            </div>
        </div>
        `
        tienda.append(card);
        const addCarrito = document.getElementById(`boton-addCarrito${producto.nombre}`)
        const addFav = document.getElementById(`boton-addfavoritos${producto.nombre}`)
        
        //LISTENERS
        addCarrito.addEventListener("click", () => {
            agregarAlCarrito(producto, producto.id)
            Toastify({
                text: `¡Se añadió al carrito correctamente ${producto.nombre}!`,
                duration: 1500,
                style : {
                    background: "#fce5be",
                    color: "#040404",
                    fontFamily: "Lexend"
                }
            }).showToast();
        })
        addFav.addEventListener("click", () => {
            agregarAFav(producto, producto.id)
            Toastify({
                text: `Se añadió a tu lista de Favoritos ${producto.nombre}`,
                duration: 1500,
                style : {
                    background: "#fce5be",
                    color: "#040404",
                    fontFamily: "Lexend"
                }
            }).showToast();
        })
    })
}
const traerStock = async () => {
    const products = await fetch('js/stock.json')
    const stock = await products.json()
    return stock
}
const totalDeCompra = () => {
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    return precioTotal;
}
//MOSTRAR CARRITO
const mostrarCarrito = () => {
    miCarrito.innerHTML= ""
    miCarrito.classList.add("cont-carr")
    //TITULO DE CARRITO
    const tituloCarrito = document.createElement ("h1")
    tituloCarrito.classList.add("titulo-carrito")
    tituloCarrito.innerText = "Carrito"
    miCarrito.appendChild(tituloCarrito);

    carrito.forEach ((producto) => {
        const cardCarrito = document.createElement ("div")

        cardCarrito.classList.add('div-carr')
        cardCarrito.innerHTML= `
        <div class="cont1">
            <img class="img-producto-carrito" src="${producto.img}" alt="">
            <p class="descripcion-carrito" id="descripcion">${producto.nombre}: ${producto.descripcion}</p>
        </div>
        <div class="cont3">
            <div class="cont2">
                <button class="boton btnDismi${producto.id}">-</button>
                <h2 class="cantidad-carrito cantidad${producto.id}">${producto.cantidad}</h2>
                <button class="boton btnAgreg${producto.id}">+</button> 
            </div>
            <div>
                <h2 class="precio">$${producto.precio* producto.cantidad}</h2>
            </div>
            <div class="cont-trash">
                <button class="trash btnTrash${producto.id}">
                    <img class="img-trash-carrito" src="img/logos/trash.png" alt="">
                </button> 
            </div>
        </div>
        `
        miCarrito.appendChild(cardCarrito);
        
        const agregarCant = document.querySelector(`.btnAgreg${producto.id}`)
        const disminuirCant = document.querySelector(`.btnDismi${producto.id}`)
        const btnTrash = document.querySelector(`.btnTrash${producto.id}`)
        const contador = document.querySelector(`.cantidad${producto.id}`)
        
        btnTrash.addEventListener("click", () => {
            eliminarProducto(producto, producto.id)
        })
        disminuirCant.addEventListener("click", () => {
            disminuirProducto(producto.nombre, producto.id)
            actualizarCantidad (producto, contador)
        })
        agregarCant.addEventListener("click", () => {
            agregarProducto(producto.nombre, producto.id)
            actualizarCantidad (producto, contador)
        })
    })
    //BOTON COMPRAR Y TOTAL DE COMPRA
    const contComprar = document.createElement ("div")
    contComprar.classList.add("cont-btn-comprar")
    contComprar.innerHTML= `
    <div class="contenedor-total">
        <span class="txt-total">Total:</span>
        <h2 id="resultado-total">$${totalDeCompra()}</h2>
    </div>
    <a href="pages/form-compra.html" id="comprar">comprar</a>
    `
    miCarrito.appendChild(contComprar);
}
//MOSTRAR FAVORITOS
const mostrarFavoritos =() => {
    misFavoritos.innerHTML= ""

    misFavoritos.classList.add('cont-fav')
    const tituloFavoritos = document.createElement ("h1")
    tituloFavoritos.classList.add("tituloMisFav")
    tituloFavoritos.innerText = "Mis favoritos"
    misFavoritos.appendChild(tituloFavoritos);
    favoritos.forEach ((producto) => {
        const contFavoritos = document.createElement ("div")
        contFavoritos.classList.add('div-fav')
        
        contFavoritos.innerHTML= `
        <img class="img-producto-favoritos" src="${producto.img}" alt="">
        <p class="descripcion-fav" id="descripcion">${producto.nombre}: ${producto.descripcion}</p>
        <h2 class="precio-fav">$${producto.precio}</h2>
        <div class="cont-trash-fav">
            <button class="trash btnTrash${producto.id}">
                <img class="img-trash-favoritos" src="img/logos/trash.png" alt="">
            </button> 
        </div>
        `
        
        misFavoritos.appendChild(contFavoritos);

        const btnTrashFav = document.querySelector(`.btnTrash${producto.id}`)

        btnTrashFav.addEventListener("click", () => {
            eliminarDeFavoritos(producto, producto.id)
        })
    })
}
//QUITAR DE FAVORITOS
const eliminarDeFavoritos = (producto, idProducto) =>{ 
    favoritos = favoritos.filter(e => e.id !== idProducto);
    producto.cantidad = 0;
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    mostrarFavoritos();
}
//SUMAR Y RESTAR PRODUCTOS EN EL CARRITO
const eliminarProducto = (producto, idProducto) =>{ 
    carrito = carrito.filter(e => e.id !== idProducto);
    producto.cantidad = 0;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}
const disminuirProducto = (nombre, id) =>{ 
    const elAModificar = carrito.find(producto => nombre === producto.nombre && id === producto.id);
    if (elAModificar.cantidad>1) {
        elAModificar.cantidad--
    }
}
const agregarProducto = (nombre, id) =>{ 
    const elAModificar = carrito.find(producto => nombre === producto.nombre && id === producto.id);
    if (elAModificar.cantidad<10) {
        elAModificar.cantidad++
    }
}
const actualizarCantidad = (producto, contador) => {
    contador.innerText = `${producto.cantidad}`
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito()
}

//LISTENERS
verCarrito.addEventListener("click", () => {
    misFavoritos.style.display = "none";
    miCarrito.style.display = "block";
    miCarrito.style.overflowY = "scroll";
    document.body.style.overflowY = "hidden";
    blur.classList.add("blurred")
    cerrar.style.display = "inline-block";
    if(!localStorage.getItem("carrito")) {
        miCarrito.innerHTML= " "
        miCarrito.classList.add("cont-carr")
        const tituloCarrito = document.createElement ("h1")
        tituloCarrito.classList.add("carritoVacio")
        tituloCarrito.innerText = "Aún no agregaste productos"
        miCarrito.appendChild(tituloCarrito);
    } else {
        mostrarCarrito()
    }
});
verfavoritos.addEventListener("click", () => {
    miCarrito.style.display = "none";
    misFavoritos.style.display = "block";
    misFavoritos.style.overflowY = "scroll";
    document.body.style.overflowY = "hidden";
    blur.classList.add("blurred")
    cerrar.style.display = "inline-block";
    cerrar.style.display = "inline-block";
    if(!localStorage.getItem("favoritos")) {
        misFavoritos.innerHTML= ""
        misFavoritos.classList.add('cont-fav')
        const tituloFavoritos = document.createElement ("h1")
        tituloFavoritos.classList.add("favoritosVacio")
        tituloFavoritos.innerText = "Tu lista de favoritos está vacia"
        misFavoritos.appendChild(tituloFavoritos);
    } else {
        mostrarFavoritos()
    }
});
cerrar.addEventListener("click", () => {
    miCarrito.style.display = "none";
    document.body.style.overflowY = "scroll";
    sectionIndex.style.filter = "opacity(1)";
    misFavoritos.style.display = "none";
    cerrar.style.display = "none";
    blur.classList.remove("blurred")
});
blur.addEventListener("click", () => {
    miCarrito.style.display = "none";
    document.body.style.overflowY = "scroll";
    sectionIndex.style.filter = "opacity(1)";
    misFavoritos.style.display = "none";
    cerrar.style.display = "none";
    blur.classList.remove("blurred")
});