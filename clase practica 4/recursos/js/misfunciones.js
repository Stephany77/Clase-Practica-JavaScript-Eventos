/*scroll*/

window.addEventListener('scroll' , function (){
    let altopantalla = window.innerHeight;
    console.log('alto pantalla' + altopantalla);

    let scrollRecorrido = document.documentElement.scrollTop;

    console.log('scroll recorrido' + scrollRecorrido);

    let listaDetalle = document.querySelectorAll(' article')

    listaDetalle.forEach(function(item, index, listado ){
        let alturaArticle = listado[index].offsetTop;
        console.log ('posicion superior' + index + '::' + alturaArticle);
        if ((alturaArticle*0.6)< scrollRecorrido){
            listado[index].style.opacity = '1';

        } else {
            listado[index].style.opacity = '0';
        }
    });
    })

  /* Ocultar imagen */
var listaArticle = document.querySelectorAll('#imagenes article');
let cantidadItem = listaArticle.length;
console.log ('cantidad de article:' + cantidadItem);

for (let i = 0; i < cantidadItem; i++){
    if (listaArticle[i].classList.contains('show'));{
        listaArticle[i].classList.remove('show');
    }
    listaArticle[i].classList.add('hidden');
}

/* Onclick */
let listaMenu = document.querySelectorAll('#botones li');
for (let j = 0; j<listaMenu.length; j++){
    listaMenu[j].onclick = function(){

       

for (let k=0; k<listaArticle.length; k++){
    if (listaArticle[k].classList.contains('show')){
        listaArticle[k].classList.remove('show');
        listaArticle[k].classList.add('hidden');
    }
}
if (listaArticle[j].classList.contains('hidden')){
    listaArticle[j].classList.remove('hidden');
}
    listaArticle[j].classList.add('show');
    listaArticle[j].classList.add('escala');
    };
}





 