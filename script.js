function buscarCertificado() {
    // Obtenemos los valores y los pasamos a mayúsculas
    const apeInput = document.getElementById('apellidos').value.trim().toUpperCase();
    const numInput = document.getElementById('cert-num').value.trim().toUpperCase();

    // Base de datos de certificados
    const certificados = [
        { 
            registro: "Y1NJSNEE", 
            apellidoCompleto: "FUENTES RIVERA BOTONERO", 
            imagen1: "cara1.jpg", 
            imagen2: "cara2.jpg" 
        },
        { 
            registro: "CDC0245 144", 
            apellidoCompleto: "FUENTES RIVERA BOTONERO", 
            imagen1: "excel.jpg", 
            imagen2: "cara2.jpg" 
        }
    ];

    // Buscamos coincidencia exacta de registro y que el apellido ingresado esté contenido en el apellido completo
    const resultado = certificados.find(c => 
        c.registro === numInput && c.apellidoCompleto.includes(apeInput)
    );

    if (resultado) {
        // Mostramos las imágenes
        document.querySelector('#result-section img:nth-child(1)').src = resultado.imagen1;
        document.querySelector('#result-section img:nth-child(2)').src = resultado.imagen2;

        document.getElementById('search-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';
        document.getElementById('error-msg').style.display = 'none';
    } else {
        // Si no coincide, mostramos el error
        document.getElementById('error-msg').style.display = 'block';
    }
}