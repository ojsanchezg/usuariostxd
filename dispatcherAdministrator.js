function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputDcsElement = document.getElementById('inputDcs');

    const inputNombreValue = inputElement.value;
    const inputDcsValue = inputDcsElement.value;

    //Separamos los usuarios por espacios.
    const listaCadenasNombre = inputNombreValue.split(' ');
    //const listaCadenasTienda = inputTiendaValue.split(' ');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation egAdministrator {<br>`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        //const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();
        const cadenaDcsUsuarios = inputDcsValue; //Al eliminar la iteración le asigna el único valor ingresado a todas las mutations.

        const users = cadenaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLocaleLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });

        resultadoElement.innerHTML += `<span><b>m${i}</b>: associateUserToClient(user: <b>"${usuarios}"</b>, clientId: "eg_dispatcher_frontend"),</span><br>`;
        resultadoElement.innerHTML += `<span>p${i}: associatePermission(user: <b>"${usuarios}"</b>, clientId: "eg_dispatcher_frontend", scope: "administrator", metadata: "dcs::<b>${cadenaDcsUsuarios}"</b>),</span><br>`;
    }
    resultadoElement.innerHTML += `}`;
}