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

    var button1 = "<button id='atras'><</button>";
    var button2 = "<button id='adelante'>></button>";
    var numeroImagenActual = "<label id='imagenActual'>1</label>";
    var ciculo1 ="<div id='circulo1'></div><style>#circulo{background: black;width:10px;height:10px; border-radius:50%;border: solid 50% black;}</style>";
    var ciculo2 ="<div id='circulo2'></div><style>#circulo{background: white;width:1%;height:1%; border-radius:50%;border: solid 0.1% black;overflow:hidden;}</style>";
    var ciculo3 ="<div id='circulo3'></div><style>#circulo{background: white;width:1%;height:1%; border-radius:50%;border: solid 0.1% black;overflow:hidden;}</style>";
    var ciculo4 ="<div id='circulo4'></div><style>#circulo{background: white;width:1%;height:1%; border-radius:50%;border: solid 0.1% black;overflow:hidden;}</style>";
    var cantImagenes = 0;

    $("#"+id_div).find('img').each(function(index) {
        if(index > cantImagenes){
            cantImagenes++;
        }
    });    
    $("#"+id_div).after(button1,ciculo1,ciculo2,ciculo3,ciculo4,button2);

    $("#"+id_div).css({marginLeft: '16%'});
    $("#atras").css({marginLeft: '23%'});
    $("#ciculo1").css({marginLeft: '22.2%'});
    $("#ciculo2").css({marginLeft: '0.7%'});
    $("#ciculo3").css({marginLeft: '0.7%'});
    $("#ciculo4").css({marginLeft: '0.7%'});
    $("#adelante").css({marginLeft: '22.2%'});

    $("#"+id_div).prepend(button1);
    $("#"+id_div).append(button2);
    $("#"+id_div).after(textoImagenActual,NumeroImagenActual);

    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);

}