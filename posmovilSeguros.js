function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation posMovilSeguros {<br>`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();

        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        })

        resultadoElement.innerHTML += `<pre><b>  m${i}</b>: associateUserToClient(user: "<b>${usuarios}</b>", clientId: "pos_movil_app"),</pre>`;
        resultadoElement.innerHTML += `<pre>  p${i}: associatePermission(user: "<b>${usuarios}</b>", clientId: "pos_movil_app", scope: "cashier"),</pre>`;
    }

    resultadoElement.innerHTML += `}`;
    return users;
}