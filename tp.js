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
                $(this).css({marginLeft: '-125%'}).delay(400).fadeIn(0).animate({marginLeft: '0%'},300);
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','red');

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    function cambiarImagenAtras(){

        clearInterval(intervalo);

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).animate({marginLeft: '-75%'}, 200).delay(200).fadeOut(0);     
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
                $(this).css({marginLeft: '125%'}).delay(400).fadeIn(0).animate({marginLeft: '0%'},300);
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','red');

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    $("#"+id_div).find('img').each(function(index) {
        if(index!=0){
            $(this).css("display","none");
        }
    });

    var barraDeCirculosYBotones="<div class='barraDeCirculosYBotones'>"+
    "<button id='atras'><</button>"+
    "<div id='circulo1' class='circulo'></div>"+
    "<div id='circulo2' class='circulo'></div>"+
    "<div id='circulo3' class='circulo'></div>"+
    "<div id='circulo4' class='circulo'></div>"+
    "<button id='adelante'>></button>"+
    "</div>";


    var cantImagenes = 0;

    $("#"+id_div).find('img').each(function(index) {
        if(index > cantImagenes){
            cantImagenes++;
        }
    });    
    $("#"+id_div).after(barraDeCirculosYBotones);
    $("#circulo"+(imagenActual+1)).css('background','red');
    $("#"+id_div).css({marginLeft: '26%'});
    $("#atras").css({marginLeft: '26.5%'});
    $("#circulo1").css({marginLeft: '20%'});
    $("#circulo2").css({marginLeft: '0.7%'});
    $("#circulo3").css({marginLeft: '0.7%'});
    $("#circulo4").css({marginLeft: '0.7%'});
    $("#adelante").css({marginLeft: '20%'});

    //document.getElementById('id').className = **; //Para cambiarle la clase a un circulo

    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);

}