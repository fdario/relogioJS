var div = document.getElementById('div');
var div2 = document.getElementById('div2');
var intervalo = setInterval(
    function () {
        var date = new Date();
        var dia;
        div.innerHTML = date.toLocaleTimeString();
        switch (date.getDay()){
            case 0:
                dia = 'Domingo';
                break
            case 1:
                dia ='Segunda-feira';
                break
            case 2:
                dia ='Terça-feira';
                break
            case 3:
                dia ='Quarta-feira';
                break
            case 4:
                dia ='Quinta-feira';
                break
            case 5:
                dia ='Sexta-feira';
                break
            case 6:
                dia ='Sábado';
                break
        }
        div2.innerText = `${date.toLocaleDateString()} - ${dia}`
    }, 1000/* 1s */);