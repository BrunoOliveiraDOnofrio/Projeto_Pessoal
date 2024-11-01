document.getElementById('next').onclick = function(){
    const widthItemimg = document.querySelector('#formList-img .slider').offsetWidth;
    const widthItemtxt = document.querySelector('#formList-text .slider').offsetWidth;

    document.getElementById('formList-img').scrollLeft += widthItemimg;
    document.getElementById('formList-text').scrollLeft += widthItemtxt;
}
document.getElementById('prev').onclick = function(){
    const widthItemimg = document.querySelector('#formList-img .slider').offsetWidth;
    const widthItemtxt = document.querySelector('#formList-text .slider').offsetWidth;

    document.getElementById('formList-img').scrollLeft -= widthItemimg;
    document.getElementById('formList-text').scrollLeft -= widthItemtxt;
}