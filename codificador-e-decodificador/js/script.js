//Variáveis
var input = document.querySelector('#input-texto');
input.focus();
var cripto = document.querySelector('#btn-cripto');
var descripto = document.querySelector('#btn-descripto');
var copia = document.getElementById('btn-copy');
var output = document.querySelector('#msg');


const regex = new RegExp("^[a-z \b]+$");

//Funções

function encriptar() {
  var texto = input.value;
  msg = '';

    for (var i = 0; i < texto.length; i++) {
      if (texto[i] == 'e') {
        msg = msg + 'enter';
      }else if (texto[i] == 'i') {
        msg = msg + 'imes';
      }else if (texto[i] == 'a') {
        msg = msg + 'ai';
      }else if (texto[i] == 'o') {
          msg = msg + 'ober';
      }else if (texto[i] == 'u') {
        msg = msg + 'ufat';
      }else {
        msg = msg + texto[i];
      }
    }
    output.value = caracteres(msg);

}

cripto.onclick = encriptar;


function desencriptar(texto) {
  var texto = input.value;
  msg = texto;

  msg = msg.replaceAll('enter', 'e');
  msg = msg.replaceAll('ai', 'a');
  msg = msg.replaceAll('imes', 'i');
  msg = msg.replaceAll('ober', 'o');
  msg = msg.replaceAll('ufat', 'u');

  output.value = caracteres(msg);

}


descripto.onclick = desencriptar;

copia.addEventListener('click', function(e) {
    e.preventDefault();
    output.select();
    document.execCommand('copy');

})



function caracteres(frase) {

    if (!regex.test(frase)) {
        return "Erro! Apenas letras minúsculas e sem acentos são aceitas."
    }

    else {
        return  frase;
    }
}
