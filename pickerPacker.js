function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputNombreValue = inputElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    //Separamos los usuarios por espacios.
    const listaCadenasNombre = inputNombreValue.split(' ');
    //const listaCadenasTienda = inputTiendaValue.split(',');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation securePickerPacker {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        //const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();
        const cadenaTiendaUsuarios = inputTiendaValue; //Al eliminar la iteración le asigna el único valor ingresado a todas las mutations.

        const users = cadenaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLocaleLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });

        resultadoElement.innerHTML += `<pre>  <b>m${i}</b>: associateUserToClient(user: <b>"${usuarios}"</b>, clientId: "app_tienda_mobile"),</pre>`;
        resultadoElement.innerHTML += `<pre>  p${i}: associatePermission(user: <b>"${usuarios}"</b>, clientId: "app_tienda_mobile", scope: "odeon-picker", metadata: "stores::<b>${cadenaTiendaUsuarios}"</b>),</pre>`;
        resultadoElement.innerHTML += `<pre>  <b>x${i}</b>: associateUserToClient(user: <b>"${usuarios}"</b>, clientId: "odeon-front"),</pre>`;
        resultadoElement.innerHTML += `<pre>  y${i}: associatePermission(user: <b>"${usuarios}"</b>, clientId: "odeon-front", scope: "packer", metadata: "stores::<b>${cadenaTiendaUsuarios}"</b>),</pre><br>`;
    }
    resultadoElement.innerHTML += `}`;
}