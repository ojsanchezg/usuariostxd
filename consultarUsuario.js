function procesarLista() {
    const inputElement = document.getElementById('inputText');
    const inputValue = inputElement.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `query searchUser1 {`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const usuarios = users.replace('\n','');
        resultadoElement.innerHTML += `<p>users(user: "${usuarios}") {</p>`;
    }
    resultadoElement.innerHTML += `<p>name <br>
            firstName<br>
            lastName<br>
            documentId<br>
            mail<br>
            permissions {<br>
            clientId<br>
            clientScope<br>
            metadata<br>
            }<br>
        }<br>
    }</p>`;
    resultadoElement.innerHTML += `}`;
}