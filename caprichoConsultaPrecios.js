function procesarLista() {
    const inputElement = document.getElementById('inputNombre');
    const inputScope = document.getElementById('selectScope');
    const inputValue = inputElement.value;
    const scopeValue = inputScope.value;
    // console.log(inputValue);
    const listaCadenas = inputValue.split(' ');
    // console.log(listaCadenas);
    //let resultado = listaCadenas.replace(regex' ');0
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `mutation admProductChecker {<br>`;
    for (let i=0; i < listaCadenas.length; i++) {
        const cadenaUsuarios = listaCadenas[i].trim();
        const users = cadenaUsuarios.toLowerCase();
        const scope = scopeValue;
        const usuarios = users.replace(/(^|[^A-Za-zÁÉÍÓÚÄËÏÖÜÑÇáéíóúäëïöüñç])([a-záéíóúäëïöüñç])/g, function(match, caracterPrevio, minuscula) {
            return caracterPrevio + minuscula.toLowerCase(['es', 'gl', 'ca', 'pt', 'en']);
        });
        resultadoElement.innerHTML += `&emsp;<span><b>m${i}</b>: associateUserToClient(user: "<b>${usuarios}</b>", clientId: "product_checker_control_panel"),</span><br>`;

        resultadoElement.innerHTML += `&emsp;<span>p${i}: associatePermission(user: "<b>${usuarios}</b>", clientId: "product_checker_control_panel", scope: <b>"${scope}"</b>),</span><br>`;
    }
    resultadoElement.innerHTML += `}`;
    return resultadoElement.value;
}

// function copiar() {
    let messageEl = document.querySelector('#messagee');

    document.querySelector('a.enlaces__copiar').addEventListener('click', function(){
        document.querySelector('#resultado').focus();
        document.execCommand('selectAll');
        document.execCommand("copy");
        messageEl.innerHTML = "Copeado al corta papeles";
        setTimeout(() => messageEl.innerHTML="",1500);
})

    // const texto = p.value;

    // // Copia el texto al portapapeles usando el método `writeText()`

    // navigator.clipboard.writeText(texto);

    // // Muestra un mensaje al usuario
    // alert('El texto se ha copiado al portapapeles.');
// }

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}