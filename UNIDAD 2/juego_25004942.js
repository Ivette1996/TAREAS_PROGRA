function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 9) + 1;
}

	function pedirNumeroAlUsuario() {
  let numero;
  do {
    numero = parseInt(prompt("Ingrese un número entre 3 y 6:"));
    if (numero < 3 || numero > 6) {
      alert("Número inválido. Por favor, ingrese un número entre 3 y 6.");
    }
  } while (numero < 3 || numero > 6);
  return numero;
}
function pedirAdivinanzaAlUsuario() {
  let adivinanza;
  do {
    adivinanza = prompt("¿Cree que su número es mayor, menor o igual al número de la computadora? (mayor/menor/igual)");
 alert("Adivinanza inválida. Por favor, ingrese mayor, menor o igual.");
    }
  } while (adivinanza !== "mayor" && adivinanza !== "menor" && adivinanza !== "igual");
  return adivinanza;
}

function mostrarResultado(numeroComputadora, numeroUsuario, adivinanza) {
  let resultado;
  if (adivinanza === "mayor" && numeroUsuario > numeroComputadora) {
    resultado = "¡Ha adivinado!";
  } else if (adivinanza === "menor" && numeroUsuario < numeroComputadora) {
 resultado = "¡Ha adivinado!";
  } else if (adivinanza === "igual" && numeroUsuario === numeroComputadora) {
    resultado = "¡Ha adivinado!";
  } else {
    resultado = "Lo siento, no ha adivinado.";
  }
  alert(`La computadora eligió ${numeroComputadora}, usted eligió ${numeroUsuario}. ${resultado}`);
}
function jugar() {
  let numeroComputadora = generarNumeroAleatorio();
  let numeroUsuario = pedirNumeroAlUsuario();
  let adivinanza = pedirAdivinanzaAlUsuario();
  mostrarResultado(numeroComputadora, numeroUsuario, adivinanza);
  let jugarOtraVez = prompt("¿Quiere jugar otra vez? (SI/NO)");
  if (jugarOtraVez.toUpperCase() === "SI") {
    jugar();
} else {
    alert("Gracias por jugar. ¡Hasta luego!");
  }
}
jugar();

