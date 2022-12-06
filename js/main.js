
const mostrarEnListaOrdenada = () => {
    const listaOrdenada = productos.map(producto => {
        return producto.nombre +" $"+ producto.precio
    })
    alert ("lista de productos" +'\n\n'+ listaOrdenada.join("\n"))
    comprarProductos(listaOrdenada)
}


const comprarProductos = (listaProductos) => {
    let seguirComprando = false;
    let nombreDeProducto = "";
    let cantidad = 0;

    do {
        nombreDeProducto = prompt("¿Que producto desea comprar?" +"\n\n"+ listaProductos.join("\n"))
        cantidad = parseInt(prompt("¿cuantos desea comprar?"))

        const producto = productos.find(producto => producto.nombre.toLowerCase() === nombreDeProducto.toLowerCase())
        if (producto) {
            agregarAlCarrito(producto, producto.id, cantidad)
        } else {
            alert("El producto no se encuentra en el catalogo")
        }
        seguirComprando = confirm("¿desea hacer otra compra?")
    } while (seguirComprando);
    confirmarCompra ();
};


const confirmarCompra = () => {
    const listaProductos = carrito.map(producto => {
        return producto.nombre +" | Cantidad: "+ producto.cantidad
    })

    const confirmar = confirm ("Checkout: "
    +"\n\n"+listaProductos.join("\n")
    +"\n\n"+ "para confirmar presione 'Aceptar' sino 'Cancelar' para eliminar productos del carrito "
    )
    if (confirmar) {
        finalizarCompra(listaProductos)
    } else {
        const productoAEliminar = prompt("ingrese el nombre del producto a eliminar: ")
        eliminarProductoCarrito(productoAEliminar)
    }
}


const finalizarCompra = (listaProductos) => {
    const cantidadTotal = carrito.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0)
    alert("detalle de su compra: \n\n"
    +listaProductos.join("\n")
    +"\n\n"+ "Total de productos: "+ cantidadTotal
    +"\n\n"+ "El precio total es de: $"+ precioTotal
    +"\n\n\n Gracias por su compra!!!"
    )
}

const comprar = () => {
    const productosBaratos = confirm("Desea ver primero los productos mas baratos?")

    if (productosBaratos) {
        ordenarMenorMayor()
    }else {
        ordenarMayorMenor ()
    }
}

comprar()

























// function comprar() {
//     let totalDeCompra = 0;
//     let quererComprar = false;
//     if (quererComprar = confirm("¿desea realizar una compra?")) {
//         do {
//             let producto = prompt ("Detalle que funko pop desea comprar según su número de lista:");
//             switch (producto) {
//                 case "1":
//                     totalDeCompra += 50;
//                     break;
//                 case "2":
//                     totalDeCompra += 60;
//                     break;
//                 case "3":
//                     totalDeCompra += 70;
//                     break;
//                 case "4":
//                     totalDeCompra += 80;
//                     break;
//                 default:
//                     alert ("el valor ingresado no es válido")
//                     break;
//             }
//             quererComprar = confirm("¿desea realizar otra compra?")
//         } while (quererComprar);
//     }
//     else {
//         return alert("el total de su compra es: $"+ totalDeCompra);
//     }
    
//     return alert("el total de su compra es: $"+ totalDeCompra);
// }




