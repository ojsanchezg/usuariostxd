function funcionSalida() {
    const salida = document.querySelector('#inputText');
    const inputSalida = salida.value;
    //inputSalida
    const salidaDeTexto = document.querySelector(".salida");
    salidaDeTexto.innerHTML = `<p>Aqui va la salida:</p> <br> ${inputSalida} <br><br>`;
    salidaDeTexto.innerHTML += `<div>${inputSalida}</div> <br> `;
    salidaDeTexto.innerHTML += `<p>Fin de la salida</p>`;
}