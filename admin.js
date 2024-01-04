function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation oAuthAdmin {<br>`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        resultadoElement.innerHTML += `&emsp;&emsp;<span><b>m${i}</b>: associateUserToClient(user: "<b>${usuarios}</b>", clientId: "oauth_graphql"),</span><br>`;

        resultadoElement.innerHTML += `&emsp;&emsp;<span>p${i}: associatePermission(user: "<b>${usuarios}</b>", clientId: "oauth_graphql", scope: "admin"),</span><br>`;
    }
    resultadoElement.innerHTML += `}`;
    return users;
}