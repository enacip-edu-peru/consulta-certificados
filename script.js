function buscarCertificado() {
    const ape = document.getElementById('apellidos').value.trim().toUpperCase();
    const num = document.getElementById('cert-num').value.trim().toUpperCase();

    // Base de datos actualizada
    const certificados = [
        { registro: "Y1NJSNEE", apellido: "FUENTES", imagen1: "cara1.jpg", imagen2: "cara2.jpg" },
        { registro: "CDC0245 144", apellido: "FUENTES", imagen1: "excel.jpg", imagen2: "cara2.jpg" }
    ];

    // Buscar coincidencia
    const resultado = certificados.find(c => c.registro === num && ape.includes(c.apellido));

    if (resultado) {
        // Mostrar imágenes correspondientes
        document.querySelector('#result-section img:nth-child(1)').src = resultado.imagen1;
        document.querySelector('#result-section img:nth-child(2)').src = resultado.imagen2;

        document.getElementById('search-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';
        document.getElementById('error-msg').style.display = 'none';
    } else {
        // Mostrar error si no existe
        document.getElementById('error-msg').style.display = 'block';
    }
}