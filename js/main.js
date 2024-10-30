var textToFit = 'Iñaki, desde niño, se ensañó con el diseño. Y tras años de empeñarse en ser mañoso, logró hacerlo sin pestañear. Dueño de su negocio, añadió a la señorita del pañuelo añíl. $Enseñándole a diseñar se encariñó con ella, le mandó señales, le hizo carantoñas y le tiró la caña. A lo que ella, hasta el moño de las artimañas del cantamañanas, se enfurruñó, y le gruñó que ni soñara con preñarla, vamos, que se fuese a hacer puñetas.$Iñaki desengañado pasó un Otoño apañado, muy ñoño,  extrañándola e hinchándose a castañas garrapi ñadas. Hasta que una mañana, una tía cañón le guiñó un ojo y fue a piñón.$Y hasta aquí nos ata_e la entra_able mara_a de Iñaki y Bego_a.',
    fadeTo =	0.2;


var navInfo = window.navigator.appVersion.toLowerCase();
var so =                        'Sistema Operativo';
var $showHowTo;

//var iframe = $( '#playerVimeo' )[0],
//    player = $f(iframe);


function retornarSO() {

    if(navInfo.indexOf( 'win' ) != -1 ) {
        so =                    '2';
    }
    else if( navInfo.indexOf('linux') != -1 ) {
        so =                    '3';
    }
    else if( navInfo.indexOf( 'mac' ) != -1 ) {
        so =                    '1';
    }

    return so;
}

function str_replace( $cambia_esto, $por_esto, $cadena, $textarea ) {

    var tieneQueSer =	        textToFit.substring( $textarea.value.length - 1, $textarea.value.length );

    if ( tieneQueSer != $cadena ) {

        $textarea.value =       $textarea.value.substring( 0, $textarea.value.length -1 );
    }
    else if ( $cadena == 'ñ' || $cadena == 'Ñ' ) {
        $( '.eneFinal' ).fadeTo( 400 , fadeTo, function() {
            if ( fadeTo != 1 ) {
                fadeTo =	fadeTo + 0.2;
            }
        });
    }

} //str_replace

//Valida que no sean ingresado ENTER dentro del textarea
function Textarea_Sin_Enter($char, $id){

   $textarea = 				document.getElementById($id);
   str = 				$textarea.value;
   lastNewCharacter =			str.substring( str.length - 1 );
   
    if($char == 13){
        $texto_sin_enter =              str_replace( "", "", '$', $textarea );
    }
    else {
        $texto_sin_enter =              str_replace( "", "", lastNewCharacter, $textarea );
    }

} //textarea

function checkFooter( doThis ) {
    var $wildFooter =                   $( '#wildFooter' );
    if ( doThis == 'show' ) {
        if ( !$wildFooter.hasClass( 'show' ) ) { //si no esta mostrado ya, lo muestro y voy a el
        
            $( '.footer' ).addClass( 'show' );
            $wildFooter.addClass( 'show' );
            
            $wildFooter.animate({
                'height': '200px' }, 800,function(){
                $( "html, body" ).animate({ scrollTop: $(document).height() }, 1 );
            });
        }
    }
    else {
        $( '.footer' ).removeClass( 'show' );
        $wildFooter.removeClass( 'show' );

        $wildFooter.animate({
            'height': '' }, 800,function(){
            //$( "html, body" ).animate({ scrollTop: $(document).height() }, 1000 );
        });
    }
}
//ver si aparecer o no el footer

function cambiarPaso( args, activo ) {

    if ( args == 1 ) {
        if ( activo < args ) {
            $showHowTo.addClass( 'paso21' );
            $showHowTo.removeClass( 'paso31' );
        }
        else {
            $showHowTo.removeClass( 'paso31' ).removeClass( 'paso21' );
            $showHowTo.addClass( 'paso21' );
        }

    } else if ( args == 2 ) {
        if ( activo == 0 ) {
            $showHowTo.addClass( 'paso21' );
        }

        $showHowTo.addClass( 'paso31' );
    } else {
        $showHowTo.removeClass( 'paso31' ).removeClass( 'paso21' );
    }
    
}

//ajustar alturas----------------------------
function ajustarAlturas() {
    var alto =                          $( window ).height(),
        ancho =                         $( window ).width(),
        proporcionVideo =               1.77777,
        alturaVideo;
    
    if ( ( ancho / alto ) < proporcionVideo ) {
        alturaVideo =                   ancho / proporcionVideo;
    }
    else {
        alturaVideo =                   alto;
    }

    $( '#welcome' ).height( alturaVideo );
}

