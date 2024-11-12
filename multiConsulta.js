function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    //Empezamos a enviar información de la query al HTML
    resultadoElement.innerHTML = `query multiUserSearch {<br>`;


    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace(/\p{N}\p{S}/g,'');
        const usuariosLower = usuarios.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        resultadoElement.innerHTML += `<pre>    q${i}: users(user: "<b>${usuariosLower}</b>") {</pre>`;
        resultadoElement.innerHTML += `<pre>
        name
        firstName
        lastName
        permissions {
            clientId
            clientScope
            metadata
        }
        createdAt
        updatedAt
        isTrustUser
    }<br></pre>`;
    }
resultadoElement.innerHTML += `}<br>`;
    }
