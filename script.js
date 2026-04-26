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
            imagenes: ["excel.jpg"] 
        }
    ];

    const resultado = certificados.find(c => 
        c.registro === numInput && c.apellido.includes(apeInput)
    );

    const resultSection = document.getElementById('result-section');
    const errorMsg = document.getElementById('error-msg');

    if (resultado) {
        // Generamos el contenido: Botones de acción + las imágenes
        let contenido = `
            <div style="margin-bottom: 20px; display: flex; gap: 10px; justify-content: center;">
                <button onclick="window.print()" style="padding: 10px 20px; cursor: pointer; background: #2c3e50; color: white; border: none; border-radius: 5px;">
                    Imprimir / Descargar PDF
                </button>
                <button onclick="location.reload()" style="padding: 10px 20px; cursor: pointer; background: #e74c3c; color: white; border: none; border-radius: 5px;">
                    Nueva Consulta
                </button>
            </div>
        `;

        // Agregamos las imágenes
        resultado.imagenes.forEach(img => {
            contenido += `<img src="${img}" style="width:100%; max-width: 800px; margin-bottom: 20px; border: 1px solid #ddd;">`;
        });

        resultSection.innerHTML = contenido;
        document.getElementById('search-section').style.display = 'none';
        resultSection.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
    }
}