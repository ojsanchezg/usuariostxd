function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputScope = document.getElementById('selectScope');
    const inputClientid = document.getElementById('selectClientid');
    const inputValue = inputElement.value;
    const scopeValue = inputScope.value;
    const clientIdValue = inputClientid.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation eliminarUsuarios {<br>`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const scope = scopeValue;
        const clientId = clientIdValue;
        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        resultadoElement.innerHTML += `&emsp;<span><b>d${i}</b>: deletePermission(userId: "<b>${usuarios}</b>", clientId: "${clientId}", scope: "${scope}"),</span><br>`;
    }
    resultadoElement.innerHTML += `}`;
}