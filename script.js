function buscarCertificado() {
    const apeInput = document.getElementById('apellidos').value.trim().toUpperCase();
    const numInput = document.getElementById('cert-num').value.trim().toUpperCase();

    // Base de datos con los 3 certificados
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
        },
        { 
            registro: "MZ3ZRDMS", 
            apellido: "FUENTES RIVERA BOTONERO", 
            imagenes: ["proyectos.jpg"] 
        }
    ];

    const resultado = certificados.find(c => 
        c.registro === numInput && c.apellido.includes(apeInput)
    );

    const resultSection = document.getElementById('result-section');
    const errorMsg = document.getElementById('error-msg');
    const searchSection = document.getElementById('search-section');

    if (resultado) {
        let contenido = `
            <div class="pdf-toolbar" style="margin-bottom: 20px; display: flex; gap: 15px; justify-content: center;">
                <button onclick="window.print()" style="padding: 12px 25px; cursor: pointer; background: #2c3e50; color: white; border: none; border-radius: 5px; font-weight: bold;">
                    Imprimir
                </button>
                <button onclick="location.reload()" style="padding: 12px 25px; cursor: pointer; background: #e74c3c; color: white; border: none; border-radius: 5px; font-weight: bold;">
                    Nueva Consulta
                </button>
            </div>
        `;

        resultado.imagenes.forEach(img => {
            contenido += `<img src="${img}" alt="Certificado" style="width:100%; max-width: 850px; display: block; margin: 0 auto 20px auto;">`;
        });

        resultSection.innerHTML = contenido;
        searchSection.style.display = 'none';
        resultSection.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
    }
}