const nombre = document.getElementById('name')
const pass = document.getElementById('password')
const parrafo = document.getElementById('warning')
const form = document.getElementById('login-form')
/* const Inicio = document.getElementById('Inicio-Seccion') */
const portal = document.getElementById('portal-aplic');



let usuario



// inicio Seccion

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warning = ""
    parrafo.innerHTML=""
    let entrar = false
    if(nombre.value.length <8){
      warning += 'El nombre no es valido <br>'
      entrar = true
      usuario = nombre.value
    }

    if(pass.value.length <6){
        warning += 'El contraseña no es valido <br>'
        entrar = true
        usuario = nombre.value
    }

    if(entrar){
        parrafo.innerHTML = warning
        usuario = nombre.value
    }

    else{
        portal.click()
        usuario = nombre.value 
        href()
    
    }

})

function href(){
    sessionStorage.setItem('usuario',nombre.value)
    /* window.location.href = 'Porta-Aplic.html';
    window.location.href = 'Warning.html'; */
    /* window.location.href = 'Conduce-entrada.html';
    window.location.href = 'Conduce de Salida.html';
     window.location.href = 'Consultar Conduce.html';
     window.location.href = 'Consultar Ordenes.html'; */
    /*  window.location.href = 'prestamo y cambio .html'; */
}




 
