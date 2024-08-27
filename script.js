// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.querySelector('.textarea').value;

    // Reemplazar las letras por sus equivalentes encriptados
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    // Colocar el texto encriptado en el campo de texto 2
    document.querySelector('.mensaje').value = textoEncriptado;

    // Limpiar el campo de texto 1
    document.querySelector('.textarea').value = "";

    // Activar o desactivar la imagen de fondo
    toggleBackgroundImage();
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = document.querySelector('.textarea').value;

    // Revertir el texto encriptado a su versión original
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Colocar el texto desencriptado en el campo de texto 1
    document.querySelector('.mensaje').value = textoDesencriptado;

    // Limpiar el campo de texto 2
    document.querySelector('.textarea').value = "";

    // Activar o desactivar la imagen de fondo
    toggleBackgroundImage();
}

// Función para copiar el texto del campo de texto 2 al campo de texto 1
function copiarTexto() {
    let texto = document.querySelector('.mensaje').value;
    document.querySelector('.mensaje').value = "";
    
    document.querySelector('.textarea').value = texto;

    // Copiar al portapapeles
    navigator.clipboard.writeText(texto).then(function() {
        console.log('Texto copiado al portapapeles');
    });

    // Activar o desactivar la imagen de fondo
    toggleBackgroundImage();
}

// Función para activar o desactivar la imagen de fondo en el textarea "mensaje"
function toggleBackgroundImage() {
    let mensajeTextarea = document.querySelector('.mensaje');
    if (mensajeTextarea.value.trim() === "") {
        // Si el campo está vacío, mostrar la imagen de fondo
        mensajeTextarea.style.backgroundImage = "url('monkey.png')";
    } else {
        // Si el campo tiene texto, ocultar la imagen de fondo
        mensajeTextarea.style.backgroundImage = "none";
    }
}

// Asignar las funciones a los botones correspondientes
document.querySelector('.btnencriptar').onclick = encriptarTexto;
document.querySelector('.btndesencriptar').onclick = desencriptarTexto;
document.querySelector('.btncopiar').onclick = copiarTexto;

// Verificar si el campo "mensaje" tiene texto al cargar la página
window.onload = toggleBackgroundImage;
