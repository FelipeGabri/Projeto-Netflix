//variaveis de contagem da direção

var num = 300;
var num2 = 300;

//slide do botão direito

var btnRight = document.getElementById('btnright');

btnRight.addEventListener('click', () => {

    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnright').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrossel');


    if (limit > ref) {

        slideContainer.style.transform = 'translateX(-' + num + 'px)';

        num = num + 300;

        num2 = num2 - 300;

    } else {

        var stoped = ref * slideContainer.clientWidth / carrossel.clientWidth - carrossel.clientWidth + 100;

        var stopedRound = Mtah.round(stoped);

        slideContainer.style.transform = 'translateX(-' + stopedRound + 'px)';


    }


});


//slide botão esquerdo

var btnLeft = document.getElementById('btnleft');

btnLeft.addEventListener('click', () => {


    var limi = document.getElementById('limitador').getBoundingClientRect().left;

    var limit = Math.round(limi);

    var er = document.getElementById('btnleft').getBoundingClientRect().left;

    var ref = Math.round(er);

    var slideContainer = document.getElementById('container');

    var carrossel = document.getElementById('carrossel');

    var slide = slideContainer.getBoundingClientRect().left;

    if (slide < ref) {

        slideContainer.style.transform = 'translateX(' + num2 + 'px)';

        num = num - 300;
        num2 = num2 + 300;

    } else {

        slideContainer.style.transform = 'translateX(0)';

        num = 300;

    }


});