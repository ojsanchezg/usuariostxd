function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputApellidosElement = document.getElementById('inputApellidos');
    const inputRutElement = document.getElementById('inputRut');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputNombreValue = inputElement.value;
    const inputApellidosValue = inputApellidosElement.value;
    const inputRutValue = inputRutElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    //Separamos los usuarios por espacios.
    const listaCadenasNombre = inputNombreValue.split(',');
    const listaCadenasApellidos = inputApellidosValue.split(',');
    const listaCadenasRut = inputRutValue.split(',');
    //const listaCadenasTienda = inputTiendaValue.split(',');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation insecurePackersOdeon {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        const cadenaApellidoUsuarios = listaCadenasApellidos[i].trim();
        const cadenaRutUsuarios = listaCadenasRut[i].trim();
        
        //const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();
        const cadenaTiendaUsuarios = inputTiendaValue; //Al eliminar la iteración le asigna el único valor ingresado a todas las mutations.

        const users = cadenaUsuarios.toLowerCase();
        const usersApellidos = cadenaApellidoUsuarios.toLowerCase();
        const usersRut = cadenaRutUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLocaleUpperCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        const usuariosApellidos = usersApellidos.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLocaleUpperCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        const usuariosRut = usersRut.replace(/\D/g,'');

        resultadoElement.innerHTML += `<p><b>m${i}</b>: associateByRut(user: <b>"${usuariosRut}"</b>, firstName: <b>"${usuarios}"</b>, lastName: <b>"${usuariosApellidos}"</b>, clientId: "odeon-front"),</p>`;
        resultadoElement.innerHTML += `<p>p${i}: associatePermission(user: <b>"${usuariosRut}"</b>, clientId: "odeon-front", scope: "packer", metadata: stores::<b>${cadenaTiendaUsuarios}"</b>)</p>`;
    }
    resultadoElement.innerHTML += `}`;
}