//validarFormualrio-----------------------
function validarform( ) {
    var ok = true;
    
    var RegExPatternPostal = /^(([0-4]{1}[0-9]{1})|([5]{1}[0-2]{1}))[0-9]{3}$/; // cod postal
    var RegExPatternMail = /^[a-zA-Z0-9]{1}[a-zA-Z0-9._-]+@[a-zA-Z0-9]+[a-zA-Z0-9-_]+[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/; // email
    
    var nombre =                        $('#nombre'),
        apellido =                      $('#apellido'),
        email =                         $('#email'),
        ciudad =                        $('#ciudad'),
        direccion =                     $('#direccion'),
        cp =                            $('#cp'),
        sistema =                       $("[name='sistema'][checked]").attr( 'id' );
        
        if ( nombre.val() == '' ) {
            nombre.addClass( 'error' );
            ok =                        false;
        }
        else {
            nombre.removeClass( 'error' );
        }
        
        if ( apellido.val() == '' ) {
            apellido.addClass( 'error' );
            ok =                        false;
        }
        else {
            apellido.removeClass( 'error' );
        }
        
        if ( email.val() == '' ) {
            email.addClass( 'error' );
            ok =                        false;
        }
        else {
            if ( email.val().match(RegExPatternMail) ) {
                email.removeClass( 'error' );
            }
            else {
                email.addClass( 'error' );
                ok =                        false;
            }
        }
        
        if ( ciudad.val() == '' ) {
            ciudad.addClass( 'error' );
            ok =                        false;
        }
        else {
            ciudad.removeClass( 'error' );
        }
        
        if ( direccion.val() == '' ) {
            direccion.addClass( 'error' );
            ok =                        false;
        }
        else {
            direccion.removeClass( 'error' );
        }
        
        if ( cp.val() == '' ) {
            cp.addClass( 'error' );
            ok =                        false;
        }
        else {
            if ( cp.val().match(RegExPatternPostal) ) {
                cp.removeClass( 'error' );
            }
            else {
                cp.addClass( 'error' );
                ok =                    false;
            }
        }
        
        if ( ok == true ) {
            $( '#errorMsg' ).hide();
            $( '#sendForm' ).hide();
            $( '#okMsg' ).show();
            $( '#formularioSolicitar input' ).attr( 'readonly', 'readonly' );

            $.ajax({
                method: "POST",
                url: "askingFor.php",
                data: { nombre: nombre.val(), apellido: apellido.val(),email: email.val(), ciudad: ciudad.val(), direccion: direccion.val(), cp: cp.val(), so: sistema }
            })
                .done(function( msg ) {
                //alert( "Data Saved: " + msg );
            });
        }
        else {
            $( '#errorMsg' ).show();
        }

}
///youtube-----------------
    var tag = document.createElement('script');
    var idVideoYoutube =                    'EBHc4gMktfc';
    
    if( $('body').attr('class') == 'en' ) {
        idVideoYoutube =                    'rgsmCELic8A';
    }
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubeContainer', {
          height: '100%',
          width: '100%',
          videoId: idVideoYoutube,
           playerVars: { 
            'autoplay': 0,
            'controls': 0,
            'rel' : 0,
            'showinfo': 0
            },
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      }

    function onPlayerStateChange(event) {    
        if(event.data === 0) {          
            $( '#youtubeContainer, #cerrarVideo' ).removeClass( 'showVideo' );
        }
    }

function mostrarVideo( ){

    $( '#youtubeContainer, #cerrarVideo' ).addClass( 'showVideo' );
    player.playVideo();
    //iframe.addClass( 'showVideo' );
    
}
function salirVideo() {
    player.stopVideo();
    $( '#youtubeContainer, #cerrarVideo' ).removeClass( 'showVideo' );
}
function onPlay(id) {
//jQuery('.blankOverlay').fadeIn(animSpeed);
//jQuery('h2').text('You clicked play!');
}


function onFinish( id ) {
    $( '#playerVimeo, #cerrarVideo' ).removeClass( 'showVideo' );
}


