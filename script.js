function buscarCertificado() {
    // Obtenemos los valores de los inputs y los limpiamos de espacios
    const apeInput = document.getElementById('apellidos').value.trim().toUpperCase();
    const numInput = document.getElementById('cert-num').value.trim().toUpperCase();

    // Base de datos de certificados configurada
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

    // Buscamos si existe el registro y si el apellido coincide o está contenido
    const resultado = certificados.find(c => 
        c.registro === numInput && c.apellido.includes(apeInput)
    );

    const resultSection = document.getElementById('result-section');
    const errorMsg = document.getElementById('error-msg');
    const searchSection = document.getElementById('search-section');

    if (resultado) {
        // Generamos el contenido: Botones de acción y las imágenes del certificado
        // El botón ahora dice solo "Imprimir"
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

        // Agregamos las imágenes correspondientes al certificado encontrado
        resultado.imagenes.forEach(img => {
            contenido += `<img src="${img}" alt="Certificado" style="width:100%; max-width: 850px; display: block; margin: 0 auto 20px auto;">`;
        });

        // Insertamos el contenido y cambiamos la visibilidad de las secciones
        resultSection.innerHTML = contenido;
        searchSection.style.display = 'none';
        resultSection.style.display = 'block';
        errorMsg.style.display = 'none';
    } else {
        // Si no hay coincidencia, mostramos el mensaje de error
        errorMsg.style.display = 'block';
    }
}