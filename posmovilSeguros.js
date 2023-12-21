function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation posMovilSeguros {`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace('\n','');
        resultadoElement.innerHTML += `<p>m${i}: associateUserToClient(userId: "${usuarios}", clientId: "pos_movil_app"),</p>`;

        resultadoElement.innerHTML += `<p>p${i}: associatePermission(userId: "${usuarios}", clientId: "pos_movil_app", scope: "cashier"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
    return users;
}