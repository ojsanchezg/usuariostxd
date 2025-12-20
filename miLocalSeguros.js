function procesarLista() {
    const inputElement = document.getElementById('inputUsuario');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputUsuarioValue = inputElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    //A continuación separaremos los valores para que el for pueda ingresar una nueva mutation.
    //Pero hay un problema, y es que al separar por espacios no permite ingresar más de 1 nombre en un campo, sino que lo corta y lo agrega a la siguiente mutation como si fuera otro usuario diferente.
    //Es entonces cuando intentamos separar por comas. Pero el problema es que no podremos copiar directamente desde el excel o whatsapp los datos de los usuarios.
    const listaCadenasUsuario = inputUsuarioValue.split(' ');
    //const listaCadenasTienda = inputTiendaValue.split(',');

    //Entonces surgen 2 opciones. 1: Dejar de dividir por espacios e incoporar otro con una función. En este caso dejaría de ser automático el agregado de usuarios.
    //Y 2: Seguir dividiendo por espacios y sólo aceptar 1 único nombre y 1 único apellido.
    //Las 2 son inaceptables. Buscar la forma de aceptar pegar varias celdas de excel y aún así separar los usuarios de alguna manera. 

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation miLocaSeguros {`;
    for (let i=0; i < listaCadenasUsuario.length; i++) {
        const cadenaUsuarios = listaCadenasUsuario[i].trim();
        //const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();
        const usersTienda = inputTiendaValue;

        const users = cadenaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        // /\D/g matches all non-digit characters in the originalString. The \D character class matches any character that is not a digit. The g flag specifies that all matches should be replaced.

        const cadenaTiendaUsuarios = usersTienda.replace(/[^0-9]/g,'');

        //resultadoElement.innerHTML += `<pre>    <b>pma${i}</b>: associateByRut(<b>user: "${usuarios}</b>", clientId: "app_tienda_mobile"),</pre>`;
        //resultadoElement.innerHTML += `<pre>    pmp1${i}: associatePermission(<b>user: "${usuariosRut}</b>", clientId: "pos_movil_app", scope: "cashier", metadata: "stores::<b>${cadenaTiendaUsuarios}</b>;brands::<b>${usuariosMarca}</b>"),</pre>`;
        resultadoElement.innerHTML += `<pre>   <b>pmp${i}</b>: associateUserWithPermissions(<b>user: "${usuarios}</b>", clientId: "app_tienda_mobile", scope: "basico", metadata: "stores::<b>${cadenaTiendaUsuarios}</b>"),</pre><br>`;
    }
    resultadoElement.innerHTML += `}`;
}