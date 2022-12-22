const verCarrito = document.getElementById("verCarrito")
const verfavoritos = document.getElementById("favoritos")
const cerrar = document.getElementById("cerrar")
const miCarrito = document.getElementById("miCarrito")
const misFavoritos = document.getElementById("misFavoritos")
const tienda = document.getElementById("tienda")
const menorAMayor = document.getElementById("menorAMayor")
const mayorAMenor = document.getElementById("mayorAMenor")
const quitarFiltros = document.getElementById("quitarFiltros")

miCarrito.style.display = "none";
misFavoritos.style.display = "none";
cerrar.style.display = "none";

menorAMayor.innerText = "Mayor precio arriba"
mayorAMenor.innerText = "Menor precio arriba"
quitarFiltros.innerText = "Borrar Filtros"

quitarFiltros.addEventListener ("click", () => {
    tienda.innerHTML = ""
    ordenarproductos()
    mayorAMenor.classList.remove("select")
    menorAMayor.classList.remove("select")
    
})
mayorAMenor.addEventListener ("click", () => {
    tienda.innerHTML = ""
    ordenarMayorMenor()
    mayorAMenor.classList.add("select")
    menorAMayor.classList.remove("select")
    
})
menorAMayor.addEventListener ("click", () => {
    tienda.innerHTML = ""
    ordenarMenorMayor()
    menorAMayor.classList.add("select")
    mayorAMenor.classList.remove("select")
})

const mostrarProductos = () => {
    productos.forEach((producto) => {
        const card = document.createElement("div")
        card.classList.add('cont-card')

        card.innerHTML =`
        <img class="img-card" src="${producto.img}" alt="">
        <div id="contCard">
            <h2 class="precio">$${producto.precio}</h2>
        </div>
        <div class="description">
            <p id="descripcion">${producto.nombre}</p>
            <p id="descripcion">${producto.descripcion}</p>
        </div>`
        tienda.append(card);

        //AÑADIR A CARRITO
        const addCarrito = document.createElement("button");
        addCarrito.classList.add('btn-card')
        addCarrito.innerHTML = `<img class="add-carrito" src="img/logos/carrito.png" alt="">`;
        card.append(addCarrito);
        //LISTENER
        addCarrito.addEventListener("click", () => {
            agregarAlCarrito(producto, producto.id)
        })

        //AÑADIR A FAVORITOS
        const addFav = document.createElement ("button")
        addFav.classList.add('btn-card')
        addFav.innerHTML = `<img class="add-favoritos" src="img/logos/favorito.png" alt="">`;
        card.append(addFav);
        //LISTENER
        addFav.addEventListener("click", () => {
            agregarAFav(producto, producto.id)
        })
    })
}
//SUMAR Y RESTAR PRODUCTOS EN EL CARRITO
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
}
//MOSTRAR CARRITO
const mostrarCarrito = () => {
    miCarrito.innerHTML= ""
    miCarrito.classList.add("cont-carr")
    carrito.forEach ((producto) => {
        const cardCarrito = document.createElement ("div")
        
        cardCarrito.classList.add('div-carr')
        cardCarrito.innerHTML= `
        <div class="cont1">
        <img class="img-producto-carrito" src="${producto.img}" alt="">
        <p class="descripcion-carrito" id="descripcion">${producto.nombre}: ${producto.descripcion}</p>
        </div>
        <div class="cont3">
            <div>
                <h2 class="precio">$${producto.precio}</h2>
            </div>
            <div class="cont2">
                <button class="boton btnDismi${producto.id}">-</button>
                <h2 class="cantidad-carrito cantidad${producto.id}">${producto.cantidad}</h2>
                <button class="boton btnAgreg${producto.id}">+</button> 
            </div>
        </div>
        `
        miCarrito.append(cardCarrito);
        
        const agregarCant = document.querySelector(`.btnAgreg${producto.id}`)
        const disminuirCant = document.querySelector(`.btnDismi${producto.id}`)
        const contador = document.querySelector(`.cantidad${producto.id}`)
        
        disminuirCant.addEventListener("click", () => {
            disminuirProducto(producto.nombre, producto.id)
            actualizarCantidad (producto, contador)
        })
        agregarCant.addEventListener("click", () => {
            agregarProducto(producto.nombre, producto.id)
            actualizarCantidad (producto, contador)
        })
    })
}
//MOSTRAR FAVORITOS
const mostrarFavoritos =() => {
    misFavoritos.innerHTML= ""

    misFavoritos.classList.add('cont-fav')
    favoritos.forEach ((producto) => {
        const contFavoritos = document.createElement ("div")
        contFavoritos.classList.add('div-fav')
        
        contFavoritos.innerHTML= `
        <img class="img-producto-favoritos" src="${producto.img}" alt="">
        <p class="descripcion-fav" id="descripcion">${producto.nombre}: ${producto.descripcion}</p>
        <h2 class="precio-fav">$${producto.precio}</h2>`
        
        misFavoritos.append(contFavoritos);
    })
}


//LISTENERS
verCarrito.addEventListener("click", () => {
    misFavoritos.style.display = "none";
    miCarrito.style.display = "block";
    cerrar.style.display = "inline-block";
    traerCarrito()
    mostrarCarrito()
});

verfavoritos.addEventListener("click", () => {
    miCarrito.style.display = "none";
    misFavoritos.style.display = "block";
    cerrar.style.display = "inline-block";
    traerFav()
    mostrarFavoritos()
});

cerrar.addEventListener("click", () => {
    miCarrito.style.display = "none";
    misFavoritos.style.display = "none";
    cerrar.style.display = "none";
});

mostrarProductos()

// ----------------------------------------------
// const confirmarCompra = () => {
//     const listaProductos = carrito.map(producto => producto.nombre +" | Cantidad: "+ producto.cantidad)

//     const confirmar = confirm ("Checkout: "
//     +"\n\n"+listaProductos.join("\n")
//     +"\n\n"+ "para confirmar presione 'Aceptar' sino 'Cancelar' para eliminar productos del carrito "
//     )
//     if (confirmar) {
//         finalizarCompra(listaProductos)
//     } else {
//         const productoAEliminar = prompt("ingrese el nombre del producto a eliminar: ")
//         eliminarProductoCarrito(productoAEliminar)
//     }
// }


// const finalizarCompra = (listaProductos) => {
//     const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
//     const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
//     alert("detalle de su compra: \n\n"
//     +listaProductos.join("\n")
//     +"\n\n"+ "Total de productos: "+ cantidadTotal
//     +"\n\n"+ "El precio total es de: $"+ precioTotal
//     +"\n\n\n Gracias por su compra!!!"
//     )
// }

// const comprar = () => {
//     const productosBaratos = confirm("Desea ver arriba en la lista los productos mas baratos?")
//     if (productosBaratos) {
//         ordenarMenorMayor()
//     }else {
//         ordenarMayorMenor ()
//     }
// }

// comprar()
