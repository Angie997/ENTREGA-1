
const carterasDisponibles = ["Cartera Roja", "Cartera Negra", "Cartera Azul", "Cartera Blanca"];
let carrito = [];
let continuar = true;

function mostrarCarteras() {
  console.log("Carteras disponibles:");
  carterasDisponibles.forEach((cartera, index) => {
    console.log(`${index + 1}. ${cartera}`);
  });
}

function agregarCarteraAlCarrito() {
  let seleccion = parseInt(prompt("Selecciona el número de la cartera que deseas comprar (1-4):"));
  if (seleccion >= 1 && seleccion <= carterasDisponibles.length) {
    let carteraSeleccionada = carterasDisponibles[seleccion - 1];
    carrito.push(carteraSeleccionada);
    alert(`Has agregado "${carteraSeleccionada}" a tu carrito.`);
  } else {
    alert("Selección inválida. Intenta de nuevo.");
  }
}

function mostrarCarrito() {
  if (carrito.length > 0) {
    alert(`Tu carrito contiene: \n${carrito.join("\n")}`);
  } else {
    alert("Tu carrito está vacío.");
  }
}

function iniciarSimulador() {
  alert("Bienvenido a la tienda Angelic Carteras.");
  while (continuar) {
    mostrarCarteras();
    agregarCarteraAlCarrito();
    continuar = confirm("¿Deseas comprar otra cartera?");
  }
  mostrarCarrito();
  alert("Gracias por tu compra. ¡Vuelve pronto!");
}

iniciarSimulador();
