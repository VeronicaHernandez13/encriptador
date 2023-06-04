const textoArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje"); 
const copia = document.querySelector(".copiar");
copia.style.display = "none"

function verificarTexto(){
    let textoEscrito = document.querySelector(".texto").value;
    let verificador = textoEscrito.match(/^[a-z]*$/); 

    if (!verificador || verificador === 0){
        alert("Solo son permitidas letras minusculas y sin acentos")
        location.reload();
        return true;
    }
}

function botonEncriptar(){
    const textoEncriptado = encriptar(textoArea.value)
    mensaje.value = textoEncriptado
    textoArea.value = "";
}

function encriptar(stringEncriptador){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptador = stringEncriptador.toLowerCase()

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringEncriptador.includes(codigoMatriz[i][0])){
            stringEncriptador = stringEncriptador.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1])
        }
    }
    return stringEncriptador
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textoArea.value)
    mensaje.value = textoEncriptado
    textoArea.value = "";
}

function desencriptar(stringDesencriptador){
    let codigoMatriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptador = stringDesencriptador.toLowerCase()

    for(let i = 0; i < codigoMatriz.length; i++){
        if(stringDesencriptador.includes(codigoMatriz[i][1])){
            stringDesencriptador = stringDesencriptador.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0])
        }
    }
    return stringDesencriptador
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}