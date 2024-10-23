//Variables
let totalCuenta;
let valorFactura;
// --Descuentos
let descuentoCienMil = 0.1;
let descuentoDoscientosMil = 0.2;
let descuentoAplicado = 0;
// --Propinas
let propinaExcelente = 0.2;
let propinaBuena = 0.15;
let propinaRegular = 0.1;
let propina = 0;

// Funciones
function calcularPropina(montoCuenta, servicio) {
  if (servicio === "excelente") {
    propina = montoCuenta * propinaExcelente;
  } else if (servicio === "bueno") {
    propina = montoCuenta * propinaBuena;
  } else if (servicio === "regular") {
    propina = montoCuenta * propinaRegular;
  } else {
    console.log("No has ingresado un valor válido para el servicio.");
    return 0;
  }

  console.log("El valor de la propina es: " + propina + " Pesos");
  return propina;
}

function calcularDescuento(montoCuenta) {
  if (montoCuenta >= 200000) {
    descuentoAplicado = montoCuenta * descuentoDoscientosMil;
  } else if (montoCuenta >= 100000) {
    descuentoAplicado = montoCuenta * descuentoCienMil;
  } else {
    descuentoAplicado = 0; // Sin descuento
  }

  console.log("El descuento aplicado es: " + descuentoAplicado + " Pesos");
  return descuentoAplicado;
}

function generarFactura(
  montoCuenta,
  servicio,
  totalConPropina,
  valorFinalFactura
) {
  console.log("\n---------- Factura de Servicio ----------");
  console.log("Valor de la cuenta (sin propina): " + montoCuenta + " Pesos");
  console.log(
    "Propina por servicio (" + servicio + "): " + totalConPropina + " Pesos"
  );
  console.log("Descuento aplicado: " + descuentoAplicado + " Pesos");
  console.log("Total a pagar: " + valorFinalFactura + " Pesos");
  console.log("Feliz día, gracias por su visita!");
}

// Ejecución
let opcion = true; //Variable centinela

while (opcion) {
  let menuOpciones = Number(
    prompt(
      "Ingresa la opción que deseas Acceder:\n1. Recibir factura\n2. Salir"
    )
  );

  switch (menuOpciones) {
    case 1:
      let montoCuenta = Number(prompt("ingrese el Valor de la cuenta"));
      let servicio = prompt(
        "Calificación del servicio: \n -excelente \n -bueno \n -regular"
      );

      // Calcula la propina
      let totalConPropina =
        montoCuenta + calcularPropina(montoCuenta, servicio);

      // Calcula el descuento
      let valorFinalFactura =
        totalConPropina - calcularDescuento(totalConPropina);

      // Generar la factura
      generarFactura(montoCuenta, servicio, totalConPropina, valorFinalFactura);
      break;

    case 2:
      opcion = false;
      console.log("Gracias por usar nuestro sistema.");
      break;

    default:
      console.log("Por favor, ingresa una opción válida.");
      break;
  }
}
