function animar_carrusel(milliseconds_carrusel, id_div){

    var imagenActual = 0;
    var indice = 0;
    var cantImagenes = 0;
    var intervalo = setInterval(cambiarImagenAdelante, milliseconds_carrusel);
    var id = setInterval(animarBarra,0);


    function animarBarra(){
	    if (indice == 0) {
	    indice = 1;
	    var elem = document.getElementById("miBarra");
	    var width = 0;
	    id = setInterval(frame, milliseconds_carrusel/1000);
	        function frame() {
		        if (width >= 100) {
		            clearInterval(id);
		             indice = 0;
		        } 
		        else {
		            width=width+0.1;
		            elem.style.width = width + "%";
		    	}
			}
		}	
	}

    function cambiarImagenAdelante(){
        indice = 0;
        clearInterval(id);
        animarBarra();
        clearInterval(intervalo);
        $("#"+id_div).find('img').each(function(index){
            if(index == imagenActual){
                $(this).fadeOut(200);     
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','lightgrey');

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

        intervalo = setInterval(cambiarImagenAdelante, milliseconds_carrusel);
    }

    function cambiarImagenAtras(){
        indice = 0;
        clearInterval(id);
        animarBarra();
        clearInterval(intervalo);

        $("#"+id_div).find('img').each(function(index) {
            if(index == imagenActual){
                $(this).fadeOut(200);     
            }
        });

        $("#circulo"+(imagenActual+1)).css('background','lightgrey');

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

        intervalo = setInterval(cambiarImagenAdelante, milliseconds_carrusel);
    }


    var arregloCirculos;
    var ancho;
    $("#"+id_div).find('img').each(function(index) {
            
         ancho=$(this).width();
        if(index!=0){
            $(this).css("display","none");
        }
    });

    var barraDeCirculosYBotones="<div class='barraDeCirculosYBotones'>"+
    "<button id='atras'><</button>"+"<div style='display:inline-block; margin: 0 auto'>";


    $("#"+id_div).find('img').each(function(index) {
        
        barraDeCirculosYBotones = barraDeCirculosYBotones + "<div id='circulo"+(index+1)+"' class='circulo'; style='float:left'></div>";

        if(index > cantImagenes){
            cantImagenes++;
        }
    });    
    barraDeCirculosYBotones = barraDeCirculosYBotones + "</div>" + "<button id='adelante'>></button>"+"</div>";


    var barraDeProgreso="<div id='miProgreso'><div id='miBarra'></div></div>";

    var NombreId=document.getElementById(id_div);
    NombreId.innerHTML += barraDeCirculosYBotones;
    NombreId.innerHTML += barraDeProgreso;


    $("#circulo"+(imagenActual+1)).css('background','red');
    $("#"+id_div).css({"margin":"4% auto","width":ancho,"display":"block"});
 
    $("#atras").click(cambiarImagenAtras);
    $("#adelante").click(cambiarImagenAdelante);
    animarBarra();
}