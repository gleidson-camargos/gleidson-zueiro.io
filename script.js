function relogio() {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();
    let res = document.getElementById('relogio');

    if (segundo < 10) {
        segundo = `0` + segundo;
    } if (minuto < 10) {
        minuto = `0` + minuto;
    } if (hora < 9) {
        hora = `0` + hora;
    }

    let relog = `${hora}:${minuto}:${segundo}`;

    res.innerHTML = relog;

}
setInterval(relogio, 1000);

function tsuna() {

    let muda = document.getElementById('mudas');

    muda.src = "img/3.2.gif";


}
function mudawalter() {
    let mudas = document.getElementById('mudawalter');

    mudas.src = "img/4.1.gif";

}
function mudawalter2() {
    let mudas = document.getElementById('mudawalter');
    mudas.src = "img/4.jpg"

}
setInterval(mudawalter, 5000)
setInterval(mudawalter2, 10000)




