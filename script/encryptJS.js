//filtro que no deja escribir en mayusculas ni caracteres especiales

mainText.addEventListener("keypress", verificar);

function verificar(lowercase) {
  const regex = /[a-z\s]/;

  if (lowercase.key.match(regex) === null) {
    lowercase.preventDefault();
  }
}

//Funcion Encriptar;-----------------------------------------------------

function encriptar() {
  const mainText = document.querySelector("#mainText").value;
  
  const map = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  let result = "";

  result = mainText.replaceAll(/a+|e+|i+|o+|u+/gm, function (match) {
    return map[match[0]];
  });
  document.querySelector("#r").innerHTML = result;
  
  document.querySelector("#hidden-img").classList.add("hidden");
  document.querySelector("#hidden-h4").classList.add("hidden");
  document.querySelector("#hidden-p").classList.add("hidden");
}

//Funcion Desencriptar----------------------------------------------------

function desencriptar() {
  const mainText = document.querySelector("#mainText").value;
  const maps = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let result = "";

  result = mainText.replaceAll(/ai|enter|imes|ober|ufat/gm, function (matched) {
    return maps[matched];
  });
  document.querySelector("#r").innerHTML = result;
  document.querySelector("#hidden-img").classList.add("hidden");
  document.querySelector("#hidden-h4").classList.add("hidden");
  document.querySelector("#hidden-p").classList.add("hidden");
}
//funcion copiar----------------------------------------------------------
function copy() {
  let copyText = document.querySelector("#r");
  copyText.select();
  document.execCommand("copy");
}



//Buttons
//button encriptar---------------------------------------------------------
document.querySelector(".input-encript").addEventListener("click", encriptar);
//button desencriptar------------------------------------------------------
document.querySelector(".input-decript").addEventListener("click", desencriptar);
//button copiar-----------------------------------------------------
document.querySelector(".output-copy").addEventListener("click", copy);
