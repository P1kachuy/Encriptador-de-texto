/*const texto__encriptar = document.querySelector(".caja__texto");
const texto__encriptado=document.querySelector(".caja_encriptado");

 La letra "a" es convertida para "ai"
    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"

function boton__encriptar(){
    const textoEncriptado = encriptar(texto__encriptar.value);
    texto__encriptado.value = textoEncriptado;
}


function encriptar(stringEncriptada){
    let encriptador = [ ["a", "ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"] ]
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for(let i=0; i<encriptador.length; i++){
        if(stringEncriptada.includes(encriptador[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(encriptador[i][0], encriptador[i][0]);
        }
    }
    return stringEncriptada;
}*/

const textArea = document.querySelector(".caja__texto");
const mensaje = document.querySelector(".caja__encriptado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){

    let matrizCodigo=[ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return stringEncriptada 
}


function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value=textoDesencriptado;
    textArea.value="";
}

function desencriptar(stringDesencriptada){

    let matrizCodigo=[ ["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"] ];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }

    }
    return stringDesencriptada 
}

function btnCopiar(){
    copiar();
}

function copiar(){
    let copiarTexto = mensaje;
    copiarTexto.select();
    document.execCommand("copy");
}