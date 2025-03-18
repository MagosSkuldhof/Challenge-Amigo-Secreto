let listaAmigos = []

//Para esta función tomé el nombre que ya se encuentra en index.html, para no tener que cambiarlo ahí.
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value //Crea una variable para poder usarla en este archivo .js

    if (amigo.trim() === ""){ //Este if verifica que el usuario no intente registrar un nombre vacío.
        alert("¿Olvidaste algo? Necesitas poner un nombre!");
        return;
    }

    listaAmigos.push('amigo'); //Añade el nombr ingresado al array listaAmigos [].

    document.getElementById('amigo').value = ""; //Esta línea hace que la caja donde va el nombre se vacíe, pues le "quita" el valor a la Id 'amigo'.
}

//
