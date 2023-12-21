function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation deleteUsuario {`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace('\n','');
        resultadoElement.innerHTML += `<p>d${i}: deletePermission(userId: "${usuarios}", clientId: "javel_front", scope: "superuser"),</p>`;
    }
    resultadoElement.innerHTML += `}`;
    return users;
}