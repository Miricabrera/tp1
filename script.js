// Función para cambiar el color de fondo de la página
document.getElementById('colorButton').onclick = function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? '#f4f4f4' : 'lightblue';
};

// Función para mostrar un mensaje
document.getElementById('mostrarMensajeButton').onclick = function() {
    alert('¡Este es un mensaje de alerta!');
};

// Función para ocultar o mostrar un artículo
document.getElementById('ocultarElementoButton').onclick = function() {
    const articulo2 = document.getElementById('seccion2');
    if (articulo2.style.display === 'none') {
        articulo2.style.display = 'block';
    } else {
        articulo2.style.display = 'none';
    }
};
