const verCarrito = document.getElementById("verCarrito")
const verfavoritos = document.getElementById("favoritos")
const cerrarCarrito = document.getElementById("cerrarCarrito")
const miCarrito = document.getElementById("miCarrito")
const misFavoritos = document.getElementById("misFavoritos")
const tienda = document.getElementById("tienda")
const menorAMayor = document.getElementById("menorAMayor")
const mayorAMenor = document.getElementById("mayorAMenor")

miCarrito.style.display = "none";
cerrarCarrito.style.display = "none";

menorAMayor.innerText = "mas barato arriba"
mayorAMenor.innerText = "mas caro arriba"

mayorAMenor.addEventListener ("click", () => {
    tienda.innerHTML = ""
    ordenarMayorMenor()
})
menorAMayor.addEventListener ("click", () => {
    tienda.innerHTML = ""
    ordenarMenorMayor()
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
            
        const addCarrito = document.createElement("button");
        addCarrito.classList.add('btn-card')
        addCarrito.innerHTML = `<img class="add-carrito" src="img/logos/carrito.png" alt="">`;
        
        card.append(addCarrito);
        
        addCarrito.addEventListener("click", () => {
            agregarAlCarrito(producto, producto.id)
        })
        
        const addFav = document.createElement ("button")
        addFav.classList.add('btn-card')
        addFav.innerHTML = `<img class="add-favoritos" src="img/logos/favorito.png" alt="">`;

        card.append(addFav);

        addFav.addEventListener("click", () => {
            agregarAFav(producto, producto.id)
        })
    })
}

verCarrito.addEventListener("click", () => {
    misFavoritos.style.display = "none";
    miCarrito.style.display = "block";
    cerrarCarrito.style.display = "inline-block";
    miCarrito.innerHTML= ""
    carrito.forEach ((producto) => {
        const cardCarrito = document.createElement ("div")
    
        cardCarrito.innerHTML= `
        <img class="img-producto-carrito" src="${producto.img}" alt="">
        <h2 class="precio">$${producto.precio}</h2>
        <h2 class="cantidad">Cant:${producto.cantidad}</h2>
        <p id="descripcion">${producto.nombre} ${producto.descripcion}</p>`

        miCarrito.append(cardCarrito);
    })
});




verfavoritos.addEventListener("click", () => {
    miCarrito.style.display = "none";
    misFavoritos.style.display = "block";
    cerrarCarrito.style.display = "inline-block";
    misFavoritos.classList.add('cont-fav')
    misFavoritos.innerHTML= ""
    favoritos.forEach ((producto) => {
        const contFavoritos = document.createElement ("div")
    
        contFavoritos.innerHTML= `
        <img class="img-producto-carrito" src="${producto.img}" alt="">
        <h2 class="precio">$${producto.precio}</h2>
        <p id="descripcion">${producto.nombre} ${producto.descripcion}</p>`

        misFavoritos.append(contFavoritos);
    })
});

cerrarCarrito.addEventListener("click", () => {
    miCarrito.style.display = "none";
    misFavoritos.style.display = "none";
    cerrarCarrito.style.display = "none";
});

mostrarProductos()

// ----------------------------------------------
// const mostrarEnListaOrdenada = () => {
//     const listaOrdenada = productos.map(producto => producto.nombre +" $"+ producto.precio)

//     alert (`lista de productos \n\n ${listaOrdenada.join("\n")}\n\n ${listaOrdenada.join("\n")}`)
//     comprarProductos(listaOrdenada)
// }


// const comprarProductos = (listaProductos) => {
//     let seguirComprando = false;
//     let nombreDeProducto = "";
//     let cantidad = 0;

//     do {
//         nombreDeProducto = prompt("¿Que producto desea comprar?" +"\n\n"+ listaProductos.join("\n"))
//         cantidad = parseInt(prompt("¿cuantos desea comprar?"))

//         const producto = productos.find(producto => producto.nombre.toLowerCase() === nombreDeProducto.toLowerCase())
//         if (producto) {
//             agregarAlCarrito(producto, producto.id, cantidad)
//         } else {
//             alert("El producto no se encuentra en el catalogo")
//         }
//         seguirComprando = confirm("¿desea hacer otra compra?")
//     } while (seguirComprando);
//     confirmarCompra ();
// };


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
