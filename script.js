let taraContenedor = document.getElementById('taraContenedor');
taraContenedor.addEventListener('submit', ver);

function ver() {
  if (taraContenedor) {
    console.log(`taraContenedor ${taraContenedor}`);
  }
  if (taraCisterna !== '') {
    console.log(`taraCisterna ${taraCisterna}`);
  }
}

function muestraMensaje() {
  console.log('Gracias por pinchar');
}

const pesoCisternaTotal = 40800;
const pesoContenedorTotal = 42960;

function introducirTara(tara) {
  let taraRedondeada = 0;
  if (tara % 20 !== 0) {
    let restoAlPar = tara % 20;
    taraRedondeada = tara - restoAlPar;
    introducirTara(taraRedondeada);
    return taraRedondeada;
  }
  return tara;
}

// console.log('Tara Redondeada -->', introducirTara(17980));

function calculoCisternas(tara) {
  let taraRedondeada = introducirTara(tara);
  const carga = pesoCisternaTotal - taraRedondeada;
  let divisionCarga = carga / 2;

  if (divisionCarga % 20 === 0) {
    return divisionCarga;
  } else {
    divisionCarga = divisionCarga + 10;
  }
  console.log(`Cargas Cisternas --> ${divisionCarga}`);
}

// console.log('Cargar -->', calculoCisternas(14985));

function calculoContenedores(tara) {
  let taraRedondeada = introducirTara(tara);
  let segundaCarga = pesoContenedorTotal - 20000 - taraRedondeada;
  if (segundaCarga > 7000) {
    segundaCarga = 7000;
  }

  console.log(`2ª Carga Contenedor --> ${segundaCarga}`);
  return segundaCarga;
}

// calculoContenedores(17660);
// calculoCisternas(15660);
