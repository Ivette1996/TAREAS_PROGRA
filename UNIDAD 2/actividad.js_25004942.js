function determinarSignoZodiacal(dia, mes) {
  if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    return "Acuario";
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    return "Piscis";
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    return "Aries";
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    return "Tauro";
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    return "Géminis";
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    return "Cáncer";
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    return "Leo";
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    return "Virgo";
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    return "Libra";
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    return "Escorpio";
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    return "Sagitario";
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    return "Capricornio";
  } else {
    return "No se ha podido determinar el signo zodiacal";
  }
}

function mostrarSignoZodiacal() {
  var fechaNacimiento = prompt("Ingrese su fecha de nacimiento (dd/mm):");
  var partesFecha = fechaNacimiento.split("/");
  var dia = parseInt(partesFecha[0]);
  var mes = parseInt(partesFecha[1]);
  var signoZodiacal = determinarSignoZodiacal(dia, mes);
  alert("Su signo zodiacal es: " + signoZodiacal);
}

mostrarSignoZodiacal();
