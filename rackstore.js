function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputNombreValue = inputElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    const listaCadenasNombre = inputNombreValue.split(' ');
    const listaCadenasTienda = inputTiendaValue.split(' ');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation discountApprover {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        const cadenaTiendaUsuarios = listaCadenasTienda;

        const users = cadenaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.
        const usuarios = users.replace(/\p{N}\p{S}/g,'');
        const usuariosLower = usuarios.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });

        resultadoElement.innerHTML += `<p><b>m${i}</b>: associateUserToClient(user: "<b>${usuariosLower}</b>", clientId: "rackstores_mobile"),</p>`;

        resultadoElement.innerHTML += `<b>p${i}</b>: associatePermission(user: "<b>${usuariosLower}</b>", clientId: "rackstores_mobile", scope: "default",  metadata: "stores::<b>${cadenaTiendaUsuarios}</b>"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
}
