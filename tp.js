function animar_carrusel(milliseconds_carrusel, id_div){

    var imagenActual = 0;
    var intervalo = setInterval(cambiarImagenAdelante, milliseconds_carrusel);

    function cambiarImagenAdelante(){
    
        clearInterval(intervalo);
        $("#"+id_div).find('img').each(function(index){
            if(index == imagenActual){
                $(this).animate({marginLeft: '125%'}, 200).delay(200).fadeOut(0);     
            }
        });
        
        if (imagenActual == 3) {
            imagenActual = 0;


        }
        
        else{

            imagenActual++;
        }
        $("#imagenActual").text("" + (imagenActual+1)); 
        $("#"+id_div).find('img').each(function(index) {    
            if(index == imagenActual){
                $(this).css({marginLeft: '-125%'}).delay(400).fadeIn(0).animate({marginLeft: '0%'},300);
            }
        });

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    function cambiarImagenAtras(){

        clearInterval(intervalo);

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).animate({marginLeft: '-75%'}, 200).delay(200).fadeOut(0);     
            }
        });

        if (imagenActual == 0) {
            imagenActual = 3;
        }
        else{
            imagenActual--;

        }
        $("#imagenActual").text("" + (imagenActual+1));    
        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).css({marginLeft: '125%'}).delay(400).fadeIn(0).animate({marginLeft: '0%'},300);
            }
        });

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    $("#"+id_div).css({marginLeft: '25%'})
    $("#"+id_div).find('img').each(function(index) {
        if(index!=0){
            $(this).css("display","none");            



        }
    });

    var button1="<button id='atras'>Atras</button>";
    var button2="<button id='adelante'>Adelante</button>";
    var textoImagenActual="<label>Imagen actual: </label>";
    var NumeroImagenActual="<label id='imagenActual'>1</label>"


    $("#"+id_div).after(button1,button2, textoImagenActual,NumeroImagenActual);

    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);

}