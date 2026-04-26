function buscarCertificado() {
    const apeInput = document.getElementById('apellidos').value.trim().toUpperCase();
    const numInput = document.getElementById('cert-num').value.trim().toUpperCase();

    const certificados = [
        { 
            registro: "Y1NJSNEE", 
            apellido: "FUENTES RIVERA BOTONERO", 
            imagenes: ["cara1.jpg", "cara2.jpg"] 
        },
        { 
            registro: "CDC0245 144", 
            apellido: "FUENTES RIVERA BOTONERO", 
            imagenes: ["excel.jpg"] // Solo mostrará esta imagen
        }
    ];

    const resultado = certificados.find(c => 
        c.registro === numInput && c.apellido.includes(apeInput)
    );

    const resultSection = document.getElementById('result-section');
    const errorMsg = document.getElementById('error-msg');

    if (resultado) {
        // Limpiamos el contenedor y agregamos solo las imágenes del certificado encontrado
        resultSection.innerHTML = resultado.imagenes.map(img => 
            `<img src="${img}" style="width:100%; margin-bottom: 20px;">`
        ).join('') + '<br><button onclick="location.reload()" style="padding:10px; cursor:pointer;">Nueva Consulta</button>';

        document.getElementById('search-section').style.display = 'none';
        resultSection.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
    }
}