$( document ).ready(function() {
    var $pasosListaLi =                 $( '#pasosLista li' );
    $showHowTo =                        $( '#howToContainer' );

    //$( '#welcome' ).backstretch( './img/welcome.jpg' );
    ajustarAlturas();
    
    $( '#radio' + retornarSO() ).attr( 'checked', 'checked' );
    
    $( '.radioSO input' ).on( 'click',function(){
        var $this =                     $( this );
        if ( $this.attr( 'id' ) == 'radio1' ) {
            $( '#radio2' ).attr( 'checked', false );
            $( '#radio1' ).attr( 'checked', true );
        }
        else {
            $( '#radio1' ).attr( 'checked', false );
            $( '#radio2' ).attr( 'checked', true );
        }
        
    });
    
    $pasosListaLi.on( 'click', function(){
        var index =                     $pasosListaLi.index( this ),
            activo =                   $( '#pasosLista li.activo' ).index();

        $pasosListaLi.removeClass( 'activo' );
        $pasosListaLi.eq( index ).addClass( 'activo' );

        cambiarPaso( index, activo );
    });

    
    $( '#sendForm' ).on( 'click',function(){
        validarform();
    });
    if ( $( '#movil' ).length == 0 ) {
        $(window).scroll(function() {
            var alturaScroll =              $(window).scrollTop() + $(window).height(),
                alturaDocumento =           $(document).height();
    
            if( alturaScroll == alturaDocumento ) {
                checkFooter( 'show' );
            }
            if( $( '.footer' ).hasClass( 'show' ) == true && ( alturaScroll < ( alturaDocumento - 210 ) ) ) {
                checkFooter( 'hide' )
            }
        });
    } //desktop
    
    //----------------video-----------------
    $( window ).resize(function() {
        ajustarAlturas( );
    });
    ///-----------------------------video---------------------------

    
    

    // When the player is ready, add listeners for play, pause, finish, and playProgress
        //player.addEvent('ready', function() {
        //
        //    player.addEvent('play', onPlay);
        //    player.addEvent('finish', onFinish);

        //});
        $( '#showVideo p' ).on( 'click',function(){
            //player.api( 'play' ); //vimeo
            mostrarVideo();
        });
        $( '#cerrarVideo' ).on( 'click',function(){
            salirVideo();
        });
    //function mostrarVideo( ){

    //$( '#youtubeContainer' ).addClass( 'showVideo' );
    //player.playVideo();
    
    
    //}
    var twtText = 'Buenas noticias para los que no tienen Ñ en su teclado! @Mattel & Scrabble lanzan #MissingÑ. http://www.missingn.com';
    var fbText = 'Scrabble presenta la solución para todos aquellos que están fuera de casa y no pueden escribir con nuestra letra más representativa, la Ñ.';
    
    if ( $( 'body' ).hasClass( 'en' ) == true ) {
        twtText = 'Great news for those who don’t have an Ñ on their keyboards! @Mattel & Scrabble are launching #MissingÑ. http://www.missingn.com';
        fbText = 'Scrabble has the solution for all Spanish people outside of their country who can not write their most representative letter, Ñ.';
    }

    // Twitter Share
	$('#twtShare').on('click', function(event){
		//ga('send', 'event', 'button', 'click', 'share twt', 1); 
		var text = twtText;

		var encodedText = encodeURIComponent(text);										 
		window.open("http://twitter.com/intent/tweet?text=" + encodedText, "twitter", "height=300,width=600");

		event.preventDefault();
	});
	//------------
    //para Share on FB
    var app_id= "1647038172192605";

	  	window.fbAsyncInit = function() {
			FB.init({
		  		appId      : app_id,
		  		xfbml      : true,
		  		version    : 'v2.3'
			});
	  	};

	  	(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
		 	if (d.getElementById(id)) {return;}
		 	js = d.createElement(s); js.id = id;
		 	js.src = "//connect.facebook.net/en_US/sdk.js";
		 	fjs.parentNode.insertBefore(js, fjs);
	   	}(document, 'script', 'facebook-jssdk'));
//para Share on FB
	$('#facebookShare').on('click', function(event){
		//ga('send', 'event', 'button', 'click', 'share fb', 1);
		// console.log(id);
		var vName, vUrl, vPicture, vCaption, vDescription;

				vName = 'Scrabble Missing Ñ';
				vPicture = "http://www.missingn.com//img/share.png";
				vDescription = fbText;
				vUrl = 'http://www.missingn.com';				

		FB.ui( {
			method: 'feed',
			display: "iframe",
			name: vName,
			link: vUrl,
			picture: vPicture,
			description: vDescription
		}, function( response ) {
			// do nothing
		} );
		
		event.preventDefault();
	});
    //check si ok con svg-----
    Modernizr.load(); //si no soporta svg lo cambio por los png
    
    if( !Modernizr.svg ) {
        $( 'body' ).addClass( 'noSvg' );
         $('img[src$=".svg"]').each(function(index,element) {
          element.src = element.src.replace('.svg','.png');
        });
    }
    
    //----
});// ready