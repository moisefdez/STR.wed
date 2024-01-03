const Usuario = document.getElementById('Usuario')
let mivariable= sessionStorage.getItem('usuario');



function iniciar(){
    mostrarUltimoAcceso()
    guardarUltimoAcceso();
    mostrarUltimoAcceso();
    Usuario.innerHTML = mivariable
}

function mostrarUltimoAcceso() {
    let ultimaHora = localStorage.getItem("ultimaHoraAcceso");
    let ultimaFecha = localStorage.getItem("ultimaFechaAcceso");
    let ultimaHoraElemento =  document.getElementById("ultimaHora");
    let ultimaFechaElemento = document.getElementById("ultimaFecha");
    let ultimaHoraElemento2 =  document.getElementById("ultimaHora2");
    let ultimaFechaElemento2 = document.getElementById("ultimaFecha2");
    let ultimaHoraElemento3 =  document.getElementById("ultimaHora3");
    let ultimaFechaElemento3 = document.getElementById("ultimaFecha3");
 
    if (ultimaHora && ultimaFecha) {
        ultimaHoraElemento.textContent = ultimaHora;
        ultimaFechaElemento.textContent = ultimaFecha;
        ultimaHoraElemento2.textContent = ultimaHora;
        ultimaFechaElemento2.textContent = ultimaFecha;
        ultimaHoraElemento3.textContent = ultimaHora;
        ultimaFechaElemento3.textContent = ultimaFecha;
    }
}

function obtenerHoraActual() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();
    let periodo = hora >= 12 ? 'PM' : 'AM';

    // Convertir a formato de 12 horas
    hora = hora % 12 || 12;
 
    return hora + ":" + minutos + ":" + segundos + " " + periodo;
}

function obtenerFechaActual() {
    let ahora = new Date();
    let dia = ahora.getDate();
    let mes = ahora.getMonth() + 1; // Sumamos 1 porque los meses van de 0 a 11
    let anio = ahora.getFullYear();
 
    return dia + "/" + mes + "/" + anio;
}

function guardarUltimoAcceso() {
    let ultimaHora = obtenerHoraActual();
    let ultimaFecha = obtenerFechaActual();
 
    localStorage.setItem("ultimaHoraAcceso", ultimaHora);
    localStorage.setItem("ultimaFechaAcceso", ultimaFecha);
}

window.addEventListener('load',iniciar)