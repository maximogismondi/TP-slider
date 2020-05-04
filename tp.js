function animar_carrusel(milliseconds_carrusel, id_div){

    var imagenActual = 0;
    var intervalo = setInterval(cambiarImagenAdelante, milliseconds_carrusel);

    function cambiarImagenAdelante(){
    
        clearInterval(intervalo);
        $("#"+id_div).find('img').each(function(index){
            if(index == imagenActual){
                $(this).fadeOut(200);     
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','white');

        if (imagenActual == cantImagenes) {
            imagenActual = 0;
        }
        
        else{

            imagenActual++;
        }
        $("#imagenActual").text("" + (imagenActual+1)); 
        $("#"+id_div).find('img').each(function(index) {    
            if(index == imagenActual){
                $(this).delay(200).fadeIn(200);
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','red');

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    function cambiarImagenAtras(){

        clearInterval(intervalo);

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).fadeOut(200);     
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','white');

        if (imagenActual == 0) {
            imagenActual = cantImagenes;
        }
        else{
            imagenActual--;

        }
        $("#imagenActual").text("" + (imagenActual+1));    
        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).delay(200).fadeIn(200);
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','red');

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    var arregloCirculos;

    $("#"+id_div).find('img').each(function(index) {
            


        if(index!=0){
            $(this).css("display","none");
        }
    });

    var barraDeCirculosYBotones="<div class='barraDeCirculosYBotones'>"+
    "<button id='atras'><</button>";

    var cantImagenes = 0;

    $("#"+id_div).find('img').each(function(index) {
        
        barraDeCirculosYBotones = barraDeCirculosYBotones + "<div id='circulo"+(index+1)+"' class='circulo'></div>";

        if(index > cantImagenes){
            cantImagenes++;
        }
    });    

    barraDeCirculosYBotones = barraDeCirculosYBotones + "<button id='adelante'>></button>"+"</div>";

    $("#"+id_div).after(barraDeCirculosYBotones);
    $("#circulo"+(imagenActual+1)).css('background','red');
    $("#"+id_div).css({marginLeft: '16%'});
    $("#atras").css({marginLeft: '18%'});
    $("#circulo1").css({marginLeft: (30-(1*cantImagenes))+'%'});
    
    for (var i = 2; i < cantImagenes+2; i++) {
        $("#circulo"+i).css({marginLeft: '1.5%'});
    };

    $("#adelante").css({marginLeft: (30-(1*cantImagenes))+'%'});

    //document.getElementById('id').className = **; //Para cambiarle la clase a un circulo

    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);

}