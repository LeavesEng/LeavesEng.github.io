window.addEventListener('load',start);

function start(){
    rodaperender();
}


function rodaperender(){
    var rodapediv = document.querySelector('#rodape');
    rodapediv.innerHTML = '<b>Hello World!</b>';
}