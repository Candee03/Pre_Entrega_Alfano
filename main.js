
function comprar() {
    let totalDeCompra = 0;
    let quererComprar = false;
    
    quererComprar = confirm("¿desea realizar una compra?")
    do {
        let producto = prompt ("Detalle que funko pop desea comprar según su número de lista:");
        switch (producto) {
            case "1":
                totalDeCompra += 50;
                break;
            case "2":
                totalDeCompra += 60;
                break;
            case "3":
                totalDeCompra += 70;
                break;
            case "4":
                totalDeCompra += 80;
                break;
            default:
                alert ("el valor ingresado no es válido")
                break;
        }
        quererComprar = confirm("¿desea realizar otra compra?")
    } while (quererComprar);

    return alert("el total de su compra es: $"+ totalDeCompra);
}
