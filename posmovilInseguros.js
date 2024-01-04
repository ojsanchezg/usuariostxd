function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputApellidosElement = document.getElementById('inputApellidos');
    const inputRutElement = document.getElementById('inputRut');
    const inputMarcaElement = document.getElementById('inputMarca');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputNombreValue = inputElement.value;
    const inputApellidosValue = inputApellidosElement.value;
    const inputRutValue = inputRutElement.value;
    const inputMarcaValue = inputMarcaElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    //A continuación separaremos los valores para que el for pueda ingresar una nueva mutation.
    //Pero hay un problema, y es que al separar por espacios no permite ingresar más de 1 nombre en un campo, sino que lo corta y lo agrega a la siguiente mutation como si fuera otro usuario diferente.
    //Es entonces cuando intentamos separar por comas. Pero el problema es que no podremos copiar directamente desde el excel o whatsapp los datos de los usuarios.
    const listaCadenasNombre = inputNombreValue.split(',');
    const listaCadenasApellidos = inputApellidosValue.split(',');
    const listaCadenasRut = inputRutValue.split(',');
    const listaCadenasMarca = inputMarcaValue.split(',');
    //const listaCadenasTienda = inputTiendaValue.split(',');

    //Entonces surgen 2 opciones. 1: Dejar de dividir por espacios e incoporar otro con una función. En este caso dejaría de ser automático el agregado de usuarios.
    //Y 2: Seguir dividiendo por espacios y sólo aceptar 1 único nombre y 1 único apellido.
    //Las 2 son inaceptables. Buscar la forma de aceptar pegar varias celdas de excel y aún así separar los usuarios de alguna manera. 

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation promotores {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        const cadenaApellidoUsuarios = listaCadenasApellidos[i].trim();
        const cadenaRutUsuarios = listaCadenasRut[i].trim();
        const cadenaMarcaUsuarios = listaCadenasMarca[i].trim();
        //const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();
        const cadenaTiendaUsuarios = inputTiendaValue;

        const users = cadenaUsuarios.toLowerCase();
        const usersApellidos = cadenaApellidoUsuarios.toLowerCase();
        const usersRut = cadenaRutUsuarios.toLowerCase();
        const usersMarca = cadenaMarcaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLocaleUpperCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        const usuariosApellidos = usersApellidos.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLocaleUpperCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        const usuariosRut = usersRut.replace(/\D/g,'');
        const usuariosMarca = usersMarca.replace('\n','');

        // /\D/g matches all non-digit characters in the originalString. The \D character class matches any character that is not a digit. The g flag specifies that all matches should be replaced.

        resultadoElement.innerHTML += `<p><b>pma${i}</b>: associateByRut(<b>user: "${usuariosRut}</b>", firstName: "<b>${usuarios}</b>", lastName: "<b>${usuariosApellidos}</b>", clientId: "pos_movil_app"),</p>`;
        resultadoElement.innerHTML += `pmp1${i}: associatePermission(<b>user: "${usuariosRut}</b>", clientId: "pos_movil_app", scope: "cashier", metadata: "stores::<b>${cadenaTiendaUsuarios}</b>;brands::<b>${usuariosMarca}</b>"),</p>`;

        resultadoElement.innerHTML += `pmp${i}: associatePermission(<b>user: "${usuariosRut}</b>", clientId: "pos_movil_app", scope: "promoter", metadata: "stores::<b>${cadenaTiendaUsuarios}</b>;brands::<b>${usuariosMarca}</b>"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
}