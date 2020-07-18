window.addEventListener('load',start);

function start(){
    rodaperender();
}


function rodaperender(){
    var element = document.getElementById('#rodape');
    element.innerHTML = '<b>Hello World!</b>'
}