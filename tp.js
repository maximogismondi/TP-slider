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

        intervalo = setInterval(cambiarImagenAdelante, 5000);
    }

    $("#"+id_div).find('img').each(function(index) {
        if(index!=0){
            $(this).css("display","none");
        }
    });

    var conjuntoCirculos="<div id=barraDeCirculosYBotones display: inline>"+
    "<button id='atras'><</button>"+
    "<div id='circulo1' style='background: green;width:1%;height:1%; border-radius:50%;border: solid  green;float: left';></div>"+
    "<div id='circulo2' style='background: black;width:1%;height:1%; border-radius:50%;border: solid  black;float: left';></div>"+
    "<div id='circulo3' style='background: black;width:1%;height:1%; border-radius:50%;border: solid  black;float: left';></div>"+
    "<div id='circulo4' style='background: black;width:1%;height:1%; border-radius:50%;border: solid  black;float: left';></div>"+
    "<button id='adelante'>></button>"+
    "</div>";

    var cantImagenes = 0;

    $("#"+id_div).find('img').each(function(index) {
        if(index > cantImagenes){
            cantImagenes++;
        }
    });    
    $("#"+id_div).after(barraDeCirculosYBotones);
    //document.getElementById('id').className = **; //Para cambiarle la clase a un circulo
    $("#"+id_div).css({marginLeft: '16%'});
    //$("#atras").css({marginLeft: '23%'});
    //$("#ciculo1").css({marginLeft: '22.2%'});
    //$("#ciculo2").css({marginLeft: '0.7%'});
    //$("#ciculo3").css({marginLeft: '0.7%'});
    //$("#ciculo4").css({marginLeft: '0.7%'});
    //("#adelante").css({marginLeft: '22.2%'});

    //$("#"+id_div).prepend(button1);
    //$("#"+id_div).append(button2);
    //$("#"+id_div).after(textoImagenActual,NumeroImagenActual);

    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);

}