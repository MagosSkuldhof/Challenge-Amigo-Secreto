let listaAmigos = []

//Para esta función tomé el nombre que ya se encuentra en index.html, para no tener que cambiarlo ahí.
function agregarAmigo() {
    let amigo = document.getElementById('amigo').value //Crea una variable para poder usarla en este archivo .js

    if (amigo.trim() === ""){ //Este if verifica que el usuario no intente registrar un nombre vacío.
        alert("¿Olvidaste algo? Necesitas poner un nombre!");
        return;
    }

    listaAmigos.push('amigo'); //Añade el nombre ingresado al array listaAmigos [].

    document.getElementById('amigo').value = ""; //Esta línea hace que la caja donde va el nombre se vacíe, pues le "quita" el valor a la Id 'amigo'.
    mostrarListaAmigos();
    console.log(listaAmigos);
}

//Esta función será la que habilite a la página mostrar los nombres de la lista
function mostrarListaAmigos (){
    let elementoLista = document.getElementById('listaAmigos'); //Usando el ID que ya está en el html, lo asigno a u variable para manejarlo

    elementoLista.innerHTML = ''; //Se elimina cualquier contenido para evitar duplicados

    for (let amigo of listaAmigos){ //Este es el ciclo for que pasará por todos los amigos en la lista y los hará elementos de lista <li>
        let li = document.createElement('li'); //dejo la variable como li para reacionarlo a listas
        li.textContent = amigo; //Esto pasa el elemento escrito a la variable
        elementoLista.appendChild(li); //FInalmente se añade el amigo a la lista en el html
    }

    console.log(listaAmigos);
}

//
