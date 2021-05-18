window.addEventListener('scroll', function(){

let altoPantalla = window.innerHeight;
console.log('alto pantalla' + altoPantalla);
let scrollRecorrido = document.documentElement.scrollTop;

console.log('scroll recorrido' +  scrollRecorrido);
let listaDetalle = document.querySelectorAll('#secDetalles article')

listaDetalle.forEach(function (item, index, listado){
    let alturaDetalle = listado[index].offsetTop;
    console.log('Posicion Superior'+ index +'::' +alturaArticle);
    if ((alturaArticle*0.6)< scrollRecorrido){
        listado[index.style.opacity = '1']
    };
});

 let i=0;
 while (i<listaDetalle.length){
     if ((alturaArticle)= listaDetalle[i].offsetTop;
     console.log('Posicion Superior' + i + ';;' + alturaArticle);
     if ((alturaArticle*0.6) < scrollRecorrido){
         listaDetalle[i].style.opacity = '1';
     }
     i++;
 };

  })