var cont = 1; 
var img1="Imagem 1 Restaurante.png"
var img2="imagem 2 Restaurante.png"
var img3="imagem 3 Restaurante.png"
var tempo=100;
var exibir=setInterval("exibindo()", tempo);

function exibindo()
{
    document.images["slide"].src=eval("img" + cont);
    document.getElementById("r" + contador ).checked=true;

    if (cont<3)
        cont++;
    else
        cont=1;
}

function muda(x)
{
    clearInterval(exibir);
    cont=x;
    exibir=setInterval("exibindo()", tempo);
}