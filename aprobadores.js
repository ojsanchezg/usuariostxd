function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputNombreValue = inputElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    const listaCadenasNombre = inputNombreValue.split(' ');

    const tiendaSinLetras = inputTiendaValue.split(' ');
    //const tiendaUsuarios = tiendaSinLetras.replace(/[^0-9]/g, function(match, caracterPrevio) {
    //    return caracterPrevio;
    //});

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation discountApprover {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        const cadenaTiendaUsuarios = tiendaSinLetras;

        const users = cadenaUsuarios.toLowerCase();
        
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.
        const usuarios = users.replace(/\p{N}\p{S}/g,'');
        const usuariosLower = usuarios.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });

        resultadoElement.innerHTML += `<pre>    <b>m${i}</b>: associateUserToClient(user: "<b>${usuariosLower}</b>", clientId: "app_tienda_mobile"),</pre>`;
        resultadoElement.innerHTML += `<pre>    <b>p${i}</b>: associatePermission(user: "<b>${usuariosLower}</b>", clientId: "app_tienda_mobile", scope: "approver",  metadata: "stores::<b>${cadenaTiendaUsuarios}</b>"),</pre><br>`;
    }
    resultadoElement.innerHTML += `}`;
}
