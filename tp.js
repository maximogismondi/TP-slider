function animar_carrusel(milliseconds_carrusel, id_div){

    var imagenActual = 0;
    var intervalo = setInterval(cambiarImagenAdelante, milliseconds_carrusel);

    function cambiarImagenAdelante(){
    
        clearInterval(intervalo);
        $("#"+id_div).find('img').each(function(index){
            if(index == imagenActual){
                $(this).animate({marginLeft: '150%'}, 200).delay(200).fadeOut(0);     
            }
        });
        
        if (imagenActual == 3) {
            imagenActual = 0;
        }
        
        else{
            imagenActual++;
        }

        $("#"+id_div).find('img').each(function(index) {    
            if(index == imagenActual){
                $(this).css({marginLeft: '-100%'}).delay(400).fadeIn(0).animate({marginLeft: '0%'},300);
            }
        });

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    function cambiarImagenAtras(){

        clearInterval(intervalo);

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).animate({marginLeft: '-100%'}, 200).delay(200).fadeOut(0);     
            }
        });

        if (imagenActual == 0) {
            imagenActual = 3;
        }
        else{
            imagenActual--;
        }

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).css({marginLeft: '150%'}).delay(400).fadeIn(0).animate({marginLeft: '0%'},300);
            }
        });

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    $("#"+id_div).find('img').each(function(index) {
        if(index!=0){
            $(this).css("display","none");
        }
    });

    var button1="<button id='atras'>Atras</button>"
    var button2="<button id='adelante'>Adelante</button>"
    var textoImagenActual="<label>Imagen actual: </label>"

    $("#"+id_div).after(button1,button2, textoImagenActual);

    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);

}