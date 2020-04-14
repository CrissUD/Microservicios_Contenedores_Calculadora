var n1 = null;
var n2 = null;
var operacionActual = "";

//Funcion para mostrar el numero presionado
function digitarNumero(num) {
  var texto = document.getElementById("display").textContent;
  texto += num;
  document.getElementById("display").innerHTML = texto;
  document.getElementById("operacion").innerHTML = "";
}
//Funcion para borrar caracteres del digiito
function borrar() {
  if (operacionActual != "igual") {
    var texto = document.getElementById("display").textContent;
    document.getElementById("display").innerHTML = texto.slice(0, -1);
  }
}
//Funcion para borrar todos los valores y operaciones realizados
function borrarTodo() {
  n1 = null;
  n2 = null;
  operacionActual = "";
  document.getElementById("operacion").innerHTML = "";
  document.getElementById("display").innerHTML = "";
  document.getElementById("texto_arriba").innerHTML = "";
}

//Funciones para realizar determinada operacion
function sumar() {
  realizarOperacion();
  if (n1 == null) {
    n1 = Number(document.getElementById("display").textContent);
  } else {
    n2 = Number(document.getElementById("display").textContent);
    realizarOperacion();
  }
  operacionActual = "suma";
  document.getElementById("texto_arriba").innerHTML =
    document.getElementById("display").innerHTML + " + ";
  document.getElementById("operacion").innerHTML = "+";
  document.getElementById("display").innerHTML = "";
}

function restar() {
  realizarOperacion();
  if (n1 == null) {
    n1 = Number(document.getElementById("display").textContent);
  } else {
    n2 = Number(document.getElementById("display").textContent);
    realizarOperacion();
  }
  operacionActual = "resta";
  document.getElementById("texto_arriba").innerHTML =
    document.getElementById("display").innerHTML + " - ";
  document.getElementById("operacion").innerHTML = "-";
  document.getElementById("display").innerHTML = "";
}

function multiplicar() {
  realizarOperacion();
  if (n1 == null) {
    n1 = Number(document.getElementById("display").textContent);
  } else {
    n2 = Number(document.getElementById("display").textContent);
    realizarOperacion();
  }
  operacionActual = "multiplicacion";
  document.getElementById("texto_arriba").innerHTML =
    document.getElementById("display").innerHTML + " x ";
  document.getElementById("operacion").innerHTML = "x";
  document.getElementById("display").innerHTML = "";
}

function dividir() {
  realizarOperacion();
  if (n1 == null) {
    n1 = Number(document.getElementById("display").textContent);
  } else {
    n2 = Number(document.getElementById("display").textContent);
    realizarOperacion();
  }
  operacionActual = "division";
  document.getElementById("texto_arriba").innerHTML =
    document.getElementById("display").innerHTML + " / ";
  document.getElementById("operacion").innerHTML = "/";
  document.getElementById("display").innerHTML = "";
}

//Funcion para obtener un resultado
function obtenerResultado() {
  n2 = Number(document.getElementById("display").textContent);
  document.getElementById("texto_arriba").innerHTML =
    document.getElementById("texto_arriba").innerHTML + n2;
  realizarOperacion();
  operacionActual = "igual";
}

/*
Funcion para gestionar el llamado a los servicios de las apis
y realizar la operacion marcada la operacion determinada
*/
function realizarOperacion() {
  //console.log(n1, n2, operacionActual);
  if (n1 != null && n2 != null) {
    if (operacionActual == "suma") {
      obtenerSuma(n1, n2);
    }
    if (operacionActual == "resta") {
      obtenerResta(n1, n2);
    }
    if (operacionActual == "multiplicacion") {
      obtenerMultiplicacion(n1, n2);
    }
    if (operacionActual == "division") {
      obtenerDivision(n1, n2);
    }
  }
}
// Funcion para cambiar los datos en pantalla
function modificarDisplay() {
  if (operacionActual == "igual") {
    document.getElementById("operacion").innerHTML = "";
    document.getElementById("display").innerHTML = n1;
  }
}
/*
Funciones para hacer el llamado a las apis para realizar
las operaciones marcadas
*/
function obtenerSuma(val1, val2) {
  var url = "http://localhost:3030/api/suma";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      n1: val1,
      n2: val2,
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      n1 = data;
      modificarDisplay();
    })
    .catch((e) => console.error(e));
}

function obtenerResta(val1, val2) {
  var url = "http://localhost:4040/api/resta";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      n1: val1,
      n2: val2,
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      n1 = data;
      modificarDisplay();
    })
    .catch((e) => console.error(e));
}

function obtenerMultiplicacion(val1, val2) {
  var url = "http://localhost:5050/api/multiplicacion";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      n1: val1,
      n2: val2,
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      n1 = data;
      modificarDisplay();
    })
    .catch((e) => console.error(e));
}

function obtenerDivision(val1, val2) {
  var url = "http://localhost:6060/api/division";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      n1: val1,
      n2: val2,
    }),
  })
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      n1 = data;
      modificarDisplay();
    })
    .catch((e) => {
      console.error(e);
      document.getElementById("display").innerHTML = "Error en la Operacion";
    });
}
