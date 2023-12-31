function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `query searchUser {<br>`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace(/\p{N}\p{S}/g,'');
        const usuariosLower = usuarios.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        resultadoElement.innerHTML += `&emsp;&emsp;<span>users(user: "<b>${usuariosLower}</b>") {</span><br>`;
        resultadoElement.innerHTML += `&emsp;&emsp;&emsp;&emsp;<span>name <br>
            &emsp;&emsp;&emsp;&emsp;firstName<br>
            &emsp;&emsp;&emsp;&emsp;lastName<br>
            &emsp;&emsp;&emsp;&emsp;documentId<br>
            &emsp;&emsp;&emsp;&emsp;mail<br>
            &emsp;&emsp;&emsp;&emsp;permissions {<br>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;clientId<br>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;clientScope<br>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;metadata<br>
            &emsp;&emsp;&emsp;&emsp;}<br>
            &emsp;&emsp;}<br>
    }</span>`;
    }   
}