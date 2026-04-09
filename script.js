function buscarCertificado() {
    const ape = document.getElementById('apellidos').value.trim().toUpperCase();
    const num = document.getElementById('cert-num').value.trim().toUpperCase();

    const REGISTRO_VALIDO = "Y1NJSNEE";
    const APELLIDO_VALIDO = "FUENTES";

    if (num === REGISTRO_VALIDO && ape.includes(APELLIDO_VALIDO)) {
        document.getElementById('search-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';
        document.getElementById('error-msg').style.display = 'none';
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function cerrarVista() {
    document.getElementById('result-section').style.display = 'none';
    document.getElementById('search-section').style.display = 'block';
}