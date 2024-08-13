function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation deletePermissionPickerPacker {<br>`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        resultadoElement.innerHTML += `  <pre><b>  d${i}</b>: deletePermission(userId: "<b>${usuarios}</b>", clientId: "app_tienda_mobile", scope: "odeon-picker"),</pre>`;
        resultadoElement.innerHTML += `  <pre>  b${i}: deletePermission(userId: "<b>${usuarios}</b>", clientId: "odeon-front", scope: "packer"),</pre><br>`;
    }
    resultadoElement.innerHTML += `}`;
    return users;
}