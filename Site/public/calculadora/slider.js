document.getElementById('next').onclick = function() {
    const heightItemimg = document.querySelector('#formList-img .banner_Calc').offsetHeight;
    const widthItemtxt = document.querySelector('#formList-calculadora .conta').offsetWidth;

    document.getElementById('formList-img').scrollTop += heightItemimg;
    document.getElementById('formList-calculadora').scrollLeft += widthItemtxt;
}

document.getElementById('prev').onclick = function() {
    const heightItemimg = document.querySelector('#formList-img .banner_Calc').offsetHeight;
    const widthItemtxt = document.querySelector('#formList-calculadora .conta').offsetWidth;

    document.getElementById('formList-img').scrollTop -= heightItemimg;
    document.getElementById('formList-calculadora').scrollLeft -= widthItemtxt;
}