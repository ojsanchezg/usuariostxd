function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputTiendaElement = document.getElementById('inputTienda');

    const inputNombreValue = inputElement.value;
    const inputTiendaValue = inputTiendaElement.value;

    const listaCadenasNombre = inputNombreValue.split(' ');
    const listaCadenasTienda = inputTiendaValue.split(' ');

    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation discountApprover {`;
    for (let i=0; i < listaCadenasNombre.length; i++) {
        const cadenaUsuarios = listaCadenasNombre[i].trim();
        const cadenaTiendaUsuarios = listaCadenasTienda[i].trim();

        const users = cadenaUsuarios.toLowerCase();
        //const usersTienda = cadenaTiendaUsuarios.toLowerCase(); No hace falta, son números.

        const usuarios = users.replace('\n','');

        resultadoElement.innerHTML += `<p>m${i}: associateUserToClient(user: "${usuarios}", clientId: "app_tienda_mobile"),</p>`;

        resultadoElement.innerHTML += `p${i}: associatePermission(user: "${usuarios}", clientId: "app_tienda_mobile", scope: "approver",  metadata: "stores::${cadenaTiendaUsuarios}"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
}
