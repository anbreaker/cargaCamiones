const pesoCisternaTotal = 40800;

function calculoCisternas(tara) {
  const carga = pesoCisternaTotal - tara;
  let divisionCarga = carga / 2;

  if (divisionCarga % 20 !== 0) {
    divisionCarga = divisionCarga + 10;
    // console.log('divisionCargaDespues -->', divisionCarga);
    return divisionCarga;
  } else {
    return divisionCarga;
    // console.log('divisionCargaDespues -->', divisionCarga);
  }
}

// calculoCisternas(14160);
console.log('Cargar -->', calculoCisternas(14960));
