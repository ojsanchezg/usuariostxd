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

    const listaCadenasNombre = inputNombreValue.split(' ');
    const listaCadenasApellidos = inputApellidosValue.split(' ');
    const listaCadenasRut = inputRutValue.split(' ');
    const listaCadenasMarca = inputMarcaValue.split(' ');
    const listaCadenasTienda = inputTiendaValue.split(' ');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation insegurosP {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        const cadenaApellidoUsuarios = listaCadenasApellidos[i].trim();
        const cadenaRutUsuarios = listaCadenasRut[i].trim();
        const cadenaMarcaUsuarios = listaCadenasMarca[i].trim();
        const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();

        const users = cadenaUsuarios.toLowerCase();
        const usersApellidos = cadenaApellidoUsuarios.toLowerCase();
        const usersRut = cadenaRutUsuarios.toLowerCase();
        const usersMarca = cadenaMarcaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace('\n','');
        const usuariosApellidos = usersApellidos.replace('\n','');
        const usuariosRut = usersRut.replace('\n','');
        const usuariosMarca = usersMarca.replace('\n','');

        resultadoElement.innerHTML += `<p>pma${i}: associateByRut(user: "${usuariosRut}", firstName: "${usuarios}", lastName: "${usuariosApellidos}", clientId: "pos_movil_app"),</p>`;
        resultadoElement.innerHTML += `pmp1${i}: associatePermission(user: "${usuariosRut}", clientId: "pos_movil_app", scope: "cashier", metadata: "stores::${cadenaTiendaUsuarios};brands::${usuariosMarca}"),</p>`;

        resultadoElement.innerHTML += `pmp0: associatePermission(user: "${usuariosRut}", clientId: "pos_movil_app", scope: "promoter", metadata: "stores::${cadenaTiendaUsuarios};brands::${usuariosMarca}"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
}