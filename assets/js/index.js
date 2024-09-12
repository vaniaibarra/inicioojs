precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

var cantProducto = document.querySelector('p .cantidad')
var precioTotal = document.querySelector('p .valor-total')

var botonSuma = document.querySelector('#suma')
var botonResta = document.querySelector('#resta')

botonSuma.addEventListener("click", sumar)
function sumar(){
    cuenta = Number(cantProducto.innerHTML)
    cuenta = cuenta + 1
    cantProducto.innerHTML = cuenta
}
botonSuma.addEventListener("click", multiplicar)
function multiplicar(){
    precioTotal.innerHTML = Number(cantProducto.innerHTML) * Number(precioSpan.innerHTML)
}
botonResta.addEventListener("click", restar)
function restar(){
    cuenta = Number(cantProducto.innerHTML)
    cuenta = cuenta - 1
    cantProducto.innerHTML = cuenta
}
botonResta.addEventListener("click", multiplicar)
function multiplicar(){
    precioTotal.innerHTML = Number(cantProducto.innerHTML) * Number(precioSpan.innerHTML)
}
