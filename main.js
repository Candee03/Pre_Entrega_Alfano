// DECLARACION DE VARIABLES
let totalDeCompra = 0;

function comprar() {
    let producto = prompt ("Detalle que funko pop desea comprar según su número de lista:");
    switch (producto) {
        case "1":
            return totalDeCompra += 50;
        case "2":
            return totalDeCompra += 60;
        case "3":
            return totalDeCompra += 70;
        case "4":
            return totalDeCompra += 80;
        default:
            alert ("el valor ingresado no es válido")
            break;
    }
}

function preguntar() {
    let quererComprar = prompt("¿desea realizar una compra?").toUpperCase()
    switch (quererComprar) {
        case "SI":
            while (quererComprar == "SI") {
                comprar()
                quererComprar = prompt ("¿desea realizar otra compra?").toUpperCase()
            }
        case "NO":
            return alert("el total de su compra es: $"+ totalDeCompra);
        default:
            return alert ("el valor ingresado no es válido")
    }
